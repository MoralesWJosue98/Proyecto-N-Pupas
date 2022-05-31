package com.npupas.api.controllers;

import java.util.List;

import javax.validation.Valid;

import com.npupas.api.models.dtos.AddEmployeeDTO;
import com.npupas.api.models.dtos.MessageDTO;
import com.npupas.api.models.entities.Employee;
import com.npupas.api.services.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/pupuserias/branches")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping("/{id}/employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        // TODO
        return null;
    }

    @GetMapping("/{id}/employees/{id_employee}")
    public ResponseEntity<Employee> getOneEmployee(@PathVariable("id_employee") Long employeeId) {
        // TODO
        return null;
    }

    @PostMapping("/{id}/employees")
    public ResponseEntity<MessageDTO> saveEmployee(@Valid AddEmployeeDTO employeeDTO,
            @PathVariable("id") Long branchId, BindingResult result) {
        // TODO
        return null;
    }

    @PutMapping("/{id}/employees/{id_employee}")
    public ResponseEntity<MessageDTO> updateEmployee(@Valid AddEmployeeDTO employeeDTO,
            @PathVariable("id_employee") Long employeeId, BindingResult result) {
        // TODO
        return null;
    }

    @DeleteMapping("/{id}/employees/{id_employee}")
    public ResponseEntity<MessageDTO> deleteEmployee(@PathVariable("id_employee") Long employeeId) {
        // TODO
        return null;
    }
}
