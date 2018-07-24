package com.project.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class UpdateController {

	@Autowired
	private UserService userService;
	
	public UpdateController() {
		
	}	
	/*
	 	This method will instantiate a new User object with the constructor(int userId, String fname, String lname, String email).
	 	Because the password isn't passed around throughout the application, we'll be comparing with the userId. This method will
	 	then send the object to the UserService interface, which sends it to the UserDao for update.
	 	
	 	There are no checks because all of that has already been done on the front-end side. This will return a success either way
	 	since there is no way to check the output at the moment.
	 */
	@PostMapping(value="/updateAccount.do", produces = "application/json")
	public Map<String, Boolean> updateProfile(String userID, String fname, String lname, String email) {
		User user = new User(Integer.parseInt(userID), fname, lname, email);
		userService.updateUserProfile(user);
		return Collections.singletonMap("success", true);
	}

	/*
 	This method will instantiate a new User object with the constructor(int userId, String fname, String lname, String password,
 	String email). The new password will be hashed. This method will then send the object to the UserService interface, which sends it to the UserDao for update.
 	
 	There are no checks because all of that has already been done on the front-end side. This will return a success either way.
	*/
	@PostMapping(value="/updateAccount2.do", produces = "application/json")
	public Map<String, Boolean> updateProfileWithPassword(String userID, String fname, String lname, String email, String password) {
		String newPassword = userService.hashPassword(password);
		System.out.println(newPassword);
		User user = new User(Integer.parseInt(userID), fname, lname, newPassword, email);
		userService.updateUserNewPassword(user);
		return Collections.singletonMap("success", true);
	}
}
