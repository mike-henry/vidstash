package com.spx.core.session;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;



@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class SessionIdentifier {
	
	private  String sessionID;
	
	private  String user;  //TODO replace with User 
	
	public SessionIdentifier(String sessionID,String user)
	{
	  this.sessionID=sessionID;	
	  this.user = user;
	}
	
	
	public SessionIdentifier()
	{
	 
	}

	public String getUser() {
		return user;
	}

	public String getSessionID() {
		return sessionID;
	}
}
