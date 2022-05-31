package com.npupas.api.services;

import java.time.LocalDate;
import java.util.List;

import com.npupas.api.models.entities.Branch;
import com.npupas.api.models.entities.Sale;

public interface SalesService {

	List<Sale> getBranchSales(Branch branch);

	List<Sale> getTodaySales(LocalDate date);

	Sale getSale(Long idSale);

}
