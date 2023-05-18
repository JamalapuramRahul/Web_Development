package com.assignment.airlinemanager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.airlinemanager.model.User;

@Repository
public interface UserRepo  extends JpaRepository<User, Integer>{
	
	public User findByUsername(String username);
}
