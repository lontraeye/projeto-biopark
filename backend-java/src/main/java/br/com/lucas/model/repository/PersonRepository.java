/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.com.lucas.model.repository;

import br.com.lucas.enumeration.PersonTypeEnum;
import br.com.lucas.model.entity.Person;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Lucas Cardozo
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByPersonTypeEnum(PersonTypeEnum personTypeEnum, Sort sort);
}
