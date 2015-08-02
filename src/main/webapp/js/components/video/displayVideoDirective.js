
define(['angular','./videoModule-init'],function(_angular,module){
	

	
	module.directive('dis',['$log',function ($log){
		var self = this;
		var log =$log;
		
		var dir = {};
		dir.ristrict = "E";
		dir.template ="<iframe width='{{width}}' height='{{height}}' src='{{video.getURL()}}' ></iframe>"
		dir.$scope = {
		        video : "=",
		        width : "=",
		        height: "="
		}	
			dir.replace=true;
		return dir;	
		
		
	}]);
	
	
	
});




