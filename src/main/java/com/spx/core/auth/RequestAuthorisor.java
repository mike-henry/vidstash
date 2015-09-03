package com.spx.core.auth;

import java.lang.reflect.Method;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.WebApplicationException;

import org.jboss.resteasy.annotations.interception.ServerInterceptor;
import org.jboss.resteasy.core.ResourceMethod;
import org.jboss.resteasy.core.ServerResponse;
import org.jboss.resteasy.spi.Failure;
import org.jboss.resteasy.spi.HttpRequest;
import org.jboss.resteasy.spi.UnauthorizedException;
import org.jboss.resteasy.spi.interception.PreProcessInterceptor;

import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.Provider;

@Provider
@ServerInterceptor
public class RequestAuthorisor implements PreProcessInterceptor{

	
	
	@Inject
	Authenticator  auth;
	
	
	
	
	
	public  static String SESSION_ID_HEADER_KEY="x-session-id"; 
	
	@Override
	public ServerResponse preProcess(HttpRequest request, ResourceMethod resourceMethod)
			throws Failure, WebApplicationException 
	{
		auth.deactivate();
	   if( (isMethodSecured(resourceMethod) && isClassSecured(resourceMethod)  && isSessionIDAvailable(request) ==false))  			   
	   {
		   throw new UnauthorizedException();
	   }
	   auth.activate(getSessionID(request));
		return null;
	}

	
	
	boolean isSessionIDAvailable(HttpRequest request)
	{
		return getSessionID(request) != null;
	}
	
	String getSessionID(HttpRequest request){
		String result= null;
		
		HttpHeaders headers = request.getHttpHeaders();
		MultivaluedMap<String, String> values = headers.getRequestHeaders();
		if (values != null)
		{
			result =values.getFirst(SESSION_ID_HEADER_KEY);
		}
		return result;
	}
	
	boolean isClassSecured(ResourceMethod resourceMethod)
	{
		boolean result = true;
		Class<?> type= resourceMethod.getResourceClass();
		
		if (type!= null)
		{
				result &= (type.getAnnotation(Unsecured.class) == null);
		}
		
		return result;
	}
	
	boolean isMethodSecured(ResourceMethod resourceMethod)
	{
		boolean result = true;
		Method method = resourceMethod.getMethod();
		
		if (method!= null)
		{
			result &= (method.getAnnotation(Unsecured.class) == null);
		}
		
		return result;
	}
	
	
	
	
	
	
	
}
