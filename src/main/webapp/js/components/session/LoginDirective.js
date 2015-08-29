
define(['angular','./sessionModule-init','module'],function(_angular,module,rsModule){
	"use strict";
	

	
	var templateDirectory = getSourceDirectiveTemplate(rsModule);
	
	
	
	
	
	module.directive('login',['$log',function ($log){
		var self = this;
		var log =$log;
		var dir = {};
		dir.ristrict = "E";
		dir.templateUrl =  templateDirectory + "Login.html";
		dir.controller = 'LoginController'
		return dir;	
		
		
	}]);
	
	
	
});




