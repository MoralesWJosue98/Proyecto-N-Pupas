package com.npupas.api.models.entities;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity(name = "employee")
public class Employee {
	@Id
	@Column(name = "id_user")
	private Long ID;
	
	@Column
	private BigDecimal salary;

	@Column(name = "afp_accumulated")
	private BigDecimal Afp;
	
	@Column(name = "isss_accumulated")
	private BigDecimal Isss;
	
	@Column(name = "rent_accumulated")
	private BigDecimal Rent;
	
	@Column(name= "hiring_date")
	private LocalDate hiringDate;
	
	@OneToOne(mappedBy = "employee")
	User user;
	
	@OneToMany(mappedBy = "employee", fetch = FetchType.LAZY, cascade = { CascadeType.MERGE })
	private List<Report> reports;
	
	@ManyToOne
	@JoinColumn(name = "id_branch", nullable = true)
	private Branch branch;

	public Employee() {
		super();
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	public BigDecimal getAfp() {
		return Afp;
	}

	public void setAfp(BigDecimal afp) {
		Afp = afp;
	}

	public BigDecimal getIsss() {
		return Isss;
	}

	public void setIsss(BigDecimal isss) {
		Isss = isss;
	}

	public BigDecimal getRent() {
		return Rent;
	}

	public void setRent(BigDecimal rent) {
		Rent = rent;
	}

	public LocalDate getHiringDate() {
		return hiringDate;
	}

	public void setHiringDate(LocalDate hiringDate) {
		this.hiringDate = hiringDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Report> getReports() {
		return reports;
	}

	public void setReports(List<Report> reports) {
		this.reports = reports;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}
	
	
	
}
