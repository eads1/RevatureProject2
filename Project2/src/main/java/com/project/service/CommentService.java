package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.dao.CommentDao;
import com.project.model.Comment;

public interface CommentService {

	
	public Comment getCommentById(int commentId);
	
	public long newComment(int userId, int postId, String text);
	public long updateComment(int commentId, String text);
	
	public long deleteComment(int commentId);
	
}
