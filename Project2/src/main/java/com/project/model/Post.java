package com.project.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="posts")
public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="post_id")
	private int postId;
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User userId;
	
	@Column(name="content")
	private String content;
	
	@OneToMany(mappedBy="postId",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private List<Comment> comments;
	
	@ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	List<Image> imageList;
	
	public Post() {
		// TODO Auto-generated constructor stub
	}
	public Post(User userId, String content) {
		super();
		this.userId = userId;
		this.content = content;
	}
	public Post(int postId, User userId, String content) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.content = content;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId + ", content=" + content + "]";
	}

	
}
