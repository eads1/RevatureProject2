package com.project.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name="likes")
public class Like {

	@EmbeddedId
	UserPostPK id;
	
}
