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
	
	@PostMapping(value = "/login.do")
	private static void sendFromGMail(String name, String to, String subject, String body) {
        Email email = EmailBuilder.startingBlank()
                .from("GaoChain", "no.reply@gao-chain.com")
                .to(name, to)
                .withSubject(subject)
                .withPlainText(body)
                .buildEmail();
        Mailer mailer = MailerBuilder
                  .withSMTPServer("smtp.gmail.com", 587, "project.one.email.1@gmail.com", PASSWORD)
                  .withTransportStrategy(TransportStrategy.SMTP_TLS)
                  .buildMailer();
        mailer.sendMail(email);
    }}
