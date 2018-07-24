package com.project.service;

import com.project.model.User;

public interface ResetService {

	public User checkEmail(String email);
	public void sendFromGMail(String name, String to, String subject, String body);
	public void updateUserEmail(User user);
	public String hashPassword(String password);
	public String generatePassword();
}
