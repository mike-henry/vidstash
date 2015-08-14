//console.log('DMV');
define(['angular','./videoModule-init','module'],function(_angular,module,rsModule){
	

	
	var templateDirectory = getSourceDirectiveTemplate(rsModule);
	
	
	alert (templateDirectory+":");
	
	
	module.directive('dis',['$log',function ($log){
		var self = this;
		var log =$log;
		var dir = {};
		dir.ristrict = "E";
		dir.templateURL =  templateDirectory + "displayVideoTemplate.html";
		dir.$scope = {
		        video : "=",
		        width : "=",
		        height: "="
		}	
		dir.replace=true;
		return dir;	
		
		
	}]);
	
	
	
});




