package com.project.service;

import java.io.ByteArrayInputStream;

import javax.xml.bind.DatatypeConverter;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.EnvironmentVariableCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

public class ImageService {

	/**
	 * Uploads an image with a given filename to S3. Do not include the
	 * file extension, as that is extracted from the dataURL
	 * 
	 * @param filename
	 * @param dataUrl
	 * @return Upon success, the public URL of the image. Upon failure, null.
	 */
	public static String uploadImage(String filename, String dataUrl) {
		// The image section
		String clientRegion = "us-east-1";
		String bucketName = "gaochain-images";
		filename += "." + dataUrl.substring(dataUrl.indexOf('/') + 1, dataUrl.indexOf(';'));

		String picUrl = "https://s3.amazonaws.com/" + bucketName + "/" + filename;
		try {

			byte[] data = DatatypeConverter.parseBase64Binary(dataUrl.substring(dataUrl.indexOf(',') + 1));
			AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withRegion(clientRegion)
					.withCredentials(new EnvironmentVariableCredentialsProvider()).build();

			// Sets the metadata for file type and public accessibility
			String contentType = dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';'));
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentType(contentType);
			metadata.setContentLength(data.length);

			// Upload the string as the data. Need to use PutObjectRequest to make the file
			// public.
			PutObjectRequest putRequest = new PutObjectRequest(bucketName, filename, new ByteArrayInputStream(data),
					metadata);
			putRequest.setCannedAcl(CannedAccessControlList.PublicRead);
			s3Client.putObject(putRequest);

			return picUrl;

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
		return null;
	}
}
