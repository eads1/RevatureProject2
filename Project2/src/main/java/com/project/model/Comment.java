package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="comments")
public class Comment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="comment_id")
	private int commentId;

	//@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="post_id", referencedColumnName="post_id")
	private int postId;
	
	//@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="user_id", referencedColumnName="")
	private int userId;
	
	@Column(name="content")
	private String content;
	
	public Comment() {
		// TODO Auto-generated constructor stub
	}

	public Comment(int postId, int userId, String content) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.content = content;
	}

	public Comment(int commentId, int postId, int userId, String content) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.userId = userId;
		this.content = content;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
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
		return "Comment [commentId=" + commentId + ", postId=" + postId + ", userId=" + userId + ", content=" + content
				+ "]";
	}

}
