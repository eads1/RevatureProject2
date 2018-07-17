package com.project.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.project.controller.RequestHelper;

public class AuthServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String requestResponse = RequestHelper.process(req, resp);
		if (requestResponse != null) {
			resp.sendRedirect(requestResponse);	
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String requestReponse = RequestHelper.process(req, resp);
		if (requestReponse != null) {
			RequestDispatcher r = req.getRequestDispatcher(requestReponse);
			r.forward(req, resp);
		}
	}
}
