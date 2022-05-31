package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Pupuseria;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.repositories.PupuseriaRepository;
import com.npupas.api.services.BranchService;

@Service
public class BranchServiceImpl implements BranchService {

	@Autowired
	BranchRepository branchRepository;

	@Autowired
	PupuseriaRepository pupuseriaRepository;
	
	@Override
	public ServiceResponse<List<Branch>> getAllBranches(Long pupuseriaId) {
		Pupuseria pupuseria = pupuseriaRepository.findById(pupuseriaId).orElse(null);
		if(pupuseria == null)
			return new ServiceResponse<>(false);
		
		List<Branch> foundBranches = branchRepository.findByPupuseria(pupuseria);

		return foundBranches;
	}

	@Override
	public Branch getOneBranch(Long id) {
		Branch foundBranch = branchRepository.findById(id).orElse(null);

		if (foundBranch == null) {
			return new Branch();
		}
		return foundBranch;
	}

	@Override
	public void createBranch(Branch branch) {

		branchRepository.save(branch);

	}

}
