package com.project.service;

import com.project.model.User;

public interface UserService {
	public int insertUser(User user);
	public User getUserByEmail(String email);
	public String hashPassword(String password);
	public void updateUserProfile(User user);
	public void updateUserNewPassword(User user);
}
