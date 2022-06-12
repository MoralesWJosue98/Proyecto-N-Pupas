package com.npupas.api.models.dtos;

import java.math.BigDecimal;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class SalesDetailsDTO {
	
	@Min(value = 1, message = "You must provide at least 1 product.")
	private Long amount;
	@Min(value = 0)
	private BigDecimal total;
	
	@Min(value = 1, message = "You must provide at least 1 product.")
	private Long idProducto;
	
	private String mass;

	public SalesDetailsDTO(@Min(value = 1, message = "You must provide at least 1 product.") Long amount,
			@Min(0) BigDecimal total,
			@Min(value = 1, message = "You must provide at least 1 product.") Long idProducto, String mass) {
		super();
		this.amount = amount;
		this.total = total;
		this.idProducto = idProducto;
		this.mass = mass;
	}
	

	public SalesDetailsDTO() {
		super();
	}


	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public Long getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}

	public String getMass() {
		return mass;
	}

	public void setMass(String mass) {
		this.mass = mass;
	}
	
	
}
