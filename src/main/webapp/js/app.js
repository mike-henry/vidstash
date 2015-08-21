define([ 'util',  'js/components/video/videoModule'], function(util,videoModule) {
	
		
  var module = angular.module('app', ['ngRoute','ui.bootstrap','com.spx.vidstash.video']);   
  module.config(['$controllerProvider', 
    '$compileProvider', 
    '$filterProvider', 
    '$provide',
    '$sceDelegateProvider',
    '$routeProvider',
    
    function($controllerProvider, $compileProvider, $filterProvider, $provide, $sceDelegateProvider,$routeProvider) {
      module.controller = $controllerProvider.register;
      module.directive = $compileProvider.directive;
      module.filter = $filterProvider.register;
      module.factory = $provide.factory;
      module.service = $provide.service;
      $sceDelegateProvider.resourceUrlWhitelist(['**']);
     
      var route = $routeProvider;
      
      
      route.when('/', {
    	  template: '<H1>ROOT</H1>'
      });
      
      route.when('/one/:ref', {
    	  template: '<H1>1</H1>',
    	  resolve: {
    		  first: function (){
    			  console.log('one done')
    		  }
    	  },
    	  controller: ['$routeParams', function($routeParam){
    		  console.log("ref:"+$routeParam.ref);
    	  }]
        
      });
      route.when('/two', {
    	  template: '<H1>2</H1>'
      });
      route.otherwise('/two', {
    	  template: '<H1>2</H1>'
      });
      
      
      
      
     }
 ]);



  module.getVideoModule = function (){
	return videoModule;
  }
	
	
	module.controller('testControl',['$scope','videoManager', function($scope,videoManager){
		var self = this;
		$scope.video=new videoModule.Video("XXX", "http://www.youtube.com/embed/j6cxZp4ii6c?autoplay=true", "TEST");
		self.addVid = function(){
		var vid = new videoModule.Video($scope.name, $scope.url, $scope.description);
		videoManager.addVideo(vid);
		$scope.video=vid;  //lol
		};
	}]);
	
	angular.bootstrap(document, ['app']);
	
  
	console.log('Application Started')

 return module;

});