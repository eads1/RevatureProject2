package com.project.dao;


import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.model.User;
@Repository("userDao")
@Transactional
public class UserDao {
	@Autowired
	private SessionFactory sessFact;
	public UserDao() {
		
	}
	public void insert(User user) {
		sessFact.getCurrentSession().save(user);
	}

	public User selectUserByEmail(String email) {
		User user = sessFact.getCurrentSession().createQuery("FROM User WHERE email = :email", User.class).setParameter("email", email).uniqueResult();
		return user;
	}

	public int updateUserProfile(User user) {
		int status = 0;
		status = sessFact.getCurrentSession().createQuery("UPDATE User SET email = :email, SET fname = :fname, SET lname = :lname"+
		" WHERE user_id = :user_id", User.class)
				.setParameter("email",user.getEmail())
				.setParameter("fname",user.getFname())
				.setParameter("lname",user.getLname())
				.setParameter("user_id",user.getUserId())
				.executeUpdate();
		return status;
	}
}
