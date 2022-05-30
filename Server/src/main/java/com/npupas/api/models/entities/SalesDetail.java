package com.npupas.api.models.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity(name = "sales_detail")
public class SalesDetail {
	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "sales_detail_id_gen", sequenceName = "sales_detail_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sales_detail_id_gen")
	private Long ID;
	
	@Column
	private Long amount;
	
	@Column
	private BigDecimal total;
	
	@ManyToOne
	@JoinColumn(name = "id_sale", nullable = true)
	private Sale sale;
	
	@ManyToOne
	@JoinColumn(name = "id_product", nullable = true)
	private Product product;

	public SalesDetail() {
		super();
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
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

	public Sale getSale() {
		return sale;
	}

	public void setSale(Sale sale) {
		this.sale = sale;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
