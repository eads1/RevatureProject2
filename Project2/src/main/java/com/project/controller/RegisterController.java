package com.project.controller;

import java.io.File;
import java.util.Collections;
import java.util.Map;

import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.EnvironmentVariableCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.project.model.User;
import com.project.service.UserService;

@RestController
@CrossOrigin
public class RegisterController {

	@Autowired
	private UserService userService;

	public RegisterController() {

	}

	@PostMapping(value = "/register.do")
	public Map<String, Boolean> register(String fname, String lname, String password, String email, String picDataUrl) {
		User user = null;
		System.out.println("In here");
		if (fname.isEmpty() || lname.isEmpty() || email.isEmpty() || password.isEmpty()) {
			System.out.println("Create failed. Need more input");
		} else if (userService.getUserByEmail(email) != null) {
			System.out.println("Create failed. User already exists");
		} else {

			// The image section
			try {
				String clientRegion = "us-east-1";
				String bucketName = "gaochain-images";
				String filename = email + "profile"
						+ picDataUrl.substring(picDataUrl.indexOf('/'), picDataUrl.indexOf(';'));

				AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withRegion(clientRegion)
						.withCredentials(new EnvironmentVariableCredentialsProvider()).build();

				// Upload the string as the data.
				s3Client.putObject(bucketName, filename, picDataUrl.substring(picDataUrl.indexOf(',') + 1));

			} catch (AmazonServiceException e) {
				// The call was transmitted successfully, but Amazon S3 couldn't process
				// it, so it returned an error response.
				e.printStackTrace();
			} catch (SdkClientException e) {
				// Amazon S3 couldn't be contacted for a response, or the client
				// couldn't parse the response from Amazon S3.
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace(); // In case something else goes wrong
			}
			// Image section done

			password = userService.hashPassword(password);
			user = new User(fname, lname, password, email);
			userService.insertUser(user);
			return Collections.singletonMap("success", true);
		}
		return Collections.singletonMap("success", false);
	}
}
