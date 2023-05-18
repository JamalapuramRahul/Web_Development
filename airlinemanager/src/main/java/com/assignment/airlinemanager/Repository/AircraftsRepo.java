package com.assignment.airlinemanager.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.assignment.airlinemanager.model.AircraftDTO;
import com.assignment.airlinemanager.model.Aircrafts;

public interface AircraftsRepo extends JpaRepository<Aircrafts, Integer>{
	
//	@Query(nativeQuery = true, value = "")
//	public List<AircraftDTO> getAircrafts();
}
