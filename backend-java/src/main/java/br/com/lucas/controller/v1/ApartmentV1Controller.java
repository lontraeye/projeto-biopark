/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.controller.v1;

import br.com.lucas.model.dto.v1.ApartmentV1DTO;
import br.com.lucas.service.ApartmentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Lucas Cardozo
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/apartments")
@RestController
public class ApartmentV1Controller {

    @Autowired // Annotation to inject a class
    private ApartmentService apartmentService;

    // GET
    @GetMapping(value = "/{idApartment}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ApartmentV1DTO findById(@PathVariable(name = "idApartment") Long idApartment) {
        return apartmentService.findByIdV1(idApartment);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ApartmentV1DTO> findAll() {
        return apartmentService.findAllV1();
    }

    // POST
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ApartmentV1DTO create(@RequestBody ApartmentV1DTO apartmentDTO) {
        return apartmentService.createV1(apartmentDTO);
    }

    // PUT
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ApartmentV1DTO update(@RequestBody ApartmentV1DTO apartmentDTO) {
        return apartmentService.updateV1(apartmentDTO);
    }

    // DELETE
    @DeleteMapping(value = "/{idApartment}")
    public ResponseEntity<?> delete(@PathVariable(name = "idApartment") Long idApartment) {
        apartmentService.deleteV1(idApartment);
        return ResponseEntity.noContent().build();
    }
}
