package com.project.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.service.ImageService;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class RegisterController {

	@Autowired
	private UserService userService;

	public RegisterController() {

	}

	@PostMapping(value = "/register.do")
	public Map<String, Boolean> register(@RequestBody User param) {
		String fname = param.getFname();
		String lname = param.getLname();
		String password = param.getPassword();
		String email = param.getEmail();
		String picDataUrl = param.getImageid();
		User user = null;

		Map<String, Boolean> mapping = new HashMap<String, Boolean>();
		
		if (fname.isEmpty() || lname.isEmpty() || email.isEmpty() || password.isEmpty()) {
			System.out.println("Create failed. Need more input");
			mapping.put("notenoughInput", true);
		} else if (userService.getUserByEmail(email) != null) {
			System.out.println("Create failed. User already exists");
			mapping.put("emailTaken", true);
		} else {
			String picUrl = null;
			if (picDataUrl != null && !picDataUrl.isEmpty()) {
				picUrl = ImageService.uploadImage(email + "profile", picDataUrl);
			}

			password = userService.hashPassword(password);
			user = new User(fname, lname, password, picUrl, email);
			userService.insertUser(user);
			mapping.put("success", true);
		}
		return mapping;
	}
}
