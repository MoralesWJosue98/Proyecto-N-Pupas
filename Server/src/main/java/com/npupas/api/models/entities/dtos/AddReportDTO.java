package com.npupas.api.models.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AddReportDTO {
	
	@NotBlank(message = "Report cannot be blank!")
	@Size(min = 4,  message = "Repor has to be 4 characters minimum")
	private String comment;

	public AddReportDTO() {
		super();
	}

	public AddReportDTO(
			@NotBlank(message = "Report cannot be blank!") @Size(min = 4, message = "Repor has to be 4 characters minimum") String comment) {
		super();
		this.comment = comment;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
