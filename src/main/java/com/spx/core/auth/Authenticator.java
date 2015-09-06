package com.spx.core.auth;

import java.security.InvalidParameterException;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.security.auth.Subject;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;

import com.spx.core.event.EventLogger;

public class Authenticator
{

    private static final String CONTEXT_KEY = "com.spx.auth.context";

    private static final String DEFAULT_CONTEXT = "Default";

    static Map<String, Session> sessions = new ConcurrentHashMap<String, Session>();

    final ThreadLocal<Session> session = new ThreadLocal<Session>();

    private final EventLogger event;

    @Inject
    public Authenticator(EventLogger event)
    {
        this.event = event;
    }

    public void login(String userName, String password)
    {

        try
        {
            doLogin(userName, password);
        }
        catch (LoginException e)
        {
            event.raise(e, getClass());
        }
    }

    public void login(String sessionToken)
    {
        this.session.set(sessions.get(sessionToken));
    }

    private void doLogin(String userName, String password) throws LoginException
    {
        LoginContext context = new LoginContext(getContextName(), new DefaultCallbackHandler(userName, password));
        context.login();
        createSession(context.getSubject());
    }

    private void createSession(Subject subject)
    {
        String sessionID = UUID.randomUUID().toString();
        Session session = new Session(subject, sessionID);
        this.session.set(session);
        sessions.put(sessionID, session);
    }

    private String getContextName()
    {
        return System.getProperty(CONTEXT_KEY, DEFAULT_CONTEXT);
    }

    public Session getSession()
    {
        return session.get();
    }

    public void activate(String sessionID)
    {
        Session value = null;
        try
        {
            if (sessionID == null)
            {
                throw new InvalidParameterException();
            }
            value = sessions.get(sessionID);
            if (value == null)
            {
                throw new InvalidParameterException();
            }
        }
        finally
        {
            session.set(value);
        }
    }

    public void deactivate()
    {
        session.set(null);
    }

    public void logout()
    {
        if (session.get() != null)
        {
            sessions.remove(session.get().getSessionID());
        }
        session.set(null);
    }

}
