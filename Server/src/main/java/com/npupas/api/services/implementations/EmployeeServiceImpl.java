package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Employee;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.repositories.EmployeeRepository;
import com.npupas.api.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	BranchRepository branchRepository;
	
	@Override
	public List<Employee> getBranchEmployees(Long branchId) {
		Branch branch = branchRepository.findById(branchId).orElse(null);
		if(branch == null)
			return null;
		
		List<Employee> foundBranchEmployee = employeeRepository.findByBranch(branch);

		return foundBranchEmployee;
	}

	@Override
	public Employee getOneEmployee(Long idUser) {
		Employee foundEmployee = employeeRepository.findById(idUser).orElse(null);

		return foundEmployee;
	}

}
