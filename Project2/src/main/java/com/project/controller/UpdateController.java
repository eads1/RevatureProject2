package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	/**
	 * Deserializes the POST body into a User object. The password parameter is the
	 * OLD password. The user is authenticated with this.
	 * 
	 * @param user
	 * @param password
	 * @return If something goes wrong, null. Otherwise the new User data.
	 */
	@PostMapping(value = "/updateAccount.do")
	public User updateProfile(String password, @RequestBody User user) {
		User existingUser = userService.getUserByEmail(user.getEmail());
		password = userService.hashPassword(password);
		if (existingUser == null || !existingUser.getPassword().equals(password)) {
			return null;
		}

		return null;
	}
}
