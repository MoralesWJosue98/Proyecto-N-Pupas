package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Employee;
import com.npupas.api.repositories.EmployeeRepository;
import com.npupas.api.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getBranchEmployees(Long branchId) {
		List<Employee> foundBranchEmployee = employeeRepository.findByBranch(branchId);

		return foundBranchEmployee;
	}

	@Override
	public Employee getOneEmployee(Long idUser) {
		Employee foundEmployee = employeeRepository.findById(idUser).orElse(null);

		return foundEmployee;
	}

}
