package com.project.controller;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.aspect.Project2Aspect;
import com.project.model.User;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class LoginController {

	Logger logger = Logger.getLogger(Project2Aspect.class);
	
	@Autowired
	private UserService userService;

	public LoginController() {

	}

	@PostMapping(value = "/login.do")
	public User login(String email, String password) {
		logger.info("");
		password = userService.hashPassword(password);
		User user = userService.getUserByEmail(email);
		boolean success = false;
		if (email.isEmpty() || password.isEmpty()) {
			System.out.println("Login failed. Need more input");
		} else if (user == null) {
			System.out.println("Login failed. User does not exist.");
		} else if (password.equals(user.getPassword())) {
			return user;
		}
		return null;
	}

}
