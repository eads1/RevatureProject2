package com.project.service;

import org.simplejavamail.email.Email;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.mailer.config.TransportStrategy;
import org.springframework.stereotype.Repository;

@Repository("resetService")
public class ResetServiceImpl implements ResetService {

	public ResetServiceImpl() {
		
	}
	@Override
	public void sentEmail(String email) {
		
	}
	public static void sendFromGMail(String name, String to, String subject, String body) {
        Email email = EmailBuilder.startingBlank()
                .from("GaoChain", "no.reply@gao-chain.com")
                .to(name, to)
                .withSubject(subject)
                .withPlainText(body)
                .buildEmail();
        Mailer mailer = MailerBuilder
                  .withSMTPServer("smtp.gmail.com", 587, "project.one.email.1@gmail.com", "PASSWORD")
                  .withTransportStrategy(TransportStrategy.SMTP_TLS)
                  .buildMailer();
        mailer.sendMail(email);
    }

	
}
