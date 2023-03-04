/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.lucas.service;

import br.com.lucas.exception.ResourceNotFoundException;
import br.com.lucas.mapper.DozerMapper;
import br.com.lucas.model.entity.Apartment;
import br.com.lucas.model.dto.v1.ApartmentV1DTO;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.lucas.model.repository.ApartmentRepository;

/**
 *
 * @author Lucas Cardozo
 */
@Service // Annotation to warn Spring which is an injectable class
public class ApartmentService {

    private final Logger LOGGER = LogManager.getLogger(ApartmentService.class);
    
    @Autowired
    private ApartmentRepository apartmentRepository;
    
    // General
    public ApartmentV1DTO createV1(ApartmentV1DTO apartmentDTO) {
        LOGGER.info("Creating one apartment");
        Apartment apartmentToSave = DozerMapper.parseObject(apartmentDTO, Apartment.class);
        Apartment savedApartment = apartmentRepository.save(apartmentToSave);
        return DozerMapper.parseObject(savedApartment, ApartmentV1DTO.class);
    }
    
    public ApartmentV1DTO updateV1(ApartmentV1DTO apartmentDTO) {
        LOGGER.info("Updating one apartment");
        Apartment apartmentEntity = apartmentRepository.findById(apartmentDTO.getId()).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        apartmentEntity.updateValues(apartmentDTO);
        Apartment savedApartment = apartmentRepository.save(apartmentEntity);
        return DozerMapper.parseObject(savedApartment, ApartmentV1DTO.class);
    }
    
    public void deleteV1(Long idApartment) {
        LOGGER.info("Deleting one apartment");
        Apartment apartmentEntity = apartmentRepository.findById(idApartment).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        apartmentRepository.delete(apartmentEntity);
    }
    
    public ApartmentV1DTO findByIdV1(Long idApartment) {
        LOGGER.info("Finding one apartment");
        return DozerMapper.parseObject(apartmentRepository.findById(idApartment).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID")),
            ApartmentV1DTO.class);
    }
    
    public List<ApartmentV1DTO> findAllV1() {
        LOGGER.info("Finding all apartments");
        return DozerMapper.parseListObjects(apartmentRepository.findAll(),
            ApartmentV1DTO.class);
    }
}
