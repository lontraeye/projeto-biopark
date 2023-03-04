/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.model.dto.v1;

import br.com.lucas.enumeration.PersonTypeEnum;
import java.util.Objects;

/**
 *
 * @author Lucas Cardozo
 */
public class PersonV1DTO {

    // Variables
    private Long id;
    private String name;
    private String gender;
    private PersonTypeEnum personTypeEnum;

    // Constructors
    public PersonV1DTO() {
    }

    public PersonV1DTO(Long id, String name, String gender, PersonTypeEnum personTypeEnum) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.personTypeEnum = personTypeEnum;
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
    

    // Equals and hashcode
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 53 * hash + Objects.hashCode(this.id);
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
        final PersonV1DTO other = (PersonV1DTO) obj;
        return Objects.equals(this.id, other.id);
    }
}
