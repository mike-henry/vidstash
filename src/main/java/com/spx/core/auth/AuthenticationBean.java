package com.spx.core.auth;

import javax.ejb.Singleton;
import javax.inject.Inject;

@Singleton
public class AuthenticationBean
{
    @Inject
    Authenticator auth;

    public void logout()
    {
        auth.logout();
    }

    public void activate(String sessionID)
    {
        auth.activate(sessionID);
    }

    public void deactivate()
    {
        auth.deactivate();
    }

}
