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
	
}
