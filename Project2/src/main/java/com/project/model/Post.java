package com.project.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

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

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="posts")
@JsonIgnoreProperties(ignoreUnknown = false)
@Proxy(lazy = false)
public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="post_id")
	private int postId;
	
	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User userId;
	
	@Column(name="content")
	private String content;
	
	@Column(name="posted_date")
	private Date postedDate;
	
	@OneToMany(mappedBy="postId",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private List<Comment> comments;
	
	@ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private Set<Image> imageList;
	
	public Post() {
		// TODO Auto-generated constructor stub
	}

	
	public Post(User userId, String content, Date postedDate) {
		super();
		this.userId = userId;
		this.content = content;
		this.postedDate = postedDate;
	}

	public Post(int postId, User userId, String content, Date postedDate) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.content = content;
		this.postedDate = postedDate;
	}




	public Post(int postId, User userId, String content, Date postedDate, List<Comment> comments,
			Set<Image> imageList) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.content = content;
		this.postedDate = postedDate;
		this.comments = comments;
		this.imageList = imageList;
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

	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	public Set<Image> getImageList() {
		return imageList;
	}
	public void setImageList(Set<Image> imageList) {
		this.imageList = imageList;
	}

	public Date getPostedDate() {
		return postedDate;
	}


	public void setPostedDate(Date postedDate) {
		this.postedDate = postedDate;
	}


	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId + ", content=" + content + ", postedDate=" + postedDate
				+ "]";
	}

	
	
}
