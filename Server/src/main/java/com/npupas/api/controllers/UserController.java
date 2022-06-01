package com.npupas.api.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.entities.Report;
import com.npupas.api.models.entities.User;

@RestController
@RequestMapping("/users")
public class UserController {

	@GetMapping("/me")
	private ResponseEntity<User> getUser(Long id) {
		// TODO
		return null;
	}

	@GetMapping("/me/{reports}")
	private ResponseEntity<List<Report>> getUserReport(@PathVariable("id_report") Long idReport) {
		// TODO
		return null;
	}

}
