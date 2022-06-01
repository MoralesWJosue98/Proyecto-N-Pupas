package com.npupas.api.controllers;

import com.npupas.api.models.entities.Pupuseria;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pupuserias")
public class PupuseriaController {
	@GetMapping("/me")
	public ResponseEntity<Pupuseria> getPupuseria(Long id) {
		// TODO
		return null;
	}
}
