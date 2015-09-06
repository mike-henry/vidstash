package com.spx.core.session;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.inject.Inject;

import com.spx.core.auth.Authenticator;
import com.spx.core.auth.Session;
import com.spx.core.event.EventLogger;

public class SessionManagerBean implements SessionManager
{

    // TODO this will be inside a session manager ... persisted in mongo..
    private final Map<String, SessionIdentifier> sessions = new HashMap<String, SessionIdentifier>();

    final EventLogger logger = EventLogger.getInstance();

    private final EventLogger event;

    private final Authenticator auth;

    @Inject
    public SessionManagerBean(EventLogger event, Authenticator auth)
    {
        this.event = event;
        this.auth = auth;
    }

    /*
     * (non-Javadoc)
     *
     * @see
     * com.spx.core.session.SessionManager#test(com.spx.core.session.Credentials
     * )
     */

    @Override
    public SessionIdentifier test(Credentials credentials)
    {
        event.debug(this, "ooops");
        return null;
    }

    /*
     * (non-Javadoc)
     *
     * @see
     * com.spx.core.session.SessionManager#logon(com.spx.core.session.Credentials
     * )
     */

    @Override
    public Session logon(Credentials credentials)
    {
        try
        {
            auth.login(credentials.getUserName(), credentials.getPassword());
            logger.debug(this, "Session for {} Created", credentials.getUserName());
            return auth.getSession();
        }
        catch (Exception e)
        {
            return logger.raise(new InvalidUserExeption(credentials), Session.class);
        }

    }

    private void addSession(SessionIdentifier identifier)
    {
        sessions.put(identifier.getSessionID(), identifier);
    }

    private boolean isValidUser(Credentials credentials)
    {
        boolean result = credentials.getUserName().equals(credentials.getPassword());

        // /NEVER EVER TO THIS!!!
        logger.debug(this, "User Name {}  and password {}", credentials.getUserName(), credentials.getPassword());
        return result;
    }

    /*
     * (non-Javadoc)
     *
     * @see com.spx.core.session.SessionManager#logout(com.spx.core.session.
     * SessionIdentifier)
     */

    @Override
    public void logout(SessionIdentifier identifier)
    {
        auth.logout();
        if (isValid(identifier))
        {
            sessions.remove(identifier.getSessionID());
        }
    }

    /*
     * (non-Javadoc)
     *
     * @see com.spx.core.session.SessionManager#check(java.lang.String)
     */

    @Override
    public boolean check(String sessionID)
    {
        return sessionExists(sessionID);
    }

    private boolean sessionExists(String sessionID)
    {
        return sessions.containsKey(sessionID);
    }

    private boolean isValid(SessionIdentifier identifier)
    {
        return identifier != null && identifier.getSessionID() != null;
    }

    private SessionIdentifier instantiateIdentifier(String userName)
    {
        SessionIdentifier sessionIdentifier = new SessionIdentifier(UUID.randomUUID().toString(), userName);
        return sessionIdentifier;
    }

}
