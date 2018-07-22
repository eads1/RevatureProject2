package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int user_id;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="password")
	private String password;

	//Iffy
	@JoinColumn(name="imageid", referencedColumnName="link")
	private String imageid;
	
	@Column(name="email",unique=true)
	private String email;
		
	public User() {

	}

	public User(int user_id, String fname, String lname, String password, String email) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.email = email;
	}
	
	public User(String fname, String lname, String password, String imageid, String email) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.imageid = imageid;
		this.email = email;
	}

	public User(String fname, String lname, String password, String email) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.email = email;
	}
	
	public User(int user_id, String fname, String lname, String password, String imageid, String email) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.imageid = imageid;
		this.email = email;
	}

	public int getUserId() {
		return user_id;
	}

	public void setUserId(int user_id) {
		this.user_id = user_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getImageid() {
		return imageid;
	}

	public void setImageid(String imageid) {
		this.imageid = imageid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", fname=" + fname + ", lname=" + lname + ", password=" + password
				+ ", imageid=" + imageid + ", email=" + email + "]";
	}


}
