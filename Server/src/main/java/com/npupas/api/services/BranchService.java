package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.entities.Branch;

public interface BranchService {

	List<Branch> getAllBranches(Long pupuseriaId);

	Branch getOneBranch(Long branchId);

	void createBranch(Branch branch);

}
