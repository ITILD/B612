package com.gis.template.service.impl;

import com.gis.template.dao.TemplateDao;
import com.gis.template.service.TemplateService;
import org.apache.ibatis.cursor.Cursor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.*;

/**
 * UavXmlServiceImpl
 *
 * @author Wangxu
 * @date 2021/2/5
 */
@Service
public class TemplateServiceImpl implements TemplateService {

    @Autowired
    private TemplateDao templateDao;


    @Override
    public Map getDBVersion() {
        return templateDao.version();
    }

    @Override
    @Transactional
    public void pathList2db(String uavPathNas) {


        try (Cursor<Map> uavPaths = templateDao.listStream(uavPathNas)) {

            uavPaths.forEach(uavPath -> {
                Map result = new HashMap();


                //直接复制

//                count.getAndIncrement();
            });

//            System.out.println("result_count: " + count);
        } catch (IOException e) {
            e.printStackTrace();
        }


    }


}
