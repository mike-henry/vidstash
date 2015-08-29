package com.spx.core.session;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.spx.core.event.EventLogger;

@Stateless
@Path("/session")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SessionFactory {

	//TODO this will be inside a session manager ... persisted in mongo..
	private  final Map<String,SessionIdentifier> sessions = new HashMap<String,SessionIdentifier>();

	final EventLogger logger = EventLogger.getInstance();
	
	@Inject  /// dont like this.
	private EventLogger event;
	
	

	public SessionFactory()
	{
		
	}
	
	
	
	
	@POST()
	@Path("/login")
	public SessionIdentifier logon(Credentials credentials)
	{
		if (isValidUser(credentials))
		{
			SessionIdentifier identifier = instantiateIdentifier(credentials.getUserName());
			addSession(identifier);
			logger.debug(this, "Session for {} Created",credentials.getUserName());
			return identifier;
		}
		return logger.raise(new InvalidUserExeption(credentials), SessionIdentifier.class);
	}
	
	
	private void addSession(SessionIdentifier identifier) 
	{
		sessions.put(identifier.getSessionID(),identifier);
	}




	private boolean isValidUser(Credentials credentials) 
	{
		boolean result =   credentials.getUserName().equals(credentials.getPassword());

		///NEVER EVER TO THIS!!!
		logger.debug(this, "User Name {}  and password {}" ,credentials.getUserName(),credentials.getPassword());
		return result;
	}
	
	
	@POST()
	@Path("/logout")
	public void logout(SessionIdentifier identifier)
	{
		if (isValid(identifier))
		{
			sessions.remove(identifier.getSessionID());
		}
	}
	@GET()
	@Path("/check")
	public boolean check(String sessionID)
	{
		return sessionExists(sessionID);
	}
	
	
	
	

	private boolean sessionExists(String sessionID) {
		return sessions.containsKey(sessionID);
	}




	private boolean isValid(SessionIdentifier identifier) {
		return identifier != null && identifier.getSessionID() != null;
	}




	private SessionIdentifier instantiateIdentifier(String userName)
	{
		SessionIdentifier sessionIdentifier = new SessionIdentifier(UUID.randomUUID().toString(),userName);
		return sessionIdentifier;
	}
	
	
}
