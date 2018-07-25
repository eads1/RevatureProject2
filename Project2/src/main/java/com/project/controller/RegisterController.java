package com.project.controller;

import java.util.Collections;
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
		if (fname.isEmpty() || lname.isEmpty() || email.isEmpty() || password.isEmpty() || picDataUrl == null) {
			System.out.println("Create failed. Need more input");
		} else if (userService.getUserByEmail(email) != null) {
			System.out.println("Create failed. User already exists");
		} else {

			String picUrl = ImageService.uploadImage(email + "profile", picDataUrl);

			password = userService.hashPassword(password);
			user = new User(fname, lname, password, picUrl, email);
			userService.insertUser(user);
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
	}
}
