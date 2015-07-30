


alert('boo');

define([], function() {

	
	console.log('Hello video');
	com.spx.vidstash.Video = function(name, url, description) {
		this.name = name;
		this.url = url;
		this.description= description;
		console.log('video  instantiated');

		this.getURL = function() {
			return this.url;
		}

		this.getName = function() {
			return this.name;
		}

		this.getDescription = function() {
			return this.description;
		};
		
		this.setDescription = function(description) {
			 this.description = description;
		};

	};

});