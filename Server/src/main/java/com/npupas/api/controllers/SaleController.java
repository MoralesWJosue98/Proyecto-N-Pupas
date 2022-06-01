package com.npupas.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.AddSaleDTO;
import com.npupas.api.models.entities.Sale;

@RestController
@RequestMapping("/pupuserias/branches")
public class SaleController {
	
	@GetMapping("/{id}/sales")
	private ResponseEntity<List<Sale>> getAllSales(@PathVariable("id") Long id){
		//TODO
		return null;
	}
	
	@PostMapping("/{id}/sales")
	private ResponseEntity<List<Sale>> createSale(@PathVariable("id") Long id, @Valid AddSaleDTO saleDTO, BindingResult result){
		//TODO
		return null;
	}
	
	@GetMapping("/{id}/sales/today")
	private ResponseEntity<List<Sale>> getAllSalesForToday(@PathVariable("id") Long id){
		//TODO
		return null;
	}
	
	@GetMapping("/{id}/sales/today/{sale_id}")
	private ResponseEntity<List<Sale>> getSaleForToday(@PathVariable("id") Long id, @PathVariable("sale_id") Long saleId){
		//TODO
		return null;
	}
	
	@PutMapping("/{id}/sales/today/{sale_id}")
	private ResponseEntity<List<Sale>> putSaleForToday(@PathVariable("id") Long id, @PathVariable("sale_id") Long saleId,@Valid AddSaleDTO saleDTO, BindingResult result ){
		//TODO
		return null;
	}
	
	@DeleteMapping("/{id}/sales/today/{sale_id}")
	private ResponseEntity<List<Sale>> deleteSaleForToday(@PathVariable("id") Long id, @PathVariable("sale_id") Long saleId){
		//TODO
		return null;
	}
	
}
