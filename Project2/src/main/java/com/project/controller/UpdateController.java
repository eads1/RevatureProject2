package com.project.controller;

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
		if (password == null) {
			return null;
		}

		User existingUser = userService.getUserById(user.getUserId() + "");
		password = userService.hashPassword(password);

		// If the credentials are wrong.
		if (existingUser == null || !existingUser.getPassword().equals(password)) {
			return null;
		}

		// If the email is already in use, and does not belong to the logged in user.
		User userWithEmail = userService.getUserByEmail(user.getEmail());
		if (userWithEmail != null) {
			int emailUserId = userWithEmail.getUserId();
			int existingUserId = existingUser.getUserId();
			int loggedInUserId = user.getUserId();
			if (existingUserId == emailUserId && existingUserId != loggedInUserId) {
				user.setEmail(null);
				return user;
			}
		}

		// If the user specified no changes, make no changes.
		if (user.getFname() == null) {
			user.setFname(existingUser.getFname());
		}
		if (user.getLname() == null) {
			user.setLname(existingUser.getLname());
		}
		if (user.getEmail() == null) {
			user.setEmail(existingUser.getEmail());
		}

		if (user.getPassword() == null) {
			user.setPassword(password);
		} else {
			user.setPassword(userService.hashPassword(user.getPassword()));
		}

		if (user.getImageid() == null) {
			user.setImageid(existingUser.getImageid());
		} else {
			// Slightly confusing, as the user's "imageid" is actually
			// a dataURL at this point.
			user.setImageid(ImageService.uploadImage(user.getUserId() + "profile", user.getImageid()));
		}

		userService.updateUserNewPassword(user);

		return user;
	}
}
