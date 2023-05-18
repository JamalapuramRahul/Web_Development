package com.assignment.airlinemanager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Immutable;

@Entity
@Immutable
@Table(name = "aircrafts_view")
public class AircraftDTO {
	@Id
	@Column
	private int aircraftid;
	
	@Column
	private String aircraftname;
	@Column
	private String name;
	@Column
	private String hub;
	@Column
	private String from_airport;
	@Column
	private String to_airport;
	@Column
	private String departure;
	@Column
	private String arrival;
	@Column
	private int total_seats;
	@Column
	private int no_aircrafts;
	public AircraftDTO() {
		// TODO Auto-generated constructor stub
	}
	public String getAircraftname() {
		return aircraftname;
	}
	public void setAircraftname(String aircraftname) {
		this.aircraftname = aircraftname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHub() {
		return hub;
	}
	public void setHub(String hub) {
		this.hub = hub;
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
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
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
	public int getNo_aircrafts() {
		return no_aircrafts;
	}
	public void setNo_aircrafts(int no_aircrafts) {
		this.no_aircrafts = no_aircrafts;
	}

}
