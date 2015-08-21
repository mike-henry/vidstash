//TODO create VideoManager

define(['angular-mocks','app', ], function(mocks,app) {


  
	
describe('display videos', function() {

	var videoModule = app.getVideoModule();
	var BOB_MARTIN_VIDEO_URL = 'http://www.youtube.com/watch?v=QHnLmvDxGTY';
	var TEST_VIDEO_NAME = 'testVideo';
	var TEST_DESCRIPTION = 'professionalism in software engineering';
	var NEW_DESCRIPTION = 'professionalism in software';
var elm;
var scope;
var converted;
var compile;
var mockBackend;
beforeEach(module('com.spx.vidstash.video'));




beforeEach(inject(function($rootScope, $compile,$injector) {
    elm = angular.element('<dis > test </dis>')
    scope = $rootScope.$new();
    compile= $compile;
    scope.height="100px";
    scope.width ="200px";
	scope.video = new videoModule.Video(TEST_VIDEO_NAME,
			BOB_MARTIN_VIDEO_URL,
			NEW_DESCRIPTION);
	
	 mockBackend = $injector.get('$httpBackend');
	 mockBackend.expectGET('/base/main/webapp/js/components/video/template/displayVideoTemplate.html').respond("<iframe width='{{width}}' height='{{height}}'  src='{{trustedSrc}}' ></iframe>");
	
  }));

	it('can show a video', function() {
	    converted=compile(elm)(scope);
	    scope.$digest();
	    mockBackend.flush();
		 var width = elm.attr('width');
		 var height = elm.attr('height');
		 var src = elm.attr('src');
		 
		 expect(height).toEqual("100px")
		 expect(width).toEqual("200px")
		 expect(src).toEqual(BOB_MARTIN_VIDEO_URL)
		 
			
		
	});
	
	 
});
});