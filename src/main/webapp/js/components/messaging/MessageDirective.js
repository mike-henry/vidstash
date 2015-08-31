
define(['angular','./messagingModule-init','module'],function(_angular,module,rsModule){
	"use strict";
	

	
	
	

	
	module.controller('MessageController',['$scope', '$rootScope' ,function ($scope,$rootScope) {
		var self = this;
		
		
		var defaultToInfo= function(message){
			if(self.exists(message.type) == false){
				message.type = 'info';
			}
		};
		
		var defaultTimeout = function(message){
			if(self.exists(message.timeout) == false){
				message.timeout = 5000;
			}
		};
		
		
		
		var defaultText= function(message){
			if(self.exists(message.text) == false){
				message.text = message;
			}
		};
		
		
		var addMessage = function(message){
			$scope.messages.push(message);
		};
		
		//<div class="alert alert-success" role="alert">...</div>
		//<div class="alert alert-info" role="alert">...</div>
		//<div class="alert alert-warning" role="alert">...</div>
		//<div class="alert alert-danger" role="alert">...</div>
		
		$scope.messages=[];
		
	

		$scope.closeMessage = function(index) {
		    $scope.messages.splice(index, 1);
		};
		
		
		$rootScope.$on('message',function(event,message){
			defaultText(message);
			defaultToInfo(message);
			defaultTimeout(message);
			addMessage(message);

		});
		
	}]);
	
	
	
	
	
	module.directive('messages',['$log',function ($log){
		var self = this;
		var log =$log;
		var dir = {};
		var templateDirectory = getSourceDirectiveTemplate(rsModule);
		
		
		
		dir.ristrict = "E";
		dir.templateUrl =  templateDirectory + "Messages.html";
		dir.controller = 'MessageController'
		return dir;	
		
		
	}]);
	
	
	
});




