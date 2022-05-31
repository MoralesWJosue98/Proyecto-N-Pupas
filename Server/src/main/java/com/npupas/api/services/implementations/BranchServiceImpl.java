package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.services.BranchService;

@Service
public class BranchServiceImpl implements BranchService {

	@Autowired
	BranchRepository branchRepository;

	@Override
	public List<Branch> getAllBranches(Long pupuseriaId) {
		List<Branch> foundBranches = branchRepository.findByPupuseria(pupuseriaId);

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
