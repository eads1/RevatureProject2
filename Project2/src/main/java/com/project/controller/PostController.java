package com.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.model.Post;
import com.project.service.PostService;

@Controller
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class PostController {

	@Autowired
	private PostService ps;

	@RequestMapping(value = "/getPostById.do", method = RequestMethod.GET)
	public @ResponseBody Post getPostById(@RequestParam(value = "id") int id) {
		Post p = ps.getPostById(id);
		return p;
	}

	@GetMapping(value = "/getPostLikesById.do")
	public @ResponseBody long getPostLikesById(@RequestParam(value = "postId") int postId) {
		return ps.getPostLikesById(postId);

	}

	@GetMapping(value = "/incrementLikesById.do")
	public @ResponseBody long incrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {
		System.out.println("Incrementing");
		return ps.incrementLikesById(postId, userId);
	}

	@GetMapping(value = "/decrementLikesById.do")
	public @ResponseBody long decrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {
		System.out.println("Decrementing");
		return ps.decrementLikesById(postId, userId);
	}
	
	@GetMapping(value="/hasUserLiked.do")
	public @ResponseBody long hasUserLiked(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {
		System.out.println("Checking");
		return ps.userHasLiked(userId, postId);
	}
}

