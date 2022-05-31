package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.entities.Employee;

public interface EmployeeService {

	List<Employee> getBranchEmployees(Long branchId);

	Employee getOneEmployee(Long idUser);

}
