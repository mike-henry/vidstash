package com.spx.core.auth;

import java.io.IOException;
import java.security.Principal;
import java.util.Map;

import javax.resource.spi.LocalTransactionException;
import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.UnsupportedCallbackException;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;

import org.apache.http.auth.BasicUserPrincipal;

public class DefaultLoginModule implements LoginModule
{

    private CallbackHandler callbackHanddler;
    boolean result = true;
    private Subject subject;
    private String userName;

    @Override
    public boolean abort() throws LoginException
    {
        result = true;
        return false;
    }

    @Override
    public boolean commit() throws LoginException
    {
        // TODO Auto-generated method stub
        System.out.println("commit");
        Principal principle = new Principal()
        {

            @Override
            public String getName()
            {

                return userName;
            }

        };
        this.subject.getPrincipals().add(principle);

        return true;
    }

    @Override
    public void initialize(Subject subject, CallbackHandler callabckHandler, Map<String, ?> arg2, Map<String, ?> arg3)
    {
        // TODO Auto-generated method stub

        this.callbackHanddler = callabckHandler;
        this.subject = subject;

        System.out.println("initialize");

    }

    @Override
    public boolean login() throws LoginException
    {

        System.out.println("login");
        Callback[] callbacks = new Callback[2];

        NameCallback nameCallback;
        callbacks[0] = nameCallback = createNameCallback();
        PasswordCallback passwordCallback;
        callbacks[1] = passwordCallback = new PasswordCallback("Name", false);
        try
        {
            callbackHanddler.handle(callbacks);
            if (nameCallback.getName().equalsIgnoreCase(new String(passwordCallback.getPassword())) == false)
            {
                throw new LoginException("invalid user name or password");
            }
            else
            {
                this.userName = nameCallback.getName();
                result = true;
            }

        }
        catch (IOException | UnsupportedCallbackException e)
        {
            throw new LoginException(e.getMessage());
        }
        return true;
    }

    private NameCallback createNameCallback()
    {
        return new NameCallback("Name");
    }

    @Override
    public boolean logout() throws LoginException
    {
        System.out.println("logout");
        this.subject = null;
        this.userName = null;
        // TODO Auto-generated method stub
        return false;
    }

}
