package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.entities.Purchase;
import com.npupas.api.services.utils.ServiceResponse;

public interface PurchaseService {

	ServiceResponse<List<Purchase>> getBranchPurchase(Long branchId);
	ServiceResponse<Purchase> getOnePurchase(Long idPurchase);

}
