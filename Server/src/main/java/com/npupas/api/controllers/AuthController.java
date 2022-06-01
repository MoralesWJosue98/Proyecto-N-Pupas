package com.npupas.api.controllers;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.LoginDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.dtos.RegistrationFormDTO;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@PostMapping("/login")
	private ResponseEntity<MessageDTO> login(@Valid LoginDTO logininfo, BindingResult result) {
		// TODO
		return null;
	}

	@PostMapping("/sign-up")
	private ResponseEntity<MessageDTO> registerAdmin(@Valid RegistrationFormDTO formDTO, BindingResult result) {
		// TODO
		return null;
	}

}
