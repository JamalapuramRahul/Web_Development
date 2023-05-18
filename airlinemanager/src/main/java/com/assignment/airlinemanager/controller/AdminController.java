package com.assignment.airlinemanager.controller;

import java.sql.ResultSet;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.airlinemanager.model.Admin;
import com.assignment.airlinemanager.model.AircraftAirline;
import com.assignment.airlinemanager.model.AircraftDTO;
import com.assignment.airlinemanager.model.Employee;
import com.assignment.airlinemanager.service.AdminService;

@RestController
@CrossOrigin
public class AdminController {

	@Autowired
	AdminService adm;
	public AdminController() {
		// TODO Auto-generated constructor stub
	}

	@GetMapping("/details")
	public List<Admin> getDetails() {
		return adm.getAllInfo();
	}
	
	@PostMapping("/update")
	public void updateDetails(@RequestBody Admin admin) {
		adm.findByName(admin);
	}
	
//	@GetMapping("/air")
//	public List<AircraftDTO> getAircrafts() {
//		return adm.getAircrafts();
//	}
//	
	@Transactional
	@DeleteMapping("/remove/{name}")
	public void deleteDetail(@PathVariable String name) {
		adm.deleteByName(name);
	}
	
	@PostMapping("/employeeinsert")
	public void insertEmployee(@RequestBody Employee employee) {
		adm.insertEmployee(employee.getEmp_type(), employee.getEmp_name(), employee.getAircraft_id(), employee.getSubtype(), employee.getAddress_type(), employee.getAddress());
	}
}
