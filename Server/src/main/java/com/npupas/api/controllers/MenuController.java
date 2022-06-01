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

import com.npupas.api.models.dtos.AddProductDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Product;

@RestController
@RequestMapping("/pupuserias")
public class MenuController {
	
	@GetMapping("/{id}/menu")
	public ResponseEntity<List<Product>> getPupuseriaMenu(@PathVariable("id") Long id){
		//TODO
		return null;
	}
	
	@PostMapping("/{id}/menu")
	public ResponseEntity<MessageDTO> createProduct(@PathVariable("id") Long id, @Valid AddProductDTO product, BindingResult result){
		//TODO
		return null;
	}
	
	@GetMapping("/{id}/menu/{product_id}")
	public ResponseEntity<Product> getPupuseriaMenuProduct(@PathVariable("id") Long id, @PathVariable("product_id") Long productId){
		//TODO
		return null;
	}
	
	@PutMapping("/{id}/menu/{product_id}")
	public ResponseEntity<Product> putPupuseriaMenuProduct(@PathVariable("id") Long id, @PathVariable("product_id") Long productId, @Valid AddProductDTO productDTO, BindingResult result ){
		//TODO
		return null;
	}
	
	@DeleteMapping("/{id}/menu/{product_id}")
	public ResponseEntity<Product> deletePupuseriaMenuProduct(@PathVariable("id") Long id, @PathVariable("product_id") Long productId){
		//TODO
		return null;
	}
}
