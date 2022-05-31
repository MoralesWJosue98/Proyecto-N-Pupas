package com.npupas.api.services.implementations;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Sale;
import com.npupas.api.repositories.SalesRepository;
import com.npupas.api.services.SalesService;

@Service
public class SalesServiceImpl implements SalesService {

	@Autowired
	SalesRepository salesRepository;

	@Override
	public List<Sale> getBranchSales(Branch branch) {
		List<Sale> foundSale = salesRepository.findByBranch(branch);

		return foundSale;
	}

	@Override
	public List<Sale> getTodaySales(LocalDate date) {
		List<Sale> foundTodaySale = salesRepository.findBySaleDate(date);

		return foundTodaySale;
	}

	@Override
	public Sale getSale(Long idSale) {
		Sale foundSale = salesRepository.findById(idSale).orElse(null);

		return foundSale;
	}

}
