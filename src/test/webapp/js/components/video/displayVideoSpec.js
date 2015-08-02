//TODO create VideoManager

define(['angular-mocks','main/webapp/js/components/video/videoModule','app'], function(mocks,videoModule) {


  
	
	
describe('display videos', function() {

	
	var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';
	var TEST_VIDEO_NAME = 'testVideo';
	var TEST_DESCRIPTION = 'professionalism in software engineering';
	var NEW_DESCRIPTION = 'professionalism in software';
var elm;
var scope;
var converted;
var compile;

beforeEach(module('com.spx.vidstash.video'));

beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element('<dis> test </dis>')
    scope = $rootScope.$new();
    compile= $compile;
    scope.height="100px";
    scope.width ="200px";

  }));

	it('can show a video', function() {
		scope.video = new videoModule.Video(TEST_VIDEO_NAME,
				BOB_MARTIN_VIDEO_URL,
				NEW_DESCRIPTION);
		
	    converted=compile(elm)(scope);
	    scope.$digest();
		 var contents = elm.find('iframe');
		console.log(converted);
		
			
		
	});
	
	 
});
});