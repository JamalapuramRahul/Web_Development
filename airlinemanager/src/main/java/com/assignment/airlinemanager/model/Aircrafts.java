package com.assignment.airlinemanager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aircrafts")
public class Aircrafts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "aircraftid")
	private int aircraftid;
	
	@Column(name = "aircraftname")
    private String aircraftname;
	
	@Column(name = "airlineid")
    private int airlineid;
	
	@Column(name = "from_airport")
    private String from_airport;
	
	@Column(name = "to_airport")
    private String to_airport;
	
	@Column(name = "Departure")
    private String Departure;
	
	@Column(name = "arrival")
	private String arrival;
	
	@Column(name = "total_seats")
	private int total_seats;
	
	
	public Aircrafts() {
		// TODO Auto-generated constructor stub
	}


	public int getAircraftid() {
		return aircraftid;
	}


	public void setAircraftid(int aircraftid) {
		this.aircraftid = aircraftid;
	}


	public String getAircraftname() {
		return aircraftname;
	}


	public void setAircraftname(String aircraftname) {
		this.aircraftname = aircraftname;
	}


	public int getAirlineid() {
		return airlineid;
	}


	public void setAirlineid(int airlineid) {
		this.airlineid = airlineid;
	}


	public String getFrom_airport() {
		return from_airport;
	}


	public void setFrom_airport(String from_airport) {
		this.from_airport = from_airport;
	}


	public String getTo_airport() {
		return to_airport;
	}


	public void setTo_airport(String to_airport) {
		this.to_airport = to_airport;
	}


	public String getDeparture() {
		return Departure;
	}


	public void setDeparture(String departure) {
		Departure = departure;
	}


	public String getArrival() {
		return arrival;
	}


	public void setArrival(String arrival) {
		this.arrival = arrival;
	}


	public int getTotal_seats() {
		return total_seats;
	}


	public void setTotal_seats(int total_seats) {
		this.total_seats = total_seats;
	}
	
	

}
