package com.project.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.dao.UserDao;
import com.project.model.User;

@Repository("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;

	public UserServiceImpl() {
	}

	@Override
	public int insertUser(User user) {
		userDao.insert(user);
		return 1;
	}
	
	@Override
	public List<User> selectAllUsers() {
		return userDao.selectAllUsers();
	}

	@Override
	public User getUserByEmail(String email) {
		return userDao.selectUserByEmail(email);
	}

	@Override
	public void updateUserProfile(User user) {
		userDao.updateUserProfile(user);
	}

	@Override
	public void updateUserNewPassword(User user) {
		userDao.updateUserWithNewPassword(user);
	}
	
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
	public User getUserById(String id) {
		User user = userDao.selectUserByID(id);
		return user;
	}
}
