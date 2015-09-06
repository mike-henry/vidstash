package com.spx.core.session;

public class Credentials
{

    private String userName;

    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    private String password;

    Credentials(String userName, String password)
    {
        this.userName = userName;
        this.password = password;
    }

    public Credentials()
    {

    }

    String getUserName()
    {
        return userName;
    }

    String getPassword()
    {
        return password;
    }

}
