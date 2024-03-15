CREATE OR REPLACE FUNCTION public._a_pgr_pointatob_bylength(
    -- 起始点
    start_point geometry,
    -- 起始平面 
    start_pid character varying, 
    end_point geometry, 
    end_pid character varying
    )
RETURNS TABLE(
    pid_this character varying,
    name_this character varying,
    geom_this geometry,
    length_cost_this double precision,
    time_cost_this double precision,
    -- 特殊路径 (电梯/楼梯)
    rout_type_this character varying
    )
LANGUAGE plpgsql
AS $function$

declare
	--起点 start 起点在路上最近点startonroad
		--最近路
		start_road_gid int8;
		start_road geometry;
		--开始点在最近路网的点
		start_onroad geometry;
		start_source int4;
		start_target int4;
		start_cost float8;
		start_reverse_cost float8;
		--路网上起点在路网起始线比例(路口起点source 0-1)
		start_onroad_ratio float8;
		start_locate_start_ratio float8;
		start_locate_end_ratio float8;
		start_onroad_to_source_cost float8;
		start_onroad_to_target_cost float8;
	--终点 B
		--最近路
		end_road_gid int8;
		end_road geometry;
		--开始点在最近路网的点
		end_onroad geometry;
		end_source int4;
		end_target int4;
		end_cost float8;
		end_reverse_cost float8;
		--路网上起点在路网起始线比例(路口起点source 0-1)
		end_onroad_ratio float8;
		end_locate_start_ratio float8;
		end_locate_end_ratio float8;
		source_to_end_onroad_cost float8;
		target_to_end_onroad_cost float8;
	--最短路径sql
	sql_dijkstra text;
	cost_full_temp float8;
	cost_full float8;
	start_code int4;
	end_code int4;
	--总路径
	geom_full geometry;

begin
	--最短路径sql
	sql_dijkstra:='SELECT gid AS id,source, target,cost, reverse_cost FROM d_road';
	--获取最短路径点
	--查询离起点最近的线上点
	select 
			gid
			,geom
			,ST_LineLocatePoint(geom, start_point)
			,source
			,target
			,cost
			,reverse_cost
		into 
			 start_road_gid
			,start_road
			,start_onroad_ratio
			,start_source
			,start_target
			,start_cost
			,start_reverse_cost
	FROM d_road 
	WHERE ST_DWithin(geom, start_point,100) and pid = start_pid
	order by geom <-> start_point
	LIMIT 1;

	select ST_LineInterpolatePoint(start_road,start_onroad_ratio)
			,start_cost*(1-start_onroad_ratio)
			,start_reverse_cost*start_onroad_ratio
		into 
			start_onroad
			,start_onroad_to_target_cost
			,start_onroad_to_source_cost;
	    		--查询离起点最近的线上点

	--终点
	select 
		gid
		,geom
		,ST_LineLocatePoint(geom, end_point)
		,source
		,target
		,cost
		,reverse_cost
	into 
		 end_road_gid
		,end_road
		,end_onroad_ratio
		,end_source
		,end_target
		,end_cost
		,end_reverse_cost
	FROM d_road 
	WHERE ST_DWithin(geom, end_point,100) and pid = end_pid
	order by geom <-> end_point
	LIMIT 1;
	
	select ST_LineInterpolatePoint(end_road,end_onroad_ratio)
			,end_reverse_cost*(1-end_onroad_ratio)
			,end_cost*end_onroad_ratio
		into 
			end_onroad
			,target_to_end_onroad_cost
			,source_to_end_onroad_cost;	
		
		
	--最短路径和端点cost和最小
	--可优化 Many to Many + 最小 pgr_dijkstra -> pgr_dijkstraCost 只要cost
	--在一条路上且可以直接连通(考虑单双向)
	if start_road_gid = end_road_gid then
		if start_onroad_to_source_cost > 0 then
		--and (start_onroad_to_source_cost-source_to_end_onroad_cost)>=0
			cost_full_temp:=start_reverse_cost*start_onroad_ratio-end_reverse_cost*end_onroad_ratio;
			--精度预留
			if cost_full_temp >=-0.000001 then
				cost_full:=cost_full_temp;
				start_locate_start_ratio = start_onroad_ratio;
				start_locate_end_ratio = end_onroad_ratio;
			end if;
		end if;
		if start_onroad_to_target_cost > 0 then
			cost_full_temp:=start_cost*(1-start_onroad_ratio)-start_cost*(1-end_onroad_ratio);
			--精度预留
			if cost_full_temp >=-0.000001 then
				cost_full:=cost_full_temp;
				start_locate_start_ratio = 1-start_onroad_ratio;
				start_locate_end_ratio = 1-end_onroad_ratio;
			end if;
		end if;
	end if;
	if start_onroad_to_source_cost > 0 then
		--必须为正 -为单向不通
		if source_to_end_onroad_cost > 0 then
			SELECT agg_cost+start_onroad_to_source_cost+source_to_end_onroad_cost into cost_full_temp FROM pgr_dijkstraCost(sql_dijkstra, start_source, end_source, directed := true);
			--首尾一致
			if start_source = end_source then
				cost_full_temp:=start_onroad_to_source_cost+source_to_end_onroad_cost;
			end if;
			if cost_full is null or cost_full > cost_full_temp then 
				cost_full:=cost_full_temp;
				start_code:=start_source;
				end_code:=end_source;
				start_locate_start_ratio = 0;
				start_locate_end_ratio = start_onroad_ratio;
				end_locate_start_ratio = 0;
				end_locate_end_ratio = end_onroad_ratio;
			end if;
		end if;
		if target_to_end_onroad_cost > 0 then
			SELECT agg_cost +start_onroad_to_source_cost+target_to_end_onroad_cost  into cost_full_temp FROM pgr_dijkstraCost(sql_dijkstra, start_source, end_target, directed := true) ;
			if start_source = end_target then
				cost_full_temp:=start_onroad_to_source_cost+target_to_end_onroad_cost;
			end if;
			if cost_full is null or cost_full > cost_full_temp then 
				cost_full:=cost_full_temp;
				start_code:=start_source;
				end_code:=end_target;
				start_locate_start_ratio = 0;
				start_locate_end_ratio = start_onroad_ratio;
				end_locate_start_ratio = end_onroad_ratio;
				end_locate_end_ratio = 1;
			end if;
		end if;
	end if;
	if start_onroad_to_target_cost > 0 then
		if source_to_end_onroad_cost > 0 then
			SELECT agg_cost+start_onroad_to_target_cost+source_to_end_onroad_cost  into cost_full_temp FROM pgr_dijkstraCost(sql_dijkstra, start_target, end_source, directed := true) ;
			if start_target = end_source then
				cost_full_temp:=start_onroad_to_target_cost+source_to_end_onroad_cost;
			end if;
			if cost_full is null or cost_full > cost_full_temp then 
				cost_full:=cost_full_temp;
				start_code:=start_target;
				end_code:=end_source;
				start_locate_start_ratio = start_onroad_ratio;
				start_locate_end_ratio = 1;
				end_locate_start_ratio = 0;
				end_locate_end_ratio = end_onroad_ratio;
			end if;
		end if;
		if target_to_end_onroad_cost > 0 then
			SELECT agg_cost+start_onroad_to_target_cost+target_to_end_onroad_cost  into cost_full_temp FROM pgr_dijkstraCost(sql_dijkstra, start_target, end_target, directed := true);
			if start_target = end_target then
				cost_full_temp:=start_onroad_to_target_cost+target_to_end_onroad_cost;
			end if;
			if cost_full is null or cost_full > cost_full_temp then 
				cost_full:=cost_full_temp;
				start_code:=start_target;
				end_code:=end_target;
				start_locate_start_ratio = start_onroad_ratio;
				start_locate_end_ratio = 1;
				end_locate_start_ratio = end_onroad_ratio;
				end_locate_end_ratio = 1;
			end if;
		end if;
	end if;
	--获取最短路径路径



	

	--是否要经过不同路网   临近点都在一条路网线
	
if start_code is null then
		--行驶方向与线相反 反转
		if start_onroad_to_source_cost > 0 and start_reverse_cost*start_onroad_ratio-end_reverse_cost*end_onroad_ratio>0.000001 then
			RETURN query  select pid as pid_this,name as name_this,st_reverse(ST_LineMerge(ST_LocateBetween(ST_AddMeasure(geom,0,1),start_locate_start_ratio,start_locate_end_ratio)) ) as geom_this 
			,(start_locate_end_ratio-start_locate_start_ratio)*cost as length_cost_this,(start_locate_end_ratio-start_locate_start_ratio)*time_cost as time_cost_this
			,rout_type as rout_type_this
			from d_road where gid = start_road_gid;
		else
			RETURN query  select  pid as pid_this,name as name_this,ST_LineMerge(ST_LocateBetween(ST_AddMeasure(geom,0,1),start_locate_start_ratio,start_locate_end_ratio)) as geom_this 
			,(start_locate_end_ratio-start_locate_start_ratio)*cost as length_cost_this,(start_locate_end_ratio-start_locate_start_ratio)*time_reverse_cost as time_cost_this
			from d_road where gid = start_road_gid;

		end if;
	else
		RETURN query  select  pid as pid_this,name as name_this , geom as geom_this,
			length_cost as length_cost_this,
			time_cost as time_cost_this,
			rout_type as rout_type_this from (
				select  pid,name,ST_LineMerge(ST_LocateBetween(ST_AddMeasure(geom,0,1),start_locate_start_ratio,start_locate_end_ratio)) as geom ,
				(start_locate_end_ratio-start_locate_start_ratio)*cost as length_cost,(start_locate_end_ratio-start_locate_start_ratio)*time_reverse_cost as time_cost,
				rout_type from d_road where gid = start_road_gid
					union all
				select  pid,name,geom ,A.cost as length_cost,d_road.time_cost as time_cost,
				rout_type from pgr_dijkstra(sql_dijkstra,start_code,end_code,directed := true ) as A LEFT JOIN d_road on  A.edge = d_road.gid 
					union all
				select  pid,name,ST_LineMerge(ST_LocateBetween(ST_AddMeasure(geom,0,1),end_locate_start_ratio,end_locate_end_ratio)) as geom ,
				(end_locate_end_ratio-end_locate_start_ratio)*cost as length_cost,(end_locate_end_ratio-end_locate_start_ratio)*time_reverse_cost as time_cost,
				rout_type from d_road where gid = end_road_gid
		) as B where pid  notnull  ;
	end if;
	



		

--RETURN QUERY SELECT 
--	geom_full as geom_full
-- 	,cost_full as cost_full
-- 	,start_road_gid as start_road_gid
-- 	,end_road_gid as end_road_gid
-- 	,start_code as start_code
-- 	,end_code as end_code
--	,start_onroad as start_onroad
--	,end_onroad as end_onroad
--	,start_locate_start_ratio as start_locate_start_ratio
--	,start_locate_end_ratio as start_locate_end_ratio
--	,end_locate_start_ratio as end_locate_start_ratio
--	,end_locate_end_ratio as end_locate_end_ratio
--;
--return geom_full as geom;


END;
$function$
;
