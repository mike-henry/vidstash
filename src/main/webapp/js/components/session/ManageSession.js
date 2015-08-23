define(['angular','./sessionModule-init'],function(_angular,module){
	
	
	
	
	module.service('sessionManager',['$log','$http',function ($log,$http){
		var self = this;
		
		var sessionDetails = undefined;
		
		
		
		var createCredentials = function(user,password){
			return {
				"user": user,
				"password": password
			};
			
		};
		
		
		var getUserFromLoginResponse = function(response,userName){
			
			var sessionDetails= {
					session: response.data.session,
			        user:userName
			}
			return sessionDetails;
		} 
		
		
		self.start= function(){
			sessionDetails ;
		}
		
		self.end= function(){
			sessionDetails = undefined;
		}
		
		
		self.isLoggedIn = function(){
			return sessionDetails !== undefined  && sessionDetails !== null;
		};
		
		
		
		self.getUserName = function(){
			var userName = undefined;
			
			if (sessionDetails !== undefined && sessionDetails !== null){
				userName= sessionDetails.user;
			}
			return userName;
		};
		
		
		self.login = function(userName,password){
			var credentials = createCredentials(userName,password);

			$http.post('/login',credentials).
			then(function(result) {
				sessionDetails=getUserFromLoginResponse(result,userName); 
			  },function() {
				     self.end();
			  }
			);
		}
		
		self.logout =function(){
			$http.post('/logout',sessionDetails.session).
			finally(function(result) {
				self.end();
			  }
			);
		
		};
		
		
		
	}]);
	
	
	
});




