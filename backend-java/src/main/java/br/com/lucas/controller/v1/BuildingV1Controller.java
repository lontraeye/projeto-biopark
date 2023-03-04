/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.controller.v1;

import br.com.lucas.model.dto.v1.BuildingV1DTO;
import br.com.lucas.service.BuildingService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api/v1/buildings")
@RestController
public class BuildingV1Controller {

    @Autowired // Annotation to inject a class
    private BuildingService buildingService;

    // GET
    @GetMapping(value = "/{idBuilding}", produces = MediaType.APPLICATION_JSON_VALUE)
    public BuildingV1DTO findById(@PathVariable(name = "idBuilding") Long idBuilding) {
        return buildingService.findByIdV1(idBuilding);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BuildingV1DTO> findAll() {
        return buildingService.findAllV1();
    }

    // POST
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public BuildingV1DTO create(@RequestBody BuildingV1DTO buildingDTO) {
        return buildingService.createV1(buildingDTO);
    }

    // PUT
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public BuildingV1DTO update(@RequestBody BuildingV1DTO buildingDTO) {
        return buildingService.updateV1(buildingDTO);
    }

    // DELETE
    @DeleteMapping(value = "/{idBuilding}")
    public ResponseEntity<?> delete(@PathVariable(name = "idBuilding") Long idBuilding) {
        buildingService.deleteV1(idBuilding);
        return ResponseEntity.noContent().build();
    }
}
