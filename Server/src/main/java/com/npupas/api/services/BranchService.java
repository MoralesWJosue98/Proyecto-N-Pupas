package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.services.utils.ServiceResponse;

public interface BranchService {

	ServiceResponse<List<Branch>> getAllBranches(Long pupuseriaId);
	ServiceResponse<Branch> getOneBranch(Long branchId);
	ServiceResponse<Void> createBranch(Branch branch);

}
