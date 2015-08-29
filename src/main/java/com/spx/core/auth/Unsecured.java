package com.spx.core.auth;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;


@Retention(value=java.lang.annotation.RetentionPolicy.RUNTIME)
@Target(value={java.lang.annotation.ElementType.METHOD,java.lang.annotation.ElementType.TYPE})
public @interface Unsecured {

}
