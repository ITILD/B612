package com.gis.template.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.cursor.Cursor;

import java.util.List;
import java.util.Map;

/**
 * UavPathTransDao
 *
 * @author Wangxu
 * @date 2021/3/3
 */
//@Mapper
public interface TemplateDao {
    @Select("select  VERSION()")
    Map version();

    @Select("select * from ${tableName}")
    Cursor<Map> listStream(@Param("tableName") String tableName);

    @Select("select * from ${tableName}")
    List<Map> listMap(@Param("tableName") String tableName);

    @Update("CREATE TABLE ${tableName} (  \"data_name\" varchar COLLATE \"pg_catalog\".\"default\",\n" +
            "  \"data_type\" varchar COLLATE \"pg_catalog\".\"default\",\n" +
            "  \"data_size\" varchar COLLATE \"pg_catalog\".\"default\",\n" +
            ")\n" +
            ";")
    int createTable(@Param("tableName") String tableName);


    int addResult(@Param("tableName") String tableName, @Param("map") Map params);
}
