package com.project.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.RandomStringUtils;

import com.project.model.Image;
import com.project.model.User;
import com.project.service.ImageService;

public class PostWrapper {
	private String email;
	private String post;
	private List<String> images;
	private Set<Image> imageList = new HashSet<Image>();
	private User user;
	public PostWrapper() {
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public List<String> getImages() {
		return images;
	}
	public void setImages(List<String> images) {
		this.images = images;
		for (String data: images) {
			Date date = new Date() ;
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss") ;
			String filename = dateFormat.format(date);
			String link = ImageService.uploadImage(filename, data);
			Image image = new Image(link, this.user);
			imageList.add(image);
		}
	}
	public Set<Image> getImageList() {
		return imageList;
	}

	public void setImageList(Set<Image> imageList) {
		this.imageList = imageList;
		for (Image image: imageList) {
			Date date = new Date() ;
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss") ;
			String filename = dateFormat.format(date);
			image.setLink(ImageService.uploadImage(filename, image.getLink()));
			imageList.add(image);
		}
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
		for (Image image: imageList) {
			image.setUserId(user);
		}
	}

}
