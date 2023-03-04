/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.model.dto.v1;

import br.com.lucas.model.entity.Building;
import br.com.lucas.model.entity.Person;
import java.math.BigDecimal;
import java.util.Objects;

/**
 *
 * @author Lucas Cardozo
 */
public class ApartmentV1DTO {

    // Variables
    private Long id;
    private String name;
    private String description;
    private Integer number;
    private BigDecimal rentValue;
    private Person lessor;
    private Person tenant;
    private Building building;

    // Constructors
    public ApartmentV1DTO() {
    }

    public ApartmentV1DTO(Long id, String name, String description, Integer number, BigDecimal rentValue, Person lessor, Person tenant, Building building) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.number = number;
        this.rentValue = rentValue;
        this.lessor = lessor;
        this.tenant = tenant;
        this.building = building;
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

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public BigDecimal getRentValue() {
        return rentValue;
    }

    public void setRentValue(BigDecimal rentValue) {
        this.rentValue = rentValue;
    }

    public Person getLessor() {
        return lessor;
    }

    public void setLessor(Person lessor) {
        this.lessor = lessor;
    }

    public Person getTenant() {
        return tenant;
    }

    public void setTenant(Person tenant) {
        this.tenant = tenant;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
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
        final ApartmentV1DTO other = (ApartmentV1DTO) obj;
        return Objects.equals(this.id, other.id);
    }
}
