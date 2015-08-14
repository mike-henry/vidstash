
console.log('Video module defined');

//define(['require','angular'],function(require,_a){
	define(['require','angular','./model/Video','./ManageVideo','./displayVideoDirective'],function(require,$angular,videoModel,manageVideo){

	
	var module = angular.module('com.spx.vidstash.video');

	
	
	return module;
	 
	
});