package com.assignment.airlinemanager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.airlinemanager.Repository.UserRepo;
import com.assignment.airlinemanager.model.User;

@Service
public class UserService {
	
	@Autowired
	UserRepo rep;
	public UserService() {
		// TODO Auto-generated constructor stub
	}
	
	public void signUp(User user) {
		rep.save(user);
	}
	
	public List<User> getAllUsers() {
		return rep.findAll();
	}

	public User getUser(String username) {
		return rep.findByUsername(username);
	}
}
