package com.project.service;

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
	public User getUserByEmail(String email) {
		return userDao.selectUserByEmail(email);
	}
}
