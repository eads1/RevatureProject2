package com.project.dao;

import java.util.List;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.model.Like;
import com.project.model.Post;

@Repository("PostDao")
@Transactional
public class PostDaoImpl implements PostDao {
	
	@Autowired
	private SessionFactory sessFact;
	
	public PostDaoImpl() {
	}

	@Override
	public void insertPost(Post post) {
		sessFact.getCurrentSession().save(post);
	}
	
	@Override
	public Post getPostById(long id) {
		return sessFact.getCurrentSession().createQuery("FROM Post WHERE POST_ID = :id", Post.class).setParameter("id", id).getSingleResult();
	}

	@Override
	public List<Post> getAllPosts() {
		return sessFact.getCurrentSession().createQuery("FROM POST", Post.class).getResultList();
	}

	@Override
	public List<Post> getPostsByUserId(long id) {
		return sessFact.getCurrentSession().createQuery("FROM POST WHERE USER_ID= :id", Post.class).setParameter("id", id).getResultList();
	}

	@Override
	public long updatePost(Post post) {
		try {
			sessFact.getCurrentSession().update(post);
			return 1;
		} catch (HibernateException e) {
			e.printStackTrace();
			return -1;
		}
	}

	@Override
	public void deletePost(Post post) {
		sessFact.getCurrentSession().delete(post);
		
	}

	/*
	 * I wanted to condense two calls into one. This will check if the user has liked the post and count how many likes the post has.
	 * structure "<succes/failure>:<likeCount>"
	 */
	@Override
	public String getPostLikesById(long postId, long userId) {
		String message = "";
		Like liked = null;
		long likes = (long) sessFact.getCurrentSession().createQuery("Select COUNT(*) FROM Like WHERE posts=" + postId).getSingleResult();
		try {
			liked = sessFact.getCurrentSession().createQuery("FROM Like WHERE users=" + userId, Like.class).getSingleResult();
		} catch (NoResultException e) {
			// this seems to be the simplest way to check for the existence of something that probably doesn't exist
		}
		
		if(liked != null) {
			message += "success:";
		} else {
			message += "failure:";
		}
		message+= likes;
		System.out.println(message);
		return message;
	}

	@Override
	public long incrementLikesById(long postId, long userid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long decrementLikesById(long postId, long userid) {
		// TODO Auto-generated method stub
		return 0;
	}
}
