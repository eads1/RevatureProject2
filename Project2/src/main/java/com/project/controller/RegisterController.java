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
public class RegisterController {

	@Autowired
	private UserService userService;
	
	public RegisterController() {
		
	}
	@PostMapping(value="/register.do", produces = "application/json")
	public Map<String, Boolean> register(String fname, String lname, String password, String email) {
		email = email.toLowerCase();
		User user = null;
		if (fname.isEmpty() || lname.isEmpty() || email.isEmpty() || password.isEmpty()) {
			System.out.println("Create failed. Need more input");
		} else if (userService.getUserByEmail(email) != null) {
			System.out.println("Create failed. User already exists");
		} else {
			password = userService.hashPassword(password);
			user = new User(fname, lname, password, email);
			userService.insertUser(user);
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
		//return "redirect:/"+outcome;
	}
}
