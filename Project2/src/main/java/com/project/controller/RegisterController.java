package com.project.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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
		User user = null;
		if (fname.isEmpty() || lname.isEmpty() || email.isEmpty() || password.isEmpty()) {
			System.out.println("Create failed. Need more input");
		} else if (userService.getUserByEmail(email) != null) {
			System.out.println("Create failed. User already exists");
		} else {
			password = hashPassword(password);
			user = new User(fname, lname, password, email);
			userService.insertUser(user);
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
		//return "redirect:/"+outcome;
	}
	private static String hashPassword(String password) {
		MessageDigest md = null;
		try {
			md = MessageDigest.getInstance("SHA-256");
		} catch (NoSuchAlgorithmException e1) {
			e1.printStackTrace();
		}
		md.update(password.getBytes());
		byte byteData[] = md.digest();
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < byteData.length; i++) {
			sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
		}
		return sb.toString();
	}
}
