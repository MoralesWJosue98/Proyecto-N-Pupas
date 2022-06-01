package com.npupas.api.controllers;

import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.AddBranchDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Branch;
import com.npupas.api.services.BranchService;

@RestController
@RequestMapping("/pupuserias/branches")
public class BranchController {
	@Autowired
	BranchService branchService;

	@GetMapping("/me")
	private ResponseEntity<List<Branch>> getBranch(Long idPupuseria) {
		List<Branch> branches = branchService.getAllBranches(idPupuseria);
		return new ResponseEntity<List<Branch>>(branches, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	private ResponseEntity<Branch> getOneBranch(@PathVariable("id") Long id) {
		Branch branch = branchService.getOneBranch(id);
		return new ResponseEntity<Branch>(branch, HttpStatus.OK);
	}

	@PostMapping("/")
	private ResponseEntity<MessageDTO> saveBranch(@Valid AddBranchDTO branchDTO, Long idPupuseria,
			BindingResult result) {
		try {
			if (result.hasErrors()) {
				new ResponseEntity<MessageDTO>(
						new MessageDTO("No se pudo guardar la sucursal" + result.getAllErrors().toString()),
						HttpStatus.BAD_REQUEST);
			}

			branchService.createBranch(idPupuseria, branchDTO);
			return new ResponseEntity<MessageDTO>(new MessageDTO("Sucursal creada"), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<MessageDTO> deleteBranch(@PathVariable("id") Long branchId) {
		try {
			branchService.delete(branchId);
			return new ResponseEntity<MessageDTO>(new MessageDTO("Sucursal eliminada"), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/{id}")
	private ResponseEntity<MessageDTO> updateBranch(@Valid AddBranchDTO branchDTO,
			@PathVariable("id") Long branchId, BindingResult result) {
		try {
			Branch branchToUpdate = branchService.getOneBranch(branchId);

			if (branchToUpdate == null || result.hasErrors()) {
				new ResponseEntity<MessageDTO>(
						new MessageDTO("No se pudo modificar la sucursal" + result.getAllErrors().toString()),
						HttpStatus.BAD_REQUEST);
			}

			branchService.update(branchToUpdate, branchDTO);
			return new ResponseEntity<MessageDTO>(new MessageDTO("Sucursal actualizada"), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
