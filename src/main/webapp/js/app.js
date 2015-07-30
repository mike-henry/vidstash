/* app.js */


define(['angular'], function(app) {

	
  var module = angular.module('app', []);   //TODO get angular found!!
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