package com.project.service;

import java.util.List;

import com.project.model.User;

public interface UserService {
	public int insertUser(User user);
	public List<User> selectAllUsers();
	public User getUserByEmail(String email);
	public String hashPassword(String password);
	public void updateUserProfile(User user);
	public void updateUserNewPassword(User user);
}
