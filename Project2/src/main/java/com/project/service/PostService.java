package com.project.service;

import java.util.List;

import com.project.model.Post;

public interface PostService {
	
	// CREATE
	public void insertPost(Post post);
	
	//READ
	public Post getPostById(long id);
	public List<Post> getPostsByOffset(int offset, int limit);
	/*
	 * I wanted to condense two calls into one. This will check if the user has liked the post and count how many likes the post has.
	 * structure "<succes/failure>:<likeCount>"
	 */
	public long getPostLikesById(long postId);
	public long userHasLiked(long userId, long postId);
	public long incrementLikesById(long postId, long userId);
	public long decrementLikesById(long postId, long userId);
	public List<Post> getAllPosts();
	public List<Post> getPostsByUserId(long id);
	
	//UPDATE
	public long updatePost(Post post);
	
	//Delete
	public void deletePost(Post post);

}
