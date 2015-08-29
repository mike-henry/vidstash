define(['angular','./sessionModule-init'],function(_angular,module){
	
	//TODO I dont knout how to unit test interceptors
	
		
	module.service('SessionHTTPInterceptor',['$log','$injector',function ($log,$injector){
        var self = this;
        
       
		
		self.request = function(config) {
			var sessionManager= $injector.get('sessionManager'); //must be done here as service may not be ready yet at creation time 
			
	        if (sessionManager.getSessionDetails() !== undefined && sessionManager.getSessionDetails() !== null ) {
			    config.headers['x-session-id'] =sessionManager.getSessionDetails().sessionID;
			}
			return config;
		};
		
	}]);
	
	module.config(['$httpProvider', function($httpProvider) {  
	    $httpProvider.interceptors.push('SessionHTTPInterceptor');
	}]);
	

});




