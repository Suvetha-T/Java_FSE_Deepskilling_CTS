package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        displayCountry();
    }
    
    public static void displayCountry() {
        LOGGER.info("START");
       
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        Country country = context.getBean("country", Country.class);
        LOGGER.debug("Country : {}", country.toString());
        
        // Get other countries
        Country us = context.getBean("us", Country.class);
        Country de = context.getBean("de", Country.class);
        Country jp = context.getBean("jp", Country.class);
        
        LOGGER.debug("US : {}", us);
        LOGGER.debug("DE : {}", de);
        LOGGER.debug("JP : {}", jp);
        
        LOGGER.info("END");
    }
}