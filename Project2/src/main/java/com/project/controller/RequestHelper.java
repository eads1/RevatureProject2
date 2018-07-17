package com.project.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;

public class RequestHelper {
	public static String process(HttpServletRequest req, HttpServletResponse resp) throws JsonProcessingException, IOException {
		switch(req.getRequestURI()) {
			case "/ProjectOne/html/register.do":
				return RegisterController.register(req, resp);
			default:
				return "html/unsuccessfullogin.html";
		}
	}
}
