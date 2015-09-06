package com.spx.core.session;

import static junit.framework.Assert.*;

import java.security.InvalidParameterException;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.spx.core.auth.Authenticator;
import com.spx.core.auth.Session;
import com.spx.core.event.EventLogger;
import com.spx.core.session.Credentials;
import com.spx.core.session.SessionIdentifier;

public class SessionManagerTest {

	private static final String BOGUS_SESSION_ID = "1010101010101010101010";
	EventLogger event = Mockito.mock(EventLogger.class);

	@Before
	public void setProperty() 
	{
		
		System.setProperty("java.security.auth.login.config", "C:\\projects\\Personal\\vidstash\\src\\main\\java\\com\\spx\\core\\auth\\JAAS.config");
	}
	
	
	@Test
	public void  checkLogin()
	{
		doCheckLogin();
	}
	@Test
	public void  checkLoginClearSession()
	{
		doCheckLogin();
		Authenticator auth = new Authenticator(event);
		assertNull(auth.getSession());
		
	}
	
	@Test
	public void  checkLoginClearSessionWithReactivate()
	{
		Session session = doCheckLogin();
		Authenticator auth = new Authenticator(event);
		assertNull(auth.getSession());
		auth.activate(session.getID());
		assertNotNull(auth.getSession());
		Session session2 = auth.getSession();
		assertEquals(session,session2);
		
	}
	@Test(expected=InvalidParameterException.class)
	public void  checkLoginLogoutWillInvalidateSession()
	{
		Session session = doCheckLogin();
		Authenticator auth = new Authenticator(event);
		assertNull(auth.getSession());
		auth.activate(session.getID());
		assertNotNull(auth.getSession());
		auth.logout();
		assertNull(auth.getSession());
		auth.activate(session.getID());

		
	}
	
	@Test(expected=InvalidParameterException.class)
	public void  checkLoginClearSessionWithBugusReactivate()
	{
		Session session = doCheckLogin();
		Authenticator auth = new Authenticator(event);
		assertNull(auth.getSession());
		auth.activate(BOGUS_SESSION_ID);
		fail("Should throw on activation");
		
		
		
	}


	private Session doCheckLogin() {
		
		Authenticator auth = new Authenticator(event);
		SessionManager session = new SessionManagerBean(event,auth );
		
		Credentials credentials = new Credentials("test","test");
		Session result = session.logon(credentials);
		assertNotNull(result);
		return result;
	}
	
	
	
}
