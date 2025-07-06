package com.cognizant.orm_learn.model;

import jakarta.persistence.*;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    // Getters and setters

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }

    // ... Generate Getters and Setters
}