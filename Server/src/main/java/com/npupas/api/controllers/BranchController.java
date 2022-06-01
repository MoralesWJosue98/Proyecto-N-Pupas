package com.npupas.api.controllers;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.AddBranchDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Branch;

@RestController
@RequestMapping("/pupuserias/branches")
public class BranchController {

	@GetMapping("/me")
	private ResponseEntity<Branch> getBranch(Long idBranch) {
		// TODO
		return null;
	}

	@GetMapping("/{id}")
	private ResponseEntity<Branch> getOneBranch(@PathVariable("id") Long id) {
		// TODO
		return null;
	}

	@PostMapping("/")
	private ResponseEntity<MessageDTO> createBranch(@Valid AddBranchDTO addBranch, BindingResult result) {
		// TODO
		return null;
	}

}
