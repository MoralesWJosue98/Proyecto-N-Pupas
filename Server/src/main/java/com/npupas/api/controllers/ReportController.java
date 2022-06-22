package com.npupas.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npupas.api.models.dtos.AddPurchaseDTO;
import com.npupas.api.models.dtos.AddReportDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Admin;
import com.npupas.api.models.entities.Report;
import com.npupas.api.services.AdminService;
import com.npupas.api.services.BranchService;
import com.npupas.api.services.ReportService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/pupuserias/branches")
public class ReportController {

	@Autowired
	ReportService reportService;

	@Autowired
	BranchService branchService;

	@Autowired
	AdminService adminService;

	@GetMapping("/{id}/employees/report")
	public ResponseEntity<List<Report>> getAll(@PathVariable("id") Long branchId) {
		try {
			List<Report> reports = reportService.getAllBranchReport(branchId);
			if (reports == null)
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

			return new ResponseEntity<List<Report>>(reports, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/{id}/employees/reports/{employeeId}")
	public ResponseEntity<MessageDTO> saveOne(@RequestHeader("Authorization") String token,
			@Valid AddReportDTO reportDTO, @PathVariable("id") Long branchId,
			@PathVariable("employeeId") Long employeeId,
			BindingResult result) {
		try {
			Admin adminUser = adminService.getAdminByToken(token.substring(7));

			if (adminUser == null) {
				return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
			}

			if (result.hasErrors()) {
				new ResponseEntity<MessageDTO>(
						new MessageDTO("No se pudo guardar el reporte" + result.getAllErrors().toString()),
						HttpStatus.BAD_REQUEST);
			}

			reportService.save(adminUser, employeeId, reportDTO);
			return new ResponseEntity<MessageDTO>(new MessageDTO("Reporte guardado con éxito."), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<MessageDTO>(new MessageDTO("Error interno."), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}