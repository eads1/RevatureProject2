package com.project.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.project.model.Image;
import com.project.model.User;
import com.project.service.ImageService;

public class PostWrapper {
	private String email;
	private String post;
	private List<String> imageList = new ArrayList<String>();
	private Set<Image> images = new HashSet<Image>();
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
	public List<String> getImageList() {
		return imageList;
	}
	public void setImageList(List<String> imageList) {
		this.imageList = imageList;
		for (String data: imageList) {
			Date date = new Date() ;
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss") ;
			String filename = dateFormat.format(date);
			String link = ImageService.uploadImage(filename, data);
			Image image = new Image(link, this.user);
			images.add(image);
		}
	}
	public Set<Image> getImages() {
		return images;
	}

	public void setImages(Set<Image> images) {
		this.images = images;
		for (Image image: images) {
			Date date = new Date() ;
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss") ;
			String filename = dateFormat.format(date);
			image.setLink(ImageService.uploadImage(filename, image.getLink()));
			images.add(image);
		}
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
		for (Image image: images) {
			image.setUserId(user);
		}
	}

}