package com.project.testing;

import com.project.dao.UserDao;
import com.project.model.User;

public class Main {

	public static void main(String[] args) {
		
		UserDao ud = new UserDao();
		
		User u1 = new User("Trevlin","Chester","p4ssw0rd","travelingHomies@gmail.com");
		
		ud.selectUserByEmail("");

	}

}
