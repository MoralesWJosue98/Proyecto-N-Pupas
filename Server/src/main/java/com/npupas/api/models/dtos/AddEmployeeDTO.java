package com.npupas.api.models.dtos;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

public class AddEmployeeDTO {
	
	@NotBlank(message = "Name cannot be blank!")
	@Size(min = 8, max = 10, message = "Name has to be 10 characters")
	private String name;
	
	@NotBlank(message = "Date cannot be blank!")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate hiringDate;
	
	@NotBlank(message = "Salary cannot be blank!")
	private BigDecimal salary;
	
	@NotBlank(message = "Password cannot be blank!")
	@Size(min = 6, max = 32, message = "Code has to be 6 characters minimum")
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,32}$")
	private String password;

	@NotBlank(message = "Branch cannot be blank!")
	private String id_pupuseria;

	public AddEmployeeDTO() {
		super();
	}

	public AddEmployeeDTO(
			@NotBlank(message = "Name cannot be blank!") @Size(min = 8, max = 10, message = "Name has to be 10 characters") String name,
			@NotBlank(message = "Date cannot be blank!") LocalDate hiringDate,
			@NotBlank(message = "Salary cannot be blank!") BigDecimal salary,
			@NotBlank(message = "Password cannot be blank!") @Size(min = 6, max = 32, message = "Code has to be 6 characters minimum") @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,32}$") String password,
			@NotBlank(message = "Branch cannot be blank!") String id_pupuseria) {
		super();
		this.name = name;
		this.hiringDate = hiringDate;
		this.salary = salary;
		this.password = password;
		this.id_pupuseria = id_pupuseria;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getHiringDate() {
		return hiringDate;
	}

	public void setHiringDate(LocalDate hiringDate) {
		this.hiringDate = hiringDate;
	}

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
