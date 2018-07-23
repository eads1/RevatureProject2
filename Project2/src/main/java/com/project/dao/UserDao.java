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
		User user = sessFact.getCurrentSession().createQuery("FROM User WHERE lower(email) = lower(:email)", User.class).setParameter("email", email).uniqueResult();
		return user;
	}
	
	public void updateUserProfile(User user) {
		User newUser = sessFact.getCurrentSession().createQuery("FROM User WHERE user_id = :userId", User.class).setParameter("userId", user.getUserId()).uniqueResult();
		newUser.setFname(user.getFname());
		newUser.setLname(user.getLname());
		newUser.setEmail(user.getEmail());
		sessFact.getCurrentSession().update(newUser);
	}

/*	public int updateUserProfile(User user) {
		int status = 0;
		status = sessFact.getCurrentSession().createNativeQuery("UPDATE Users SET email = :email, fname = :fname, lname = :lname"+
		" WHERE user_id = :userId", User.class)
				.setParameter("email",user.getEmail())
				.setParameter("fname",user.getFname())
				.setParameter("lname",user.getLname())
				.setParameter("userId",user.getUserId())
				.executeUpdate();
		return status;
	}*/
}
