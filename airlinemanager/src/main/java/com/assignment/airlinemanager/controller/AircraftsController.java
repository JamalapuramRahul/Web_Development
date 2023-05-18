package com.assignment.airlinemanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.airlinemanager.model.Aircrafts;
import com.assignment.airlinemanager.service.AircraftsService;

@RestController
@CrossOrigin
public class AircraftsController {

	@Autowired
	AircraftsService as;
	public AircraftsController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/aircrafts")
	public List<Aircrafts> getAllAircrafts(){
		return as.getAircrafts();
	}
	
	
	
}
