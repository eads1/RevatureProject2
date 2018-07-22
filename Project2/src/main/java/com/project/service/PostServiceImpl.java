package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.PostDaoImpl;
import com.project.model.Post;

@Service("postService")
public class PostServiceImpl implements PostService {

	@Autowired
	private PostDaoImpl pd = new PostDaoImpl();
	
	@Override
	public void insertPost(Post post) {
		pd.insertPost(post);
	}

	@Override
	public Post getPostById(int id) {
		return pd.getPostById(id);
	}

	@Override
	public List<Post> getAllPosts() {
		return pd.getAllPosts();
	}

	@Override
	public List<Post> getPostsByUserId(int id) {
		return pd.getPostsByUserId(id);
	}

	@Override
	public int updatePost(Post post) {
		return pd.updatePost(post);
	}
	
	@Override
	public void deletePost(Post post) {
		pd.deletePost(post);
	}

}
