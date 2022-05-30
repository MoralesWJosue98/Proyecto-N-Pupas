package com.npupas.api.models.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AddSaleDTO {
	
	@NotBlank(message = "Name of the product cannot be blank!")
	@Size(min = 8,  message = "Name of the product has to be 8 characters minimum")
	private String nameProduct;

	public AddSaleDTO() {
		super();
	}

	public AddSaleDTO(
			@NotBlank(message = "Name of the product cannot be blank!") @Size(min = 8, message = "Name of the product has to be 8 characters minimum") String nameProduct) {
		super();
		this.nameProduct = nameProduct;
	}

	public String getNameProduct() {
		return nameProduct;
	}

	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}

}
