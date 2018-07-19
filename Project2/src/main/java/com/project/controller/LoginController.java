package com.project.controller;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.model.User;
import com.project.service.UserService;
import com.project.service.UserServiceImpl;

public class LoginController {
	private static UserService userService = new UserServiceImpl();
	public static String login(HttpServletRequest req, HttpServletResponse resp) {
		if (req.getMethod().equals("GET")) {
			return "html/login.html";
		}
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		password = hashPassword(password);
		User user = userService.getUserByEmail(email);
		boolean success = false;
		if (user == null) {
			System.out.println("Login failed. User does not exist.");
		} else {
			success = password.equals(user.getPassword());
		}
		
		try {
			resp.getWriter().write(new ObjectMapper().writeValueAsString(success) + "\n");
			resp.getWriter().write(new ObjectMapper().writeValueAsString(user));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
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
