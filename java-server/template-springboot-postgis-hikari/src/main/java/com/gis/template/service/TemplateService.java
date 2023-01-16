package com.gis.template.service;

import java.util.List;
import java.util.Map;

/**
 * UavXmlService
 *
 * @author Wangxu
 * @date 2021/2/5
 */
public interface TemplateService {
    Map getDBVersion();
    void pathList2db(String uavPathNas);


}
