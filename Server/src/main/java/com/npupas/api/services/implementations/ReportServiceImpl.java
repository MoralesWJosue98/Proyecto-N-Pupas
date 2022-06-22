package com.npupas.api.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.dtos.AddReportDTO;
import com.npupas.api.models.entities.Admin;
import com.npupas.api.models.entities.Employee;
import com.npupas.api.models.entities.Report;
import com.npupas.api.repositories.BranchRepository;
import com.npupas.api.repositories.EmployeeRepository;
import com.npupas.api.repositories.ReportRepository;
import com.npupas.api.services.ReportService;

@Service
public class ReportServiceImpl implements ReportService {

	@Autowired
	ReportRepository reportRepository;

	@Autowired
	BranchRepository branchRepository;

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Report getOneReport(Long idReport) {
		Report foundReport = reportRepository.findById(idReport).orElse(null);
		return foundReport;
	}

	@Override
	public void save(Admin admin, Long employeeId, AddReportDTO reportDTO) {
		Report report = new Report();
		Employee employee = employeeRepository.findById(employeeId).get();

		if (employee == null) {
			return;
		}

		report.setAdmin(admin);
		report.setEmployee(employee);
		report.setComment(reportDTO.getComment());
		report.setReportDate(reportDTO.getReportDate());

		reportRepository.save(report);

	}

	@Override
	public void delete(Long reportId) {
		reportRepository.deleteById(reportId);
	}

	@Override
	public Boolean update(Long reportId, AddReportDTO reportDTO) {
		Report report = reportRepository.findById(reportId).orElse(null);
		if (report == null)
			return false;

		report.setComment(reportDTO.getComment());
		report.setReportDate(reportDTO.getReportDate());

		reportRepository.save(report);
		return true;
	}

	@Override
	public List<Report> getAllBranchReport(Long branchId) {
		// TODO Auto-generated method stub
		return null;
	}

}