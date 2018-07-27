package com.project.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class SearchController {

	@Autowired
	private UserService userService;

	public SearchController() {
		
	}
	
	@GetMapping(value = "/search.do")
	public @ResponseBody List<User> reset(@RequestParam("search-text") String searchText) {
		List<User> users = userService.selectAllUsers();
		List<User> usersWithSimilarEmail = new ArrayList<User>();
		List<User> usersWithSimilarFirstNames = new ArrayList<User>();
		List<User> usersWithSimilarLastNames = new ArrayList<User>();
		List<User> retUsers = new ArrayList<User>();
		for(User user: users) {
			if (StringUtils.containsIgnoreCase(user.getFname(), searchText)) {
				usersWithSimilarFirstNames.add(user);
			} else if (StringUtils.containsIgnoreCase(user.getLname(), searchText)) {
				usersWithSimilarLastNames.add(user);
			} else if (StringUtils.containsIgnoreCase(user.getEmail(), searchText)) {
				usersWithSimilarEmail.add(user);
			}
		}
		retUsers.addAll(usersWithSimilarEmail);
		retUsers.addAll(usersWithSimilarFirstNames);
		retUsers.addAll(usersWithSimilarLastNames);
		return retUsers;
	}

}
