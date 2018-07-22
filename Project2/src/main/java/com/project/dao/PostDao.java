package com.project.dao;

import java.util.List;

import com.project.model.Post;

public interface PostDao {
	
	public void insertPost(Post post);
	
	//READ
	public Post getPostById(int id);
	public List<Post> getAllPosts();
	public List<Post> getPostsByUserId(int id);
	
	//UPDATE
	public int updatePost(Post post);
	
	//Delete
	public void deletePost(Post post);

}
