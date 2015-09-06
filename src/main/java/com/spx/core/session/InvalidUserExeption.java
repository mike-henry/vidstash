package com.spx.core.session;

public class InvalidUserExeption extends RuntimeException
{

    private static final long serialVersionUID = 1L;

    public static final String MESSAGE = "user unverified {0}";

    InvalidUserExeption(Credentials credentials)
    {
        super(MESSAGE + " " + credentials.getUserName());
    }
}
