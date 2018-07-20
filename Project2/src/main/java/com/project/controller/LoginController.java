package com.project.controller;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.project.model.User;
import com.project.service.UserService;

@Controller
public class LoginController {
	
	@Autowired
	private UserService userService;
	
	public LoginController() {
		
	}
	
	@PostMapping(value="/login.do")
	public String login(String email, String password) {
		password = hashPassword(password);
		User user = userService.getUserByEmail(email);
		boolean success = false;
		if (email.isEmpty() || password.isEmpty()) {
			System.out.println("Login failed. Need more input");
		} else if (user == null) {
			System.out.println("Login failed. User does not exist.");
		} else if (password.equals(user.getPassword())){
			return "redirect:/index.html";
		}
		return "redirect:/login.html";
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
