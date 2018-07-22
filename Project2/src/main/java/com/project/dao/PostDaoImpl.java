package com.project.dao;

import java.util.List;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.project.model.Like;
import com.project.model.Post;
import com.project.model.UserPostPK;

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

	@Override
	public long getPostLikesById(long postId) {		
		long likes = (long) sessFact.getCurrentSession().createQuery("Select COUNT(*) FROM Like WHERE posts=" + postId).getSingleResult();
		return likes;
	}

	// checks if a user has liked the Post
	// returns 1 i already liked
	// returns 0 if not
	@Override
	public long userHasLiked(long userId, long postId) {
		Like liked = null;
		try {
			String hql = "FROM Like WHERE users=" + userId + " AND postId=" + postId;
			liked = sessFact.getCurrentSession().createQuery(hql, Like.class).getSingleResult();
		} catch (NoResultException e) {
			// this seems to be the simplest way to check for the existence of something that probably doesn't exist
			return 0;
		}
		return 1;
	}
	
	@Override
	public long incrementLikesById(long postId, long userId) {
		UserPostPK key = new UserPostPK((int) postId, (int) userId);
		Like like = new Like(key);
		sessFact.getCurrentSession().save(like);
		return 0;
	}

	@Override
	public long decrementLikesById(long postId, long userId) {
		HibernateTemplate h = new HibernateTemplate(sessFact);
		UserPostPK key = new UserPostPK((int) postId, (int) userId);
		Like like = new Like(key);
		h.delete(like);	
		return 0;
	}
}
