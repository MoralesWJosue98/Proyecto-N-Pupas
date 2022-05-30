package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Purchase;
import com.npupas.api.repositories.PurchaseRepository;
import com.npupas.api.services.PurchaseService;
import com.npupas.api.services.utils.ServiceResponse;

@Service
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	PurchaseRepository purchaseRepository;

	@Override
	public ServiceResponse<List<Purchase>> getBranchPurchase(Long branchId) {
		List<Purchase> foundBranchPurchase = purchaseRepository.findByBranch(branchId);

		if (foundBranchPurchase == null) {
			return new ServiceResponse<>(false);
		}
        
		return new ServiceResponse<>(true, foundBranchPurchase);
	}

	@Override
	public ServiceResponse<Purchase> getOnePurchase(Long idPurchase) {
		Purchase foundPurchase = purchaseRepository.findById(idPurchase).orElse(null);

		if (foundPurchase == null) {
			return new ServiceResponse<>(false);
		}
		return new ServiceResponse<>(true, foundPurchase);
	}

}
