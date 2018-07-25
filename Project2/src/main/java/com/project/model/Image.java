package com.project.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="images")
public class Image {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="image_id")
	private int image_id;
	
	@Column(name="link")
	private String link;

	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User userId;
	
	public Image() {
		
	}

	public Image(String link, User userId) {
		super();
		this.link = link;
		this.userId = userId;
	}
	public Image(int image_id, String link, User userId) {
		super();
		this.image_id = image_id;
		this.link = link;
		this.userId = userId;
	}

	public int getImage_id() {
		return image_id;
	}

	public void setImage_id(int image_id) {
		this.image_id = image_id;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Image [image_id=" + image_id + ", link=" + link + ", userId=" + userId + "]";
	}
	
}
