package com.assignment.airlinemanager.service;

import java.sql.ResultSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.airlinemanager.Repository.AdminRepo;
import com.assignment.airlinemanager.model.Admin;
import com.assignment.airlinemanager.model.AircraftAirline;
import com.assignment.airlinemanager.model.AircraftDTO;
//import com.assignment.airlinemanager.model.User;

@Service
public class AdminService {

	@Autowired
	AdminRepo rep;
	
	public AdminService() {
		// TODO Auto-generated constructor stub
	}
	
	public List<Admin> getAllInfo() {
		return rep.findAll();
	}
	
	public Admin findByName(Admin admin) {
		Admin ad = rep.findByName(admin.getName());
		
		if(ad != null) {
			ad.setName(admin.getName());
			ad.setHub(admin.getHub());
			ad.setNo_aircrafts(admin.getNo_aircrafts());

		} else {
			ad = new Admin();
			ad.setName(admin.getName());
			ad.setHub(admin.getHub());
			ad.setNo_aircrafts(admin.getNo_aircrafts());
			
		}
		
		return rep.save(ad);
	}
	
//	public List<AircraftDTO> getAircrafts() {
//		return rep.getAircrafts();
//	}
	public void deleteByName(String name) {
		 rep.deleteByName(name);
	}
	
	public void insertEmployee(String emp_type, String emp_name, int aircraft_id, String subtype, String address_type, String address) {
		rep.insertEmployee(emp_type, emp_name, aircraft_id, subtype, address_type, address);
	}

}
