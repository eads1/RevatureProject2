package com.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Post;
import com.project.model.User;
import com.project.service.PostService;
import com.project.service.UserService;

@RestController
@CrossOrigin
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
	
	@GetMapping(value = "/getUserPostsByUid.do")
	public List<Post> getUserPostsByUid(long uid){
		List<Post> posts = ps.getPostsByUserId(uid);
//		System.out.println(posts);
		return posts;
	}
	
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

