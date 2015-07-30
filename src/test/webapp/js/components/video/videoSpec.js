//TODO create VideoManager

define(['main/webapp/js/components/video/model/Video'], function(video) {
//	define([''], function() {

  
	
	
describe('manage videos', function() {

	
	var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';
	var TEST_NAME = 'testName';
	var TEST_DESCRIPTION = 'professionalism in software engineering';
	var NEW_DESCRIPTION = 'professionalism in software';



	it('can create a video', function() {
		
		
		
		var video = new com.spx.vidstash.Video(TEST_NAME,BOB_MARTIN_VIDEO_URL,TEST_DESCRIPTION);
		
        expect(video.getURL()).toEqual(BOB_MARTIN_VIDEO_URL);		
        expect(video.getName()).toEqual(TEST_NAME);		
        expect(video.getDescription()).toEqual(TEST_DESCRIPTION);		
		
	});
	
	it(' a video can change description', function() {
		var video = new com.spx.vidstash.Video(TEST_NAME,BOB_MARTIN_VIDEO_URL,TEST_DESCRIPTION);
		
				
		expect(video.getDescription()).toEqual(TEST_DESCRIPTION);		
		video.setDescription(NEW_DESCRIPTION);
		expect(video.getDescription()).toEqual(NEW_DESCRIPTION);		
		
	});

});
});