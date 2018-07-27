package com.project.testing;

import java.io.File;
import java.io.IOException;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.EnvironmentVariableCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

public class UploadObject {

	public static void main(String[] args) throws IOException {
		String clientRegion = "us-east-1";
		String bucketName = "gaochain-images";
		String stringObjKeyName = "String.txt";
		String fileObjKeyName = "File.jpeg";
		String fileName = "/home/kea/Desktop/Downloads/608x-1.jpeg";

		try {
			AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withRegion(clientRegion)
					.withCredentials(new EnvironmentVariableCredentialsProvider()).build();

			// Upload a text string as a new object.
			s3Client.putObject(bucketName, stringObjKeyName, "Uploaded String Object");

			// Upload a file as a new object with ContentType and title specified.
			PutObjectRequest request = new PutObjectRequest(bucketName, fileObjKeyName, new File(fileName));
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentType("plain/text");
			metadata.addUserMetadata("x-amz-meta-title", "someTitle");
			request.setMetadata(metadata);
			s3Client.putObject(request);
		} catch (AmazonServiceException e) {
			// The call was transmitted successfully, but Amazon S3 couldn't process
			// it, so it returned an error response.
			e.printStackTrace();
		} catch (SdkClientException e) {
			// Amazon S3 couldn't be contacted for a response, or the client
			// couldn't parse the response from Amazon S3.
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}