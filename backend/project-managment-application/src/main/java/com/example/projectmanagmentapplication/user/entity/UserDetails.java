package com.example.projectmanagmentapplication.user.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDetails {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String surname;

    public UserDetails(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }
}
