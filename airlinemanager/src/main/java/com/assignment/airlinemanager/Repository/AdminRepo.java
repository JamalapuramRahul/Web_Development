package com.assignment.airlinemanager.Repository;
//import java.sql.ResultSet;

import java.sql.ResultSet;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.assignment.airlinemanager.model.Admin;
import com.assignment.airlinemanager.model.AircraftAirline;
import com.assignment.airlinemanager.model.AircraftDTO;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	public Admin findByName(String name);
	public void deleteByName(String name);
	
//	@Query(nativeQuery = true, value = "call get_aircrafts ")
//	public List<AircraftAirline> getAircrafts(@Param("airlinename") String name);
	
//	@Query(nativeQuery = true, value = "select * from aircrafts_view;")
//	public List<AircraftDTO> getAircrafts();
	
	@Query(value = "CALL insert_employee(:emp_type, :emp_name,:aircraft_id, :subtype, :address_type, :address);", nativeQuery = true)
    void insertEmployee(@Param("emp_type") String emp_type,@Param("emp_name") String emp_name, @Param("aircraft_id") int aircraft_id, @Param("subtype") String subtype, @Param("address_type") String address_type, @Param("address") String address);
}
