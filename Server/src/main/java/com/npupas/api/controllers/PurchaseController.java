package com.npupas.api.controllers;

import java.util.List;

import javax.validation.Valid;

import com.npupas.api.models.dtos.AddPurchaseDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Purchase;
import com.npupas.api.services.BranchService;
import com.npupas.api.services.PurchaseService;
import com.npupas.api.services.utils.ServiceResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/pupuserias/branches")
public class PurchaseController {
  @Autowired
  PurchaseService purchaseService;

  @Autowired
  BranchService branchService;

  @GetMapping("/{id}/purchases")
  public ServiceResponse<List<Purchase>> getAll(@PathVariable("id") Long branchId) {
    return purchaseService.getAllBranchPurchases(branchId);
  }

  @GetMapping("/{id}/purchases/{id_purchase}")
  public Purchase getOne(@PathVariable("id_purchase") Long purchaseId) {
    return purchaseService.getOnePurchase(purchaseId);
  }

  @PostMapping("/{id}/purchases")
  public ResponseEntity<MessageDTO> saveOne(@Valid AddPurchaseDTO purchaseDTO, @PathVariable("id") Long branchId,
      BindingResult result) {
    try {
      if (result.hasErrors()) {
        new ResponseEntity<MessageDTO>(
            new MessageDTO("No se pudo guardar la compra" + result.getAllErrors().toString()),
            HttpStatus.BAD_REQUEST);
      }

      purchaseService.save(branchId, purchaseDTO);
      return new ResponseEntity<MessageDTO>(new MessageDTO("Compra guardada"), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/{id}/purchases/{id_purchase}")
  public ResponseEntity<MessageDTO> deleteOne(@PathVariable("id_purchase") Long purchaseId) {
    try {
      purchaseService.delete(purchaseId);
      return new ResponseEntity<MessageDTO>(new MessageDTO("Compra eliminada"), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/{id}/purchases/{id_purchase}")
  public ResponseEntity<MessageDTO> updateOne(@Valid AddPurchaseDTO purchaseDTO,
      @PathVariable("id_purchase") Long purchaseId,
      BindingResult result) {
    try {
      Purchase purchaseToUpdate = purchaseService.getOnePurchase(purchaseId);

      if (purchaseToUpdate == null || result.hasErrors()) {
        new ResponseEntity<MessageDTO>(
            new MessageDTO("No se pudo modificar la compra" + result.getAllErrors().toString()),
            HttpStatus.BAD_REQUEST);
      }

      purchaseService.update(purchaseToUpdate, purchaseDTO);
      return new ResponseEntity<MessageDTO>(new MessageDTO("Compra actualizada"), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
