package com.project.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.PostDao;
import com.project.model.Post;

@Service("postService")
@Transactional
public class PostServiceImpl implements PostService {

	@Autowired
	private PostDao pd;
	
	@Override
	public void insertPost(Post post) {
		pd.insertPost(post);
	}

	@Override
	public Post getPostById(long id) {
		return pd.getPostById(id);
	}

	@Override
	public List<Post> getAllPosts() {
		return pd.getAllPosts();
	}

	@Override
	public List<Post> getPostsByUserId(long id) {
		return pd.getPostsByUserId(id);
	}

	@Override
	public long updatePost(Post post) {
		return pd.updatePost(post);
	}
	
	@Override
	public void deletePost(Post post) {
		pd.deletePost(post);
	}

	@Override
	public long getPostLikesById(long postId, long userId) {
		return pd.getPostLikesById(postId, userId);
	}

	@Override
	public long incrementLikesById(long postId, long userId) {
		return pd.incrementLikesById(postId, userId);
	}

	@Override
	public long decrementLikesById(long postId, long userId) {
		return pd.decrementLikesById(postId, userId);
	}

}
