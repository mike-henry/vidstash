
define(
		[ 'angular-mocks', 
				'app' ],
		function(mocks,   app) {
			describe(
					'manage session',
					function() {

						var sessionManagerService;
						var mockBackend;

						beforeEach( module('com.spx.session'));

						beforeEach(inject(function(sessionManager,$injector) {
							 sessionManagerService = sessionManager;
							 mockBackend = $injector.get('$httpBackend');
							
						}));

						it('after init session reports Logged out', function() {
							sessionManagerService.start();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(false);

						});
						
						it('after init and Successful Login session reports Logged in', function() {
							sessionManagerService.start();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST('/login').respond(200,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(true);
							expect(sessionManagerService.getUserName()).toEqual('test');
							
						});
						
						it('after init and unSuccessful Login session reports Logged out', function() {
							sessionManagerService.start();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST('/login').respond(403,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(false);

						});
						
						it('after init and Successful Login session and Logout reports Logged out', function() {
							sessionManagerService.start();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST('/login').respond(200,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(true);
							expect(sessionManagerService.getUserName()).toEqual('test');
							 mockBackend.expectPOST('/logout').respond(200,sessionData);
							sessionManagerService.logout();
							mockBackend.flush();
							expect(sessionManagerService.isLoggedIn()).toEqual(false);
							

						});


					});

		});