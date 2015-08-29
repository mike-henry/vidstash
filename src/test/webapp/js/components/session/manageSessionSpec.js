
define(
		[ 'angular-mocks', 
				'app' ],
		function(mocks,   app) {
			
			var LOGIN_URL = '/vidstash/services/session/login';
			var LOGOUT_URL = '/vidstash/services/session/logout';
			
			
			
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
							sessionManagerService.init();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(false);

						});
						
						it('after init and Successful Login session reports Logged in', function() {
							sessionManagerService.init();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST(LOGIN_URL).respond(200,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(true);
							expect(sessionManagerService.getUserName()).toEqual('test');
							
						});
						
						it('after init and unSuccessful Login session reports Logged out', function() {
							sessionManagerService.init();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST(LOGIN_URL).respond(403,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(false);

						});
						
						it('after init and Successful Login session and Logout reports Logged out', function() {
							sessionManagerService.init();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST(LOGIN_URL).respond(200,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							var isLoggedin=sessionManagerService.isLoggedIn();
							expect(isLoggedin).toEqual(true);
							expect(sessionManagerService.getUserName()).toEqual('test');
							mockBackend.expectPOST(LOGOUT_URL).respond(200,sessionData);
							sessionManagerService.logout();
							mockBackend.flush();
							expect(sessionManagerService.isLoggedIn()).toEqual(false);
						});


					});

		});