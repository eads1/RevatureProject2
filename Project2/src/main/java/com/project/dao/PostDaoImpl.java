package com.project.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
	public Post getPostById(int id) {
		return sessFact.getCurrentSession().createQuery("FROM Posts WHERE POST_ID = :id", Post.class).setParameter("id", id).getSingleResult();
	}

	@Override
	public List<Post> getAllPosts() {
		return sessFact.getCurrentSession().createQuery("FROM POSTS", Post.class).getResultList();
	}

	@Override
	public List<Post> getPostsByUserId(int id) {
		return sessFact.getCurrentSession().createQuery("FROM POSTS WHERE USER_ID= :id", Post.class).setParameter("id", id).getResultList();
	}

	@Override
	public int updatePost(Post post) {
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
}
