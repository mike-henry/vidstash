package com.spx.core.session;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.spx.core.auth.Session;
import com.spx.core.auth.Unsecured;

@Stateless
@Path("/session")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SessionManagerService
{

    @Inject
    SessionManagerBean bean;

    @PersistenceContext(unitName = "OGMPU")
    private EntityManager manager;

    @POST()
    @Path("/test")
    public SessionIdentifier test(Credentials credentials)
    {
        return bean.test(credentials);
    }

    @POST()
    @Path("/login")
    @Unsecured
    public Session logon(Credentials credentials)
    {
        return bean.logon(credentials);
    }

    @POST()
    @Path("/logout")
    public void logout(SessionIdentifier identifier)
    {
        bean.logout(identifier);
    }

    @GET()
    @Path("/check")
    public boolean check(String sessionID)
    {
        return bean.check(sessionID);
    }

}
