package com.assignment.airlinemanager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.airlinemanager.Repository.AircraftsRepo;
import com.assignment.airlinemanager.model.Aircrafts;

@Service
public class AircraftsService {

	@Autowired 
	AircraftsRepo repo;
	public AircraftsService() {
		// TODO Auto-generated constructor stub
	}
	
	public List<Aircrafts> getAircrafts(){
		return repo.findAll();
	}

}
