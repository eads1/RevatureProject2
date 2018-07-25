package com.project.testing;


import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.project.dao.CommentDao;
import com.project.dao.PostDao;
import com.project.dao.UserDao;
import com.project.model.Post;
import com.project.model.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext-test.xml")
public class UserDaoTest {

//	public static ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
//	public static CommentService cs = ac.getBean("commentService", CommentService.class);

	@Autowired
	CommentDao cs;
	
	@Autowired
	UserDao ud;
	
	@Autowired
	PostDao pd;
	
	Post testPost;
	User testUser;
	String email = "testing@gmail.com";
	
	@Test
	@Transactional
	@Rollback(true)
	public void testInsertComment() {
		long res = cs.newComment(9, 10, "Junit Testing COmment");
		assertTrue("Comment generation failed", res > 0);
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void testNewUser() {
		User u = new User();
		u.setEmail(email);
		ud.insert(u);
		testUser = ud.selectUserByEmail(email);
		assertFalse("User not properly created", testUser == null);
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void testNewPost() {
		User u = new User();
		u.setEmail(email);
		ud.insert(u);
		testUser = ud.selectUserByEmail(email);
		Post p = new Post();
		p.setUserId(testUser);
		pd.insertPost(p);
		testPost = pd.getPostsByUserId(testUser.getUserId()).get(0);
		assertFalse("User not properly created", testPost == null);
	}
	
	
}
