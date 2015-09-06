package com.spx.core.persistence;

import java.util.Set;

import org.junit.Assert;
import org.junit.Test;

import com.spx.core.persistence.model.TestModel;
import com.spx.test.Stored;

public class ConnectionTest
{

    private static final String PACKAGE_NAME = "com.spx.core.persistence.model";

    @Test
    public void ensureAnnotatedClasssFound()
    {
        EntityFinder finder = new EntityFinder();

        Set<Class<?>> classes = finder.findJPAEntities(PACKAGE_NAME);

        Assert.assertTrue(classes.contains(TestModel.class));
        classes = finder.findJPAEntities("com.spx");
        Assert.assertTrue(classes.contains(Stored.class));

    }

}
