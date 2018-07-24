package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.CommentDao;
import com.project.model.Comment;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentDao cd;
	
	@Override
	public Comment getCommentById(int commentId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long newComment(int userId, int postId, String text) {
		// TODO Auto-generated method stub
		return cd.newComment(userId, postId, text);
	}

	@Override
	public long updateComment(int commentId, String text) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long deleteComment(int commentId) {
		return cd.deleteComment(commentId);
	}

}
