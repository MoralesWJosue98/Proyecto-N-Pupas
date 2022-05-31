package com.npupas.api.services;

import java.util.List;

import com.npupas.api.models.dtos.AddPurchaseDTO;
import com.npupas.api.models.entities.Purchase;
import com.npupas.api.services.utils.ServiceResponse;

public interface PurchaseService {

	ServiceResponse<List<Purchase>> getAllBranchPurchases(Long branchId);
	Purchase getOnePurchase(Long idPurchase);
	void save(Long branchId, AddPurchaseDTO purchase);
	void delete(Long purchaseId);
	void update(Purchase purchase, AddPurchaseDTO purchaseDTO);

}
