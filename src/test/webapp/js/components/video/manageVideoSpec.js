//TODO create VideoManager
describe('manage videos', function() {

	var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';

	var videoManagerService;

	beforeEach(module('com.spx.vidstash.video'));

	beforeEach(inject(function(videoManager) {
		videoManagerService = videoManager;
		expect(videoManagerService).toBeDefined();

	}));

	it('admin user can add a video URL',
			function() {
				// expect to be able to find the video that has been added
				var video = new com.spx.vidstash.Video('testVideo',BOB_MARTIN_VIDEO_URL,'professionalism in software engineering');
				
				videoManagerService.addVideo(video);
				
				
				

			});

	it('admin user can remove a video URL ', function() {
		// expect path to equal '/dashboard'

	});

});