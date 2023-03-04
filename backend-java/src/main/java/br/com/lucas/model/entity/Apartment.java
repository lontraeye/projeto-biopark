/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.model.entity;

import br.com.lucas.model.dto.v1.ApartmentV1DTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Objects;

/**
 *
 * @author Lucas Cardozo
 */
@Entity
@Table(name = "apartment")
public class Apartment {

    // Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "rent_value", nullable = false, precision = 15, scale = 5)
    private BigDecimal rentValue;

    @JoinColumn(name = "id_lessor", nullable = false, referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "fk_apartment_lessor"))
    @ManyToOne(fetch = FetchType.LAZY)
    private Person lessor;

    @JoinColumn(name = "id_tenant", referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "fk_apartment_tenant"))
    @ManyToOne(fetch = FetchType.LAZY)
    private Person tenant;
    
    @JoinColumn(name = "id_building", nullable = false, referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "fk_apartment_building"))
    @ManyToOne(fetch = FetchType.LAZY)
    private Building building;

    // Constructors
    public Apartment() {
    }

    public Apartment(String name, String description, BigDecimal rentValue, Integer number, Person lessor, Person tenant, Building building) {
        this.name = name;
        this.description = description;
        this.number = number;
        this.rentValue = rentValue;
        this.lessor = lessor;
        this.tenant = tenant;
        this.building = building;
    }

    //Generals
    public void updateValues(ApartmentV1DTO apartmentDTO) {
        this.name = apartmentDTO.getName();
        this.description = apartmentDTO.getDescription();
        this.number = apartmentDTO.getNumber();
        this.rentValue = apartmentDTO.getRentValue();
        this.lessor = apartmentDTO.getLessor();
        this.tenant = apartmentDTO.getTenant();
        this.building = apartmentDTO.getBuilding();
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
        final Apartment other = (Apartment) obj;
        return Objects.equals(this.id, other.id);
    }
}
