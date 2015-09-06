package com.spx.core.auth;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.security.auth.Subject;

@Entity
public class Session
{

    @Transient
    private Subject subject;

    @Id
    private String id;

    private boolean isActive = true;

    public Session(Subject subject, String sessionID)
    {
        this.subject = subject;
        this.id = sessionID;
    }

    public Session()
    {

    }

    public Subject getSubject()
    {
        return subject;
    }

    public String getID()
    {
        return id;
    }

    @Override
    public int hashCode()
    {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
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
        if (id == null)
        {
            if (other.id != null)
                return false;
        }
        else if (!id.equals(other.id))
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

    public boolean isActive()
    {
        return isActive;
    }

    public void setActive(boolean isActive)
    {
        this.isActive = isActive;
    }

}
