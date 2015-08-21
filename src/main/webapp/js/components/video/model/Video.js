
 

define(['../videoModule-init'], function(module) {

	 module.Video = function(name, url, description) {
		var self = this;
		this.name = name;
		this.url = url;
		this.description= description;

		self.getURL = function() {
			return  this.url;
		}

		self.getName = function() {
			return this.name;
		}

		self.getDescription = function() {
			return this.description;
		};
		
		self.setDescription = function(description) {
			 this.description = description;
		};

	};
});