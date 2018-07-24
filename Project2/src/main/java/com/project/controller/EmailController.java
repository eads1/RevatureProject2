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
	public Map<String, Boolean> reset(String inputEmail) {
		User tempUser = resetService.checkEmail(inputEmail);
		//check if there is a user with the inputted email
		if (tempUser != null) {
			//generate new password
			String password = resetService.generatePassword();
			//hash it
			String newPassword = resetService.hashPassword(password);
			//update user account with new email
			tempUser.setPassword(newPassword);
			resetService.updateUserEmail(tempUser);
			//send email
			String body = "Your reset password is " + password + ". So please treat it with care from now on.\n" +
			"Thank you very much.";
			resetService.sendFromGMail(tempUser.getFname() + " " + tempUser.getFname(), inputEmail, "New Password", body);
			//return success
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
	}

}
