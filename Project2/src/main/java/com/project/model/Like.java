package com.project.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name="likes")
public class Like {

	@EmbeddedId
	UserPostPK id;
	
	public Like() {
		// TODO Auto-generated constructor stub
	}

	public Like(UserPostPK id) {
		super();
		this.id = id;
	}

	public UserPostPK getId() {
		return id;
	}

	public void setId(UserPostPK id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Like [id=" + id + "]";
	}
	
	
}
