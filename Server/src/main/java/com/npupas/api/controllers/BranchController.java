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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.AddBranchDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Admin;
import com.npupas.api.models.entities.Branch;
import com.npupas.api.repositories.TokenRepository;
import com.npupas.api.services.BranchService;
import com.npupas.api.utils.ControllersUtils;

@RestController
@RequestMapping("/pupuserias/branches")
public class BranchController {
	@Autowired
	BranchService branchService;

	@Autowired
	TokenRepository tokenRepository;

	@GetMapping("/me")
	private ResponseEntity<List<Branch>> getBranch(@RequestHeader("Authorization") String token) {
		try {
			Admin adminUser = ControllersUtils.searchAdminUser(tokenRepository, token);

			if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
			}

			List<Branch> branches = branchService.getAllBranches(adminUser.getPupuseria().getID());
			return new ResponseEntity<List<Branch>>(branches, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/{id}")
	private ResponseEntity<Branch> getOneBranch(@RequestHeader("Authorization") String token,
			@PathVariable("id") Long id) {
		try {
			Admin adminUser = ControllersUtils.searchAdminUser(tokenRepository, token);
			Branch branch = branchService.getOneBranch(id);

			if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
			} else if (branch == null) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			}

			return new ResponseEntity<Branch>(branch, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/")
	private ResponseEntity<MessageDTO> saveBranch(@RequestHeader("Authorization") String token,
			@Valid AddBranchDTO branchDTO, BindingResult result) {
		try {
			Admin adminUser = ControllersUtils.searchAdminUser(tokenRepository, token);

			if (result.hasErrors()) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			} else if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
			}

			branchService.createBranch(adminUser.getPupuseria().getID(), branchDTO);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<MessageDTO> deleteBranch(@RequestHeader("Authorization") String token,
			@PathVariable("id") Long branchId) {
		try {
			Admin adminUser = ControllersUtils.searchAdminUser(tokenRepository, token);
			Branch branchToDelete = branchService.getOneBranch(branchId);

			if (branchToDelete == null) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			} else if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
			}

			branchService.delete(branchId);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/{id}")
	private ResponseEntity<MessageDTO> updateBranch(@RequestHeader("Authorization") String token,
			@Valid AddBranchDTO branchDTO,
			@PathVariable("id") Long branchId, BindingResult result) {
		try {
			Admin adminUser = ControllersUtils.searchAdminUser(tokenRepository, token);
			Branch branchToUpdate = branchService.getOneBranch(branchId);

			if (result.hasErrors()) {
				System.out.println(result);
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			} else if (branchToUpdate == null) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			} else if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
			}

			branchService.update(branchToUpdate, branchDTO);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
