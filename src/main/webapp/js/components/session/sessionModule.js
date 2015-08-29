


define(['require','angular',
        './model/User',
        './SessionManager',
        './LoginController',
        './StartSessionController',
        './SessionHTTPInterceptor'
        ],function(require,$angular,manageUser,startSession){
	var module = angular.module('com.spx.session');
	

	
	
	return module;
	
});