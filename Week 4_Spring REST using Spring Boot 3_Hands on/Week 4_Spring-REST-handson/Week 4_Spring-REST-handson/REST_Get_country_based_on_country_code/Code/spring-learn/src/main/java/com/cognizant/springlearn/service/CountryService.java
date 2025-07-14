package com.cognizant.springlearn.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {
    
    public Country getCountry(String code) {
        
        try (ClassPathXmlApplicationContext context = 
                new ClassPathXmlApplicationContext("country.xml")) {
            
            
            List<Country> countries = context
                .getBeansOfType(Country.class)
                .values()
                .stream()
                .collect(Collectors.toList());
            
            
            return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException(
                	    "Country with code " + code + " not found"));
        }
    }
}