package com.assignment.airlinemanager.model;

public class Employee {

	private String emp_type;
	private String emp_name;
	private int aircraft_id;
	private String subtype;
	private String address_type;
	private String address;
	public Employee() {
		// TODO Auto-generated constructor stub
	}
	public String getEmp_type() {
		return emp_type;
	}
	public void setEmp_type(String emp_type) {
		this.emp_type = emp_type;
	}
	public String getEmp_name() {
		return emp_name;
	}
	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}
	public int getAircraft_id() {
		return aircraft_id;
	}
	public void setAircraft_id(int aircraft_id) {
		this.aircraft_id = aircraft_id;
	}
	public String getSubtype() {
		return subtype;
	}
	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}
	public String getAddress_type() {
		return address_type;
	}
	public void setAddress_type(String address_type) {
		this.address_type = address_type;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

}
