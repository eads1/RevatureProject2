package com.project.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.service.ResetService;

@RestController
@CrossOrigin
public class EmailController {

	@Autowired
	private ResetService resetService;

	public EmailController() {
		
	}
	
	@PostMapping(value = "/reset.do")
	public Map<String, Boolean> reset(String email) {
		User tempUser = resetService.checkEmail(email);
		System.out.println("Email: " + email);
		//check if there is a user with the inputted email
		if (tempUser != null) {
			//generate new password
			String password = resetService.generatePassword();
			//hash it
			System.out.println("Password: " + password);
			String newPassword = resetService.hashPassword(password);
			System.out.println("New Password: " + newPassword);
			//update user account with new email
			tempUser.setPassword(newPassword);
			System.out.println("TempUser Password: " + tempUser.getPassword());
			resetService.updateUserEmail(tempUser);
			//send email
			String body = "Your reset password is " + password + ". So please treat it with care from now on.\n" +
			"Thank you very much.";
			resetService.sendFromGMail(tempUser.getFname() + " " + tempUser.getFname(), email, "New Password", body);
			//return success
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
	}

}
