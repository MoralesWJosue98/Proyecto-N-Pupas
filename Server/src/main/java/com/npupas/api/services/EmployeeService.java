package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.entities.Employee;
import com.npupas.api.services.utils.ServiceResponse;

public interface EmployeeService {

	ServiceResponse<List<Employee>> getBranchEmployees(Long branchId);
	ServiceResponse<Employee> getOneEmployee(Long idUser);
	
}
