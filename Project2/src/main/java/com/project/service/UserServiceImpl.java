package com.project.service;

import com.project.dao.UserDao;
import com.project.model.User;

public class UserServiceImpl implements UserService {

	private static UserDao userDao= new UserDao();
	
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
