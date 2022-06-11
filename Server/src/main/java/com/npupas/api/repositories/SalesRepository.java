package com.npupas.api.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

	List<Sale> findByBranch(Branch branch);
	
	List<Sale> findBySaleDate(LocalDate saleDate);
	
	List<Sale> findBySaleDateAndBranch(LocalDate saleDate, Branch branch);

}
