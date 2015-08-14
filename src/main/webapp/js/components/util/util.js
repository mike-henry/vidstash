
define([ ],function(){


	
	
	String.prototype.isNumber = function (){
		 var  numberRegEx =  "^[0-9]*$";
		 return this.match(numberRegEx);
	};
	
	String.prototype.hasNumbers = function (){
		var  numberRegEx =  "^[0-9,' ']*$";
		return this.match(numberRegEx);
	};
	
	
	
	String.prototype.isEmpty = function() {
	    return (this.length === 0 || !this.trim());
	};
	
	
	
	
	Object.prototype.loadedSource = function(){
		var scripts = document.getElementsByTagName("script");
		var currentScriptPath = scripts[scripts.length-1].src;
		return  currentScriptPath.substr(0,currentScriptPath.lastIndexOf('/'));
	};
	

	Object.prototype.getLoadedSourceDirectory = function(requireJSModule) {
		var location = requireJSModule.uri.split('/');
		location.pop();
		var directory = location.join('/');
		return directory;
	}
	
	
	Object.prototype.getSourceDirectiveTemplate = function(requireJSModule) {
	
		return getLoadedSourceDirectory(requireJSModule)+"/template/";
	}
	
	
	Object.prototype.loadedTemplateSource = function(template){
		return loadedSource()+ '/templates/'+template;
	} ;
	
	
	
	
	

	
	
//	Object.prototype.uuid = function(){
//	    var d = new Date().getTime();
//	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//	        var r = (d + Math.random()*16)%16 | 0;
//	        d = Math.floor(d/16);
//	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
//	    });
//	    return uuid;
//	};
//
//	
	Object.prototype.generateUUID =function (){
	    var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	};
	
	
});
	
