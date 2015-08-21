
define(
		[ 'angular-mocks', 
				'app' ],
		function(mocks,   app) {
			describe(
					'manage videos',
					function() {

						var BOB_MARTIN_VIDEO_URL = 'http://www.youtube.com/embed?v=QHnLmvDxGTY';
						var TEST_VIDEO_NAME = 'testVideo';

						var videoManagerService;
					
						var videoModule = app.getVideoModule();

						beforeEach( module('com.spx.vidstash.video'));

						beforeEach(inject(function(videoManager) {
							videoManagerService = videoManager;
							expect(videoManagerService).toBeDefined();

						}));

						it('anyone can add a video URL', function() {
							// expect to be able to find the video that has been
							// added
							var videoModule = app.getVideoModule();
							
							var video = new videoModule.Video(TEST_VIDEO_NAME,
									BOB_MARTIN_VIDEO_URL,
									'professionalism in software engineering');

							videoManagerService.addVideo(video);

							var foundVideo = videoManagerService
									.findVideoByName(TEST_VIDEO_NAME);
							expect(_.isMatch(video, foundVideo)).toBe(true);

						});

						it('anyone can remove a video URL ', function() {
							// expect path to equal '/dashboard'
							var video = new videoModule.Video(TEST_VIDEO_NAME,
									BOB_MARTIN_VIDEO_URL,
									'professionalism in software engineering');
							videoManagerService.addVideo(video);

							var foundVideo = videoManagerService
									.removeVideoByName(TEST_VIDEO_NAME);
							expect(foundVideo).not.toBeDefined();

						});

					});

		});