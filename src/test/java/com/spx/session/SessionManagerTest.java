package com.spx.session;

import static junit.framework.Assert.*;

import org.junit.Test;

import com.spx.core.session.Credentials;
import com.spx.core.session.SessionFactory;
import com.spx.core.session.SessionIdentifier;

public class SessionManagerTest {


	
	
	
	@Test
	public void checkLogin()
	{
		
		SessionFactory sessionF = new SessionFactory();
		
		Credentials credentials = new Credentials("test","test");
		SessionIdentifier result = sessionF.logon(credentials);
		assertNotNull(result);
		
		
		
	}
	
	
	
}
