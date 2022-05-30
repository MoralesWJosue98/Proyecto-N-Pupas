package com.npupas.api.models.entities;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

@Entity(name = "product")
public class Product {
	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "product_id_gen", sequenceName = "product_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_id_gen")
	private Long ID;
	
	@Column
	private String name;
	
	@Column
	private BigDecimal price;
	
	@Column
	private String type;
	
	@ManyToOne
	@JoinColumn(name = "id_pupuseria", nullable = true)
	private Pupuseria pupuseria;
	
	@OneToMany(mappedBy = "product")
	private List<SalesDetail> details;

	public Product() {
		super();
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Pupuseria getPupuseria() {
		return pupuseria;
	}

	public void setPupuseria(Pupuseria pupuseria) {
		this.pupuseria = pupuseria;
	}

	public List<SalesDetail> getDetails() {
		return details;
	}

	public void setDetails(List<SalesDetail> details) {
		this.details = details;
	}

	
}
