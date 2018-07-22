package com.project.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.model.Post;
import com.project.model.User;
import com.project.service.PostService;
import com.project.service.UserService;

@Controller
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class PostController {

	@Autowired
	private PostService ps;

	@Autowired
	private UserService us;
	@PostMapping(value = "/submitPost.do")
	public Map<String, Boolean> submitPost(String email, String post) {
		System.out.println(email);
		System.out.println(post);
		User user = us.getUserByEmail(email);
		Post newPost = new Post(user, post);
		ps.insertPost(newPost);
		System.out.println(newPost);
		System.out.println("Hello");
		Map<String, Boolean> map = new HashMap<String, Boolean>();
		map.put("success", true);
		return map;
	}
	
	@RequestMapping(value = "/getPostById.do", method = RequestMethod.GET)
	public @ResponseBody Post getPostById(@RequestParam(value = "id") int id) {
		Post p = ps.getPostById(id);
		System.out.println(p);
		return p;
	}

	@GetMapping(value = "/getPostLikesById.do")
	public @ResponseBody String getPostLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {
		System.out.println("getting likes");
		return ps.getPostLikesById(postId, userId);

	}

	@GetMapping(value = "/incrementLikesById.do")
	public void incrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {
		
		ps.incrementLikesById(postId, userId);
	}

	@GetMapping(value = "/decrementLikesById.do")
	public void decrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {

		ps.decrementLikesById(postId, userId);
	}
}

