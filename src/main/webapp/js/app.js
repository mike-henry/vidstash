/* app.js */

alert('YY')
define([], function() {
	
 
  alert('XX')
 
	
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
console.log('Application Started')
 return module;

});