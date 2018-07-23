package com.project.dao;

import com.project.model.Comment;

public interface CommentDao {
	
	public Comment getCommentById(int commentId);
	
	public long newComment(int userId, int postId, String text);
	public long updateComment(int commentId, String text);
	
	public long deleteComment(int commentId);
	

}
