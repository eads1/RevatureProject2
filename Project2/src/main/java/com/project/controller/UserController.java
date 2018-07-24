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
public class UserController {

	@Autowired
	private UserService userService;

	public UserController() {
		
	}
	
	@PostMapping(value="/getUser.do", produces = "application/json")
	public User updateProfile(String someID) {
		User user = userService.getUserById(someID);
		//return Collections.singletonMap("success", true);
		return user;
	}
}
