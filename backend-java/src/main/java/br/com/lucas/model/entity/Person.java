/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.model.entity;

import br.com.lucas.enumeration.PersonTypeEnum;
import br.com.lucas.model.dto.v1.PersonV1DTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;

/**
 *
 * @author Lucas Cardozo
 */
@Entity
@Table(name = "person")
public class Person {

    // Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "gender", length = 10)
    private String gender;

    @Enumerated(EnumType.STRING)
    @Column(name = "person_type", nullable = false)
    private PersonTypeEnum personTypeEnum;

    // Constructors
    public Person() {
    }

    public Person(String name, String gender, PersonTypeEnum personTypeEnum) {
        this.name = name;
        this.gender = gender;
        this.personTypeEnum = personTypeEnum;
    }

    //Generals
    public void updateValues(PersonV1DTO personDTO) {
        this.name = personDTO.getName();
        this.gender = personDTO.getGender();
        this.personTypeEnum = personDTO.getPersonTypeEnum();
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public PersonTypeEnum getPersonTypeEnum() {
        return personTypeEnum;
    }

    public void setPersonTypeEnum(PersonTypeEnum personTypeEnum) {
        this.personTypeEnum = personTypeEnum;
    }

    // Equals and Hashcode
    @Override
    public int hashCode() {
        int hash = 5;
        hash = 97 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Person other = (Person) obj;
        return Objects.equals(this.id, other.id);
    }
}
