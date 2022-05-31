package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.dtos.AddPurchaseDTO;
import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Purchase;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.repositories.PurchaseRepository;
import com.npupas.api.services.PurchaseService;
import com.npupas.api.services.utils.ServiceResponse;

@Service
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	PurchaseRepository purchaseRepository;

	@Autowired
	BranchRepository branchRepository;

	@Override
	public ServiceResponse<List<Purchase>> getAllBranchPurchases(Long branchId) {
		List<Purchase> foundBranchPurchase = purchaseRepository.findByBranch(branchId);

		if (foundBranchPurchase == null) {
			return new ServiceResponse<>(false);
		}

		return new ServiceResponse<>(true, foundBranchPurchase);
	}

	@Override
	public Purchase getOnePurchase(Long idPurchase) {
		Purchase foundPurchase = purchaseRepository.findById(idPurchase).orElse(null);
		return foundPurchase;
	}

	@Override
	public void save(Long branchId, AddPurchaseDTO purchaseDTO) {
		Branch branch = branchRepository.findById(branchId).orElse(null);

		Purchase purchaseToSave = new Purchase();
		purchaseToSave.setAmount(purchaseDTO.getAmount());
		purchaseToSave.setConcept(purchaseDTO.getConcept());
		purchaseToSave.setPurchaseDate(purchaseDTO.getPurchaseDate());
		purchaseToSave.setBranch(branch);

		purchaseRepository.save(purchaseToSave);
	}

	@Override
	public void delete(Long purchaseId) {
		purchaseRepository.deleteById(purchaseId);
	}

	@Override
	public void update(Purchase purchase, AddPurchaseDTO purchaseDTO) {
		purchase.setConcept(purchaseDTO.getConcept());
		purchase.setAmount(purchaseDTO.getAmount());
		purchase.setPurchaseDate(purchaseDTO.getPurchaseDate());

		purchaseRepository.save(purchase);
	}
}
