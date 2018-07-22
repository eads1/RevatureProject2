package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.model.Post;
import com.project.service.PostService;
import com.project.service.PostServiceImpl;

@Controller
public class PostController {
	
	@Autowired
	private PostService ps = new PostServiceImpl();
	
	@RequestMapping(value="/getPostById.do", method=RequestMethod.GET)
	public @ResponseBody Post getPostById(int id) {
		return ps.getPostById(id);
	}
	
}
