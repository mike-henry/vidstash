package com.spx.core.session;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.spx.core.auth.Authenticator;
import com.spx.core.auth.Session;
import com.spx.core.auth.Unsecured;
import com.spx.core.event.EventLogger;

@Stateless
@Path("/session")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SessionManagerService  {

	@Inject
	SessionManagerBean bean;
	
	

	

	@POST()
	@Path("/test")
	public SessionIdentifier test(Credentials credentials)
	{
	    return bean.test(credentials);
	}
	

	@POST()
	@Path("/login")
	@Unsecured
	public Session logon(Credentials credentials)
	{
	    return bean.logon(credentials);
	}
	
	
	
	@POST()
	@Path("/logout")
	public void logout(SessionIdentifier identifier)
	{
		bean.logout(identifier);
	}

	
	
	@GET()
	@Path("/check")
	public boolean check(String sessionID)
	{
		return bean.check(sessionID);
	}
	
	
	
	
	
}
