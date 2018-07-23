package com.project.dao;

import java.util.List;

import com.project.model.Post;

public interface PostDao {
	
	public void insertPost(Post post);
	
	//READ
	public Post getPostById(long id);
	/*
	 * I wanted to condense two calls into one. This will check if the user has liked the post and count how many likes the post has.
	 * structure "<succes/failure>:<likeCount>"
	 */
	public String getPostLikesById(long postId, long userId);
	public long incrementLikesById(long postId, long userId);
	public long decrementLikesById(long postId, long userId);
	public List<Post> getAllPosts();
	public List<Post> getPostsByUserId(long id);
	
	//UPDATE
	public long updatePost(Post post);
	
	//Delete
	public void deletePost(Post post);

}
