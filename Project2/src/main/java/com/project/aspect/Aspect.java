package com.project.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component("aspect")
@Aspect
public class Aspect {
	
	@Before("execution(* *insert*(..)")
	public void catchAllInserts(JoinPoint jp) {
		
	}
	
}
