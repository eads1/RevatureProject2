package com.project.dao;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.model.Comment;

@Repository
@Transactional
public class CommentDaoImpl implements CommentDao {
	
	@Autowired
	private SessionFactory sessFact;

	@Override
	public Comment getCommentById(int commentId) {
		Comment c = sessFact.getCurrentSession().get(Comment.class, commentId);
		System.out.println(c);
		return c;
	}

	@Override
	public long newComment(int userId, int postId, String text) {
		Comment c = new Comment(postId, userId, text);
		sessFact.getCurrentSession().save(c);
		
		return c.getCommentId();
	}

	@Override
	public long updateComment(int commentId, String text) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long deleteComment(int commentId) {
		Comment c = new Comment();
		c.setCommentId(commentId);
		sessFact.getCurrentSession().delete(c);
		return 1;
	}

}
