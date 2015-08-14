//TODO create VideoManager

define(['app'], function(app) {


  
	
	
describe('video model', function() {

	
	var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';
	var TEST_NAME = 'testName';
	var TEST_DESCRIPTION = 'professionalism in software engineering';
	var NEW_DESCRIPTION = 'professionalism in software';

	var videoModule = app.getVideoModule();

	it('can create a video', function() {
		
		
		var video = new videoModule.Video(TEST_NAME,BOB_MARTIN_VIDEO_URL,TEST_DESCRIPTION);
		
        expect(video.getURL()).toEqual(BOB_MARTIN_VIDEO_URL);		
        expect(video.getName()).toEqual(TEST_NAME);		
        expect(video.getDescription()).toEqual(TEST_DESCRIPTION);		
		
	});
	
	it(' a video can change description', function() {
		var video = new videoModule.Video(TEST_NAME,BOB_MARTIN_VIDEO_URL,TEST_DESCRIPTION);
		
				
		expect(video.getDescription()).toEqual(TEST_DESCRIPTION);		
		video.setDescription(NEW_DESCRIPTION);
		expect(video.getDescription()).toEqual(NEW_DESCRIPTION);		
		
	});

});
});