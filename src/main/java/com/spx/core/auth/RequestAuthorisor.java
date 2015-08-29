package com.spx.core.auth;

import java.util.List;

import javax.ws.rs.WebApplicationException;

import org.jboss.resteasy.annotations.interception.ServerInterceptor;
import org.jboss.resteasy.core.ResourceMethod;
import org.jboss.resteasy.core.ServerResponse;
import org.jboss.resteasy.spi.Failure;
import org.jboss.resteasy.spi.HttpRequest;
import org.jboss.resteasy.spi.interception.PreProcessInterceptor;

import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.Provider;

@Provider
@ServerInterceptor
public class RequestAuthorisor implements PreProcessInterceptor{

	
	public  static String SESSION_ID_HEADER_KEY="x-session-id"; 
	
	@Override
	public ServerResponse preProcess(HttpRequest request, ResourceMethod method)
			throws Failure, WebApplicationException 
	{
		
		
		HttpHeaders headers = request.getHttpHeaders();
		MultivaluedMap<String, String> x = headers.getRequestHeaders();
		List<String> headerValues = headers.getRequestHeader(SESSION_ID_HEADER_KEY);
		if (headerValues != null)
		for (String headerValue: headerValues)
		{
		
		System.out.println("HEEEE  this shit works session is"+headerValue);
		}
		System.out.println("kinda "+ x.getFirst(SESSION_ID_HEADER_KEY));
		return null;
	}

	
	
	
	
	
}
