/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.service;

import br.com.lucas.exception.ResourceNotFoundException;
import br.com.lucas.mapper.DozerMapper;
import br.com.lucas.model.entity.Building;
import br.com.lucas.model.dto.v1.BuildingV1DTO;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.lucas.model.repository.BuildingRepository;
import org.springframework.data.domain.Sort;

/**
 *
 * @author Lucas Cardozo
 */
@Service // Annotation to warn Spring which is an injectable class
public class BuildingService {

    private final Logger LOGGER = LogManager.getLogger(BuildingService.class);
    
    @Autowired
    private BuildingRepository buildingRepository;
    
    // General
    public BuildingV1DTO createV1(BuildingV1DTO buildingDTO) {
        LOGGER.info("Creating one building");
        Building buildingToSave = DozerMapper.parseObject(buildingDTO, Building.class);
        Building savedBuilding = buildingRepository.save(buildingToSave);
        return DozerMapper.parseObject(savedBuilding, BuildingV1DTO.class);
    }
    
    public BuildingV1DTO updateV1(BuildingV1DTO buildingDTO) {
        LOGGER.info("Updating one building");
        Building buildingEntity = buildingRepository.findById(buildingDTO.getId()).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        buildingEntity.updateValues(buildingDTO);
        Building savedBuilding = buildingRepository.save(buildingEntity);
        return DozerMapper.parseObject(savedBuilding, BuildingV1DTO.class);
    }
    
    public void deleteV1(Long idBuilding) {
        LOGGER.info("Deleting one building");
        Building buildingEntity = buildingRepository.findById(idBuilding).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        buildingRepository.delete(buildingEntity);
    }
    
    public BuildingV1DTO findByIdV1(Long idBuilding) {
        LOGGER.info("Finding one building");
        return DozerMapper.parseObject(buildingRepository.findById(idBuilding).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID")),
            BuildingV1DTO.class);
    }
    
    public List<BuildingV1DTO> findAllV1() {
        LOGGER.info("Finding all buildings");
        return DozerMapper.parseListObjects(buildingRepository.findAll(Sort.by(Sort.Direction.ASC, "name")),
            BuildingV1DTO.class);
    }
}
