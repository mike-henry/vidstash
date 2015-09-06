package com.spx.core.auth;

import javax.security.auth.Subject;

public class Session
{

    private Subject subject;

    private String sessionID;

    Session(Subject subject, String sessionID)
    {
        this.subject = subject;
        this.sessionID = sessionID;
    }

    public Subject getSubject()
    {
        return subject;
    }

    public String getSessionID()
    {
        return sessionID;
    }

    @Override
    public int hashCode()
    {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((sessionID == null) ? 0 : sessionID.hashCode());
        result = prime * result + ((subject == null) ? 0 : subject.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj)
    {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Session other = (Session) obj;
        if (sessionID == null)
        {
            if (other.sessionID != null)
                return false;
        }
        else if (!sessionID.equals(other.sessionID))
            return false;
        if (subject == null)
        {
            if (other.subject != null)
                return false;
        }
        else if (!subject.equals(other.subject))
            return false;
        return true;
    }

}
