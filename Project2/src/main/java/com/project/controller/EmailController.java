package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.project.service.ResetService;

@RestController
@CrossOrigin
public class EmailController {

	@Autowired
	private ResetService resetService;

	public EmailController() {
		
	}
	
//	@PostMapping(value = "/login.do")

}
