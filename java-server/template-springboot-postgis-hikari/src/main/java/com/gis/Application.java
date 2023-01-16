package com.gis;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@EnableTransactionManagement
@MapperScan("com.gis.*.dao")
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println("φ(゜▽゜*)♪  one small step for a man, one giant leap for mankind\n");
        System.out.println("φ(゜▽゜*)♪  two small step for a man, two giant leap for mankind\n");
        System.out.println("φ(゜▽゜*)♪  three small step for a man, three giant leap for mankind\n");
    }
}
