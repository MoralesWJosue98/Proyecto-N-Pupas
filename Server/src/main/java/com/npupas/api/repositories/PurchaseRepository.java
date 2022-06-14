package com.npupas.api.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
	List<Purchase> findByBranch(Branch branch);

	List<Purchase> findByBranchAndPurchaseDate(Branch branch, LocalDate date);
}
