package com.npupas.api.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.services.AdminService;
import com.npupas.api.services.BranchService;
import com.npupas.api.models.entities.Report;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/pupuserias/branches")
public class ReportController {
	

	
	@Autowired
	BranchService branchService;

	@Autowired
	AdminService adminService;

	@GetMapping("/{id}/employees/report")
	public ResponseEntity<List<Report>> getAll(@PathVariable("id") Long branchId) {
		return null;
	}

	@PostMapping("/{id}/employees/reports/{employeeId}")
	public ResponseEntity<List<Report>>  getUserReport(@PathVariable("id_report") Long idReport) {
	return null;
	
	}
	
	
}
