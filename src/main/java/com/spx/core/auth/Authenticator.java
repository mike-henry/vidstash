package com.spx.core.auth;

import java.security.InvalidParameterException;
import java.util.UUID;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.security.auth.Subject;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;

import com.spx.core.event.EventLogger;
import com.spx.core.persistence.EntityFinder;

public class Authenticator
{

    private static final String CONTEXT_KEY = "com.spx.auth.context";

    private static final String DEFAULT_CONTEXT = "Default";

    final ThreadLocal<String> session = new ThreadLocal<String>();

    @PersistenceContext(unitName = EntityFinder.PERSISTENCE_UNIT_NAME)
    EntityManager sessionStorage;

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
        Session session = this.sessionStorage.find(Session.class, sessionToken);
        if (session != null)
        {
            this.session.set(sessionToken);
        }
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
        this.session.set(sessionID);
        this.sessionStorage.persist(session);
    }

    private String getContextName()
    {
        return System.getProperty(CONTEXT_KEY, DEFAULT_CONTEXT);
    }

    public Session getSession()
    {
        return this.sessionStorage.find(Session.class, session.get());
    }

    public void activate(String sessionID)
    {
        Session value = null;
        try
        {
            if (isSessionIDSet() == false)
            {
                throw new InvalidParameterException();
            }
            value = sessionStorage.find(Session.class, sessionID);
            if (value == null)
            {
                throw new InvalidParameterException();
            }
        }
        finally
        {
            session.set(sessionID);
        }
    }

    public void deactivate()
    {
        if (isSessionIDSet())
        {
            session.set(null);
        }
    }

    public void logout()
    {
        if (isSessionIDSet())
        {
            Session s = sessionStorage.find(Session.class, session.get());
            sessionStorage.remove(s);
        }
        session.set(null);
    }

    private boolean isSessionIDSet()
    {
        return session.get() != null;
    }

}
