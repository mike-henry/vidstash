
define(['angular','./videoModule-init'],function(_angular,module){
	
	module.service('videoManager',['$log',function ($log){
		var self = this;
		var log =$log;
		
		var videos= {};
		
		
		var getKeyedObjects = function (keyedObjects){
			var keys =Object.keys(keyedObjects);
			var result = [];
			for(var cntr = 0; cntr<Object.keys(keyedObjects).length;cntr++){
				result.push(keyedObjects[keys[cntr]]);
			}
			return result;
		};
		
		
		
		var  addObject = function(name,object,list ){
		    var copy = JSON.parse(JSON.stringify( object ));
			copy.name = name;
			list[ name] = copy;
		};
		
		
 		 
		
		self.addVideo = function(video) {
			log.debug("Adding  Video:"+ video.name);
			addObject(video.name,video , videos);
		};
		
		self.removeVideoByName = function(videoName){
			log.debug("Deleting Video:"+ videoName);
			delete videos[videoName];
		};
		
		self.findVideoByName = function(videoName){
			return videos[videoName];
		};
		
		
		
		
	}]);
	
	
	
});




