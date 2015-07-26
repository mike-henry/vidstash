//TODO create VideoManager
describe('manage videos', function() {

	
	var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';
	var TEST_NAME = 'testName';
	var TEST_DESCRIPTION = 'professionalism in software engineering';



	it('can create a video', function() {
		var video = new com.spx.vidstash.Video(TEST_NAME,BOB_MARTIN_VIDEO_URL,TEST_DESCRIPTION);
		
        expect(video.getURL()).toEqual(BOB_MARTIN_VIDEO_URL);		
        expect(video.getName()).toEqual(TEST_NAME);		
        expect(video.getDescription()).toEqual(TEST_DESCRIPTION);		
		
	});

	
});