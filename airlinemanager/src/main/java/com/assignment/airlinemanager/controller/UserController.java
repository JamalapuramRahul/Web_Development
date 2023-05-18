package com.assignment.airlinemanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.airlinemanager.model.User;
import com.assignment.airlinemanager.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	UserService userService;
	public UserController() {
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/signup")
	public void saveUser(@RequestBody User user) {
		userService.signUp(user);
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getAllUsers();
	}
	
	@GetMapping("/user/{username}")
	public User getUser(@PathVariable String username) {
		return userService.getUser(username);
	}
	
}
