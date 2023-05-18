package com.assignment.airlinemanager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "airlineid")
	private int airlineid;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "hub")
	private String hub;
	
	@Column(name = "no_aircrafts")
	private int no_aircrafts;
	
	
	public Admin() {
		// TODO Auto-generated constructor stub
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


	public int getNo_aircrafts() {
		return no_aircrafts;
	}


	public void setNo_aircrafts(int no_aircrafts) {
		this.no_aircrafts = no_aircrafts;
	}

}
