package com.gis.template.controller;

import com.gis.template.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
// import java.io.File;
import java.util.Map;


/**
 * TestController
 *
 * @author wangxu
 * @date 2021/2/3
 */


@Controller
@RequestMapping("/tm")
@CrossOrigin
public class TemplateController {
    @Autowired
    private TemplateService templateService;

    @ResponseBody
    @GetMapping("ts")
    public String ts(HttpServletResponse response) {
        System.out.println("ts");
        response.addHeader("ImageInfobest","test");
        response.addHeader("test","test");
        return "ts";
    }



    @ResponseBody
    @GetMapping("testParams")
    public void testParams(@RequestParam String p1,@RequestParam double p2,HttpServletResponse response) {
        System.out.println(p1+""+p2);
        response.addHeader("ImageInfobest","test");
        response.addHeader("test","test");
//        return p1+""+p2;
    }


    /**

     * @Des 测试DB链接

     * @Date

     * @Param

     * @Return

     */
    @ResponseBody
    @GetMapping("getDBVersion")
    public Map getDBVersion() {

        Map dbVersion = templateService.getDBVersion();
        System.out.println(dbVersion);
        return dbVersion;
    }


}
