package com.example.projectmanagmentapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ProjectManagmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectManagmentApplication.class, args);
	}

}
