package com.project.controller;

import java.util.Date;
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
import com.project.service.CommentService;
import com.project.service.PostService;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class PostController {

	@Autowired
	private PostService ps;
	
	@Autowired
	private CommentService cs;

	@Autowired
	private UserService us;
	@PostMapping(value = "/submitPost.do")
	public Map<String, Boolean> submitPost(String email, String post) {
		System.out.println(email);
		System.out.println(post);
		User user = us.getUserByEmail(email);
		Date d = new Date();
		Post newPost = new Post(user, post, d);
		ps.insertPost(newPost);
		System.out.println(newPost);
		System.out.println(user);
		Map<String, Boolean> map = new HashMap<String, Boolean>();
		map.put("success", true);
		return map;
	}
	
	@GetMapping(value = "/getAllPosts.do")
	public List<Post> getAllPosts(){
		List<Post> posts = ps.getAllPosts();
		System.out.println(posts);
		return posts;
	}
	
	@GetMapping(value = "/getUserPostsByUid.do")
	public List<Post> getUserPostsByUid(long uid){
		List<Post> posts = ps.getPostsByUserId(uid);
		System.out.println(posts);
		return posts;
	}
	@GetMapping(value = "/getPostsByOffset.do")
	public @ResponseBody List<Post> getPostsByOffset(int offset, int limit){
		List<Post> posts = ps.getPostsByOffset(offset, limit);
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
	
	/* Everything below this point will be comment related
	 * This part of the controller will interact directly with the angular comment service
	 */
	
	@PostMapping(value="/newComment.do")
	public @ResponseBody long newComment(String userId, String postId, String text) {
		System.out.println("Uid: " + userId + " postId: " + postId);
		System.out.println(text);
		
		return cs.newComment(Integer.parseInt(userId), Integer.parseInt(postId), text);
	}
}

