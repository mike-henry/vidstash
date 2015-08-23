define(['angular','./videoModule-init','module'],function(_angular,module,rsModule){
	

	
	var templateDirectory = getSourceDirectiveTemplate(rsModule);
	
	
	
	
	
	module.directive('dis',['$log','$sce',function ($log,$sce){
		var self = this;
		var log =$log;
		var dir = {};
		dir.ristrict = "E";
	  
		
		var link = function($scope, element, attributes, controller) {
            $scope.exceptURLAsSecure = function() {
                $scope.trustedSrc = $sce.trustAsResourceUrl($scope.video.getURL());
            }
 
            $scope.$watch('video', function(newVal, oldVal) {
                $scope.exceptURLAsSecure(newVal);
            });
        }
		
 	 	////dir.template = "<iframe width='{{width}}' height='{{height}}' src='{{trustedSrc}}' ></iframe>";
		dir.templateUrl =  templateDirectory + "displayVideoTemplate.html";
		//console.log (dir.templateUrl);
		dir.$scope = {
		        video : "=",
		        width : "=",
		        height: "=",
		       
		}	
		
		dir.replace=true;
		dir.link=link;
		return dir;	
		
		
	}]);
	
	
	
});




