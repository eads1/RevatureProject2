package com.project.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
	

@Embeddable
public class UserPostPK implements Serializable {

	private static final long serialVersionUID = -4373385670631659419L;
	
	@Column(name="users")
	private Integer user;
	
	@Column(name="posts")
	private Integer post;
	
	public UserPostPK() {
		// TODO Auto-generated constructor stub
	}

	public UserPostPK(Integer user, Integer post) {
		super();
		this.user = user;
		this.post = post;
	}

	@Override
	public String toString() {
		return "UserPostPK [user=" + user + ", post=" + post + "]";
	}

	public Integer getUser() {
		return user;
	}

	public void setUser(Integer user) {
		this.user = user;
	}

	public Integer getPost() {
		return post;
	}

	public void setPost(Integer post) {
		this.post = post;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
