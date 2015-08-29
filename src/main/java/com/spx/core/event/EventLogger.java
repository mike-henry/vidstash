package com.spx.core.event;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EventLogger {

	
	
	private static final EventLogger INSTANCE = new EventLogger();
	
	Map<Class<?>,Logger> loggers = new  ConcurrentHashMap<Class<?>, Logger>();
	
	
	public <T> void log(T object,String message,Object ... params)
	{
		Logger logger= getFactory(object.getClass());
		logger.info(message, params);
	}
	
	public <T> void   debug(T object,String message,Object ... params)
	{
		Logger logger= getFactory(object.getClass());
		logger.debug(message, params);
	}
	
	
	private Logger getFactory(Class<? extends Object> type) {
		Logger result = loggers.get(type);
		if (result == null)
		{
			result =LoggerFactory.getLogger(type);
			loggers.put(type, result);
		}
		
		return result;
	}

	public <T> void warn(T object,String message,Object ... params)
	{
		Logger logger= getFactory(object.getClass());
		logger.warn(message, params);
	}
	
	public <T> void error(T object,String message,Object ... params)
	{
		Logger logger= getFactory(object.getClass());
		logger.error(message, params);
	}
	
	
	public <T> T raise(Throwable throwable, Class<T> type)
	{
		raise(throwable,type);
		return null;//Never reached;
	}
	
	public <T> T raise(Throwable throwable,Class <T> type,Object ...params)
	{
		final Logger logger= getFactory(type.getClass());
		
		final String message = throwable.getMessage();
		logger.error(message, params);
		logger.error(message, throwable);
		throw new RuntimeException(throwable);	
	}
	
	
	
	public static EventLogger getInstance()
	{
		return INSTANCE;
	}
	
	
}
