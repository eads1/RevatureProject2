package com.project.testing;


import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.project.dao.CommentDao;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext-test.xml")
public class UserDaoTest {

//	public static ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
//	public static CommentService cs = ac.getBean("commentService", CommentService.class);

	@Autowired
	CommentDao cs;
	
	@Test
	@Transactional
	@Rollback(true)
	public void testInsert() {
		String email = "meads30@gmail.com";
		assertTrue("Comment generation failed", cs.newComment(9, 10, "Junit Testing COmment") > 0);
	}
	
}
