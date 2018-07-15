package com.project.dao;


import org.hibernate.Session;
import org.hibernate.Transaction;

import com.project.model.User;
import com.project.util.HibernateUtil;

public class UserDao {
	
	public void insert(User user) {
		Session ses = HibernateUtil.getSession();
		
		Transaction tx = ses.beginTransaction();
		
		ses.save(user);
		tx.commit();
	}

}
