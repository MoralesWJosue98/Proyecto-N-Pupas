package com.npupas.api.models.dtos;


import java.math.BigDecimal;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class AddProductDTO {
	
	@NotBlank(message = "Name of the product cannot be blank!")
	@Size(min = 8,  message = "Name of the product has to be 8 characters minimum")
	private String nameProduct;
	
	@NotBlank(message = "Price cannot be blank!")
	private BigDecimal price;

	@NotBlank(message = "Type cannot be blank!")
	@Size(min = 8, max = 30, message = "Type has to be 8 characters minimum")
	private String type;

	public AddProductDTO() {
		super();
	}

	public AddProductDTO(
			@NotBlank(message = "Name of the product cannot be blank!") @Size(min = 8, message = "Name of the product has to be 8 characters minimum") String nameProduct,
			@NotBlank(message = "Price cannot be blank!") BigDecimal price,
			@NotBlank(message = "Type cannot be blank!") @Size(min = 8, max = 30, message = "Type has to be 8 characters minimum") String type) {
		super();
		this.nameProduct = nameProduct;
		this.price = price;
		this.type = type;
	}


	public String getNameProduct() {
		return nameProduct;
	}

	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
