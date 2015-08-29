define(['angular','./sessionModule-init'],function(_angular,module){
	
	var SESSION_ID_KEY = 'session-id';
	
	
	


	
	module.service('sessionManager',['$log','$http','$rootScope','storage',function ($log,$http,$scope,storage){
		var self = this;
		
		var sessionDetails;
		
	
		
		
		
		var createCredentials = function(user,password){
			return {
				"userName": user,
				"password": password
			};
			
		};
		
		
		var storeSession = function(session){
		
			storage.set(SESSION_ID_KEY,session);
			
		};
			
			
		var fetchSession = function(){
			return storage.get(SESSION_ID_KEY);
		};
			
		
		var  clearSession= function(){
			sessionDetails = undefined;
			storage.remove(SESSION_ID_KEY);
			storage.remove('userName');
			$log.log('Session cleared');
		};
		
		var getUserFromLoginResponse = function(response,userName){
			console.log(response.data);
			
			var sessionDetails= {
					sessionID: response.data['sessionID'],
			        user:userName
			};
			return sessionDetails;
		};
		
		
		
		self.init = function(){
			clearSession();
		};
		
		
		self.start= function(){
			sessionDetails =fetchSession();
		};
		
		self.end= function(){
			clearSession();
			sessionDetails = undefined;
		};
		
		
		self.isLoggedIn = function(){
			var result =sessionDetails !== undefined  && sessionDetails !== null;
			console.log(result);
			return result; 
		};
		
		
		
		self.getUserName = function(){
			var userName;
			
			if (sessionDetails !== undefined && sessionDetails !== null){
				userName= sessionDetails.user;
			}
			return userName;
		};
		
		
		self.getSessionDetails = function(){
			  return  sessionDetails;
		};
		
		
		
		self.login = function(userName,password){
			var credentials = createCredentials(userName,password);
			$http.post('/vidstash/services/session/login',credentials).
			then(function(result) {
				sessionDetails=getUserFromLoginResponse(result,userName);
				storeSession(sessionDetails);
				
				
			  },function() {
				     self.end();
			  }
			);
			
			
			
		};
		
		self.logout =function(){
			$http.post('/vidstash/services/session/logout',sessionDetails.session).
			
			finally(function(result) {
				self.end();
				
			  }
			);
		
		};
		

		self.start();
		
	}]);
;

});




