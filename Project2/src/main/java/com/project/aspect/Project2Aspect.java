package com.project.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.hibernate.SessionFactory;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.project.model.User;

@Aspect
@Component("aspect")
public class Project2Aspect {
	
	Logger logger = Logger.getLogger(Project2Aspect.class);
	
	@Autowired
	SessionFactory sessFact;
	
	@Pointcut("execution(* submitPost(..))")
	public void catchAllInserts(JoinPoint jp) {
		logger.info("New Post created");
	}
	
//	@After("execution(* get*Likes*(..))")
//	public void adviseLikeRetrieval(JoinPoint jp) {
//		System.out.println("Getting Post Likes");
//	}
	
	@AfterReturning("execution(* newComment(..))")
	public void adviseNewComment(JoinPoint jp) {
		logger.info("New comment posted");
	}
	
	@Around("execution(* login(..))")
	public User logLogin(ProceedingJoinPoint jp) {
		try {
			User u = (User) jp.proceed();
			if(u != null) {
				logger.info("User" + u.getFname() + " " + u.getLname() + "Loggedin");
			} else {
				logger.info("User failed to login");
			}
			return u;
		} catch(Throwable t) {
			logger.error("fatal error in login.: " + t.getStackTrace().toString());
			t.printStackTrace();
		}
		return null;
	}
	
//	@AfterThrowing("execution(* **(..))")
//	public void logAllThrows(JoinPoint jp) {
//		logger.warn("Throwable in method " + jp.getSignature());
//	}
	
}
