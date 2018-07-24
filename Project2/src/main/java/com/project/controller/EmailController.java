package com.project.controller;

import org.simplejavamail.email.Email;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.mailer.config.TransportStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.service.ResetService;

@RestController
@CrossOrigin
public class EmailController {

	@Autowired
	private ResetService resetService;

	public EmailController() {
		
	}
	
//	@PostMapping(value = "/login.do")

}
