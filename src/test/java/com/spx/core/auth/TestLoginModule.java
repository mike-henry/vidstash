package com.spx.core.auth;

import java.security.Principal;

import javax.security.auth.Subject;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;

import org.apache.commons.lang3.StringUtils;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.spx.core.event.EventLogger;

public class TestLoginModule {

	
	String userName ="Admin";
	
	String oldConfig;
	
	EventLogger event = Mockito.mock(EventLogger.class);
	
	
	@Test
	public void  createDefualtSecurityContext() throws LoginException
	{
		
		
		String password ="Admin";
		LoginContext lc = new LoginContext("Default", new DefaultCallbackHandler(userName,password));
		
		lc.login();
		Subject s = lc.getSubject();
		
		System.out.println("done");
	}


	@Before
	public void setProperty() 
	{
		oldConfig = System.getProperty("java.security.auth.login.config");
		System.setProperty("java.security.auth.login.config", "C:\\projects\\Personal\\vidstash\\src\\main\\java\\com\\spx\\core\\auth\\JAAS.config");
	}
	
	@After
	public void unSetProperty() 
	{
		System.setProperty("java.security.auth.login.config", ""+oldConfig);
	}
	
	
	@Test
	public void validLoginPlacesASessiononThreadLocal() throws LoginException
	{
		
		String password ="Admin";
		
		
		Authenticator  authenticator =  new Authenticator(event);
		authenticator.login(userName, password);
		Session session = authenticator.getSession();
		
		Subject subject = session.getSubject();
		Assert.assertNotNull(subject);
		checkPrincapalsIncludeUser(userName, subject);
	
	
	}
	

	
	@Test
	public void validSessionFindableViaSessionID() throws LoginException
	{
		
		String password ="Admin";
		
		
		Authenticator  authenticator =  new Authenticator(event);
		authenticator.login(userName, password);
		Session session = authenticator.getSession();
		
		
	
		Authenticator  authenticator2 =  new Authenticator(event);
		authenticator2.login(session.getID());
		Session session2 = authenticator2.getSession();
		
		Assert.assertEquals(session,session2);
		
		
	
	}

	
	
	
	


	private void checkPrincapalsIncludeUser(String userName, Subject subject) {
		boolean result = false;
		for (Principal p:  subject.getPrincipals())
		{
			if (StringUtils.equals(p.getName(),userName))
			{
				result = true;
			}
		}
		Assert.assertTrue(result);
	}
}
