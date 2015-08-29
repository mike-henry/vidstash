define(['angular','./sessionModule-init'],function(_angular,module){
	
	
	
	
	
	module.controller('StartController',['$scope','$location','sessionManager', function($scope,$location,sessionManager){
        sessionManager.init();  // clears session data	
		window.location='welcome.html';
		
	}]);
	
	
	
	
});




