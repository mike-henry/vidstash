
 

define(['../sessionModule-init'], function(module) {

	 module.User = function(name,  email) {
		var self = this;
		self.name = name;
		self.email= email;

		self.getEmail = function() {
			return  self.email;
		}

		self.getName = function() {
			return self.name;
		}

	

	};
});