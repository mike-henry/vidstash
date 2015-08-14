define([ 'util', 'js/components/video/videoModule'], function(util,videoModule) {
	
		
  var module = angular.module('app', []);   
  module.config(['$controllerProvider', 
    '$compileProvider', 
    '$filterProvider', 
    '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide) {
      module.controller = $controllerProvider.register;
      module.directive = $compileProvider.directive;
      module.filter = $filterProvider.register;
      module.factory = $provide.factory;
      module.service = $provide.service;
     }
 ]);
  angular.bootstrap(document, ['app']);
console.log('Application Started')


  module.getVideoModule = function (){
	return videoModule;
}
  


 return module;

});