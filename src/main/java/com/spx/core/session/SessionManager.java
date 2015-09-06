package com.spx.core.session;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import com.spx.core.auth.Session;
import com.spx.core.auth.Unsecured;

public interface SessionManager
{

    public abstract SessionIdentifier test(Credentials credentials);

    public abstract Session logon(Credentials credentials);

    public abstract void logout(SessionIdentifier identifier);

    public abstract boolean check(String sessionID);

}