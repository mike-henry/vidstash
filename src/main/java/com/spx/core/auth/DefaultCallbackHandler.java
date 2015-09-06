package com.spx.core.auth;

import java.io.IOException;
import java.net.URL;

import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.UnsupportedCallbackException;

public class DefaultCallbackHandler implements CallbackHandler
{

    private final String password;
    private final String userName;

    public DefaultCallbackHandler(String userName, String password)
    {
        this.password = password;
        this.userName = userName;
        setConfig();
    }

    @Override
    public void handle(Callback[] callbacks) throws IOException, UnsupportedCallbackException
    {
        // TODO Auto-generated method stub

        for (Callback callback : callbacks)
        {
            if (callback instanceof NameCallback)
            {
                System.out.println("names asked");
                NameCallback nameCallback = (NameCallback) callback;
                nameCallback.setName(this.userName);
            }
            if (callback instanceof PasswordCallback)
            {
                System.out.println("password assked");
                PasswordCallback nameCallback = (PasswordCallback) callback;
                nameCallback.setPassword(this.password.toCharArray());
            }
        }

    }

    public void setConfig()
    {
        if (System.getProperty("java.security.auth.login.config") == null)
        {
            String jaasConfigFile = null;
            URL jaasConfigURL = this.getClass().getClassLoader().getResource("/com/spx/core/auth/JAAS.config");
            if (jaasConfigURL == null)
            {
                jaasConfigURL = this.getClass().getClassLoader().getResource("JAAS.config");
            }
            if (jaasConfigURL != null)
            {
                jaasConfigFile = jaasConfigURL.getFile();
            }
            System.setProperty("java.security.auth.login.config", "" + jaasConfigFile);
        }
    }

}
