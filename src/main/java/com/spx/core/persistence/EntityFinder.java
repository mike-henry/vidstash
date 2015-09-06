package com.spx.core.persistence;

import java.util.Collections;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.cfg.Configuration;
import org.reflections.Reflections;

@javax.ejb.Singleton
@javax.ejb.Startup
public class EntityFinder
{

    public static final String PERSISTENCE_UNIT_NAME = "OGMPU";

    @PersistenceContext(unitName = PERSISTENCE_UNIT_NAME)
    EntityManager manager;

    @PostConstruct
    public void setupClasses()
    {

        System.out.println("*****************************************ITS STARTED in cse u wondered");
        Configuration config = new Configuration();

        for (Class<?> type : findJPAEntities("com.spx"))
        {
            System.out.println("adding type " + type.toString());
            config = config.addAnnotatedClass(type);
        }
        config.buildMappings();

        //
    }

    public Set<Class<?>> findJPAEntities(String packageName)
    {
        Reflections reflections = new Reflections(packageName);
        Set<Class<?>> result = reflections.getTypesAnnotatedWith(Entity.class);
        return Collections.unmodifiableSet(result);
    }

}
