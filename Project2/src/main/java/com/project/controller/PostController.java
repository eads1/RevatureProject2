package com.project.controller;

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
	public @ResponseBody Long incrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {

		return new Long(userId);

	}

	@GetMapping(value = "/decrementLikesById.do")
	public @ResponseBody Integer decrementLikesById(@RequestParam(value = "postId") int postId,
			@RequestParam(value = "userId") int userId) {

		return userId;

	}
}

