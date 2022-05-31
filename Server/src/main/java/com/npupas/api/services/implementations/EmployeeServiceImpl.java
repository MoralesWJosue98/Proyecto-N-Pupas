package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Employee;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.repositories.EmployeeRepository;
import com.npupas.api.services.EmployeeService;
import com.npupas.api.services.utils.ServiceResponse;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	BranchRepository branchRepository;
	
	@Override
	public ServiceResponse<List<Employee>> getBranchEmployees(Long branchId) {
		Branch branch = branchRepository.findById(branchId).orElse(null);
		if(branch == null)
			return new ServiceResponse<>(false);
		
		List<Employee> foundBranchEmployee = employeeRepository.findByBranch(branch);

		if (foundBranchEmployee == null) {
			return new ServiceResponse<>(false);
		}
		return new ServiceResponse<>(true, foundBranchEmployee);
	}

	@Override
	public ServiceResponse<Employee> getOneEmployee(Long idUser) {
		Employee foundEmployee = employeeRepository.findById(idUser).orElse(null);

		if (foundEmployee == null) {
			return new ServiceResponse<>(false);
		}
		return new ServiceResponse<>(true, foundEmployee);
	}

}
