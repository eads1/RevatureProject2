package com.project.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

import org.simplejavamail.email.Email;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.mailer.config.TransportStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.dao.UserDao;
import com.project.model.User;

@Repository("resetService")
public class ResetServiceImpl implements ResetService {

	@Autowired
	private UserDao userDao;
	private String gmailUsername = "project2.dreadful@gmail.com";
	private String gmailPassword = "PASSw05d";
	
	public ResetServiceImpl() {
		
	}

	@Override
	public User checkEmail(String email) {
		return userDao.selectUserByEmail(email);
	}
	
	public void sendFromGMail(String name, String to, String subject, String body) {
        Email email = EmailBuilder.startingBlank()
                .from("GaoChain", "no.reply@gao-chain.com")
                .to(name, to)
                .withSubject(subject)
                .withPlainText(body)
                .buildEmail();
        Mailer mailer = MailerBuilder
                  .withSMTPServer("smtp.gmail.com", 587, gmailUsername, gmailPassword)
                  .withTransportStrategy(TransportStrategy.SMTP_TLS)
                  .buildMailer();
        mailer.sendMail(email);
    }

	@Override
	public void updateUserEmail(User user) {
		userDao.updateUserWithNewEmail(user);
	}

	@Override
	public String hashPassword(String password) {
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

	@Override
	public String generatePassword() {

		// https://www.geeksforgeeks.org/generating-password-otp-java/
		String Capital_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String Small_chars = "abcdefghijklmnopqrstuvwxyz";
		String numbers = "0123456789";
		String symbols = "!@#$%&*/?)";
		
		String values = Capital_chars + Small_chars +
                        numbers + symbols;
 
		// Using random method
		Random rndm_method = new Random();
		char[] password = new char[8];
		
        for (int i = 0; i < 8; i++) {
        	password[i] = values.charAt(rndm_method.nextInt(values.length())); 
        }
        String newPassword = String.valueOf(password);
        return newPassword;
	}
}