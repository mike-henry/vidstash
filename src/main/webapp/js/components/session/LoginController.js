define(['angular','./sessionModule-init'],function(_angular,module){
	
	
	
	
	module.controller('LoginController',['$scope','$log','sessionManager','storage',function ($scope,$log,sessionManager,store){
		var self = this;
		
		store.bind($scope,'userName');
		
		
	
	
		self.login = function(){
			store.bind($scope,'userName');
					
			var password = $scope.password;
			$scope.password = undefined;
			sessionManager.login($scope.userName,password);
		};
		
		self.logout =function(){
			$scope.userName=undefined;
			$scope.password=undefined;
			
			sessionManager.logout();
		};
		
		
		self.isSessionValid=  function(){
			return sessionManager.isLoggedIn();
		};
		
		
		//TODO put this on root scope
		$scope.isSessionValid= self.isSessionValid;
		
		
		
	}]);
	
//	//nuaghty
//	module.controller('StartController',['$scope','$location','sessionManager', function($scope,$location,sessionManager){
//        sessionManager.init();  // clears session data	
//		window.location='welcome.html';
//		
//	}]);	
//	
});




