//TODO create VideoManager

define(
		[ 'angular-mocks', 'main/webapp/js/components/video/videoModule',
				'app' ],
		function(mocks, videoModule,  app) {
			describe(
					'manage videos',
					function() {

						var BOB_MARTIN_VIDEO_URL = 'https://www.youtube.com/watch?v=QHnLmvDxGTY';
						var TEST_VIDEO_NAME = 'testVideo';

						var videoManagerService;

						beforeEach(module('com.spx.vidstash.video'));

						beforeEach(inject(function(videoManager) {
							videoManagerService = videoManager;
							expect(videoManagerService).toBeDefined();

						}));

						it('admin user can add a video URL', function() {
							// expect to be able to find the video that has been
							// added
							var video = new videoModule.Video(TEST_VIDEO_NAME,
									BOB_MARTIN_VIDEO_URL,
									'professionalism in software engineering');

							videoManagerService.addVideo(video);

							var foundVideo = videoManagerService
									.findVideoByName(TEST_VIDEO_NAME);
							// TODO fix underscore
							expect(_.isMatch(video, foundVideo)).toBe(true);

						});

						it('admin user can remove a video URL ', function() {
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