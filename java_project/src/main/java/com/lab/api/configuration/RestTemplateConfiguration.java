package com.lab.api.configuration;


import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfiguration {

    @Bean(name = "cep")
    public RestTemplate ifood(RestTemplateBuilder restTemplate) {
        return restTemplate.rootUri("viacep.com.br/ws").build();
    }



}
