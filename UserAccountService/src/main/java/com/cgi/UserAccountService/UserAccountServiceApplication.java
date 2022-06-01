package com.cgi.UserAccountService;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.cgi.UserAccountService.filters.JSONFilter;

@SpringBootApplication
public class UserAccountServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserAccountServiceApplication.class, args);
	}

	@Bean
	public GlobalFilter getGlobalFilter() {
		return new JSONFilter();
	}

	@Bean
	public RouteLocator getRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route((r)->{return r.path("/api/v1/orders/**").uri("http://localhost:9003");})
				.route((r)->{return r.path("/api/v1/cart/**").uri("http://localhost:9006");})
				.route((r)->{return r.path("/api/v1/product/**").uri("http://localhost:9009");})
				//add product route
				.build();
	}

	@Bean
	public CorsWebFilter corsWebFilter() {

	   System.out.println("cors invoked");

	    CorsConfiguration corsConfig = new CorsConfiguration();
	    corsConfig.setAllowedOrigins(Arrays.asList("*"));
	    corsConfig.setMaxAge(3600L);
	    corsConfig.setAllowedMethods(Arrays.asList("GET", "POST","PUT","DELETE"));
	    corsConfig.addAllowedHeader("*");

	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", corsConfig);

	    return new CorsWebFilter(source);
	}

}
