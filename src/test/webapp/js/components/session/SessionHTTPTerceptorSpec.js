
define(
		[ 'angular-mocks', 
				'app' ],
		function(mocks,   app) {
			
			var LOGIN_URL = '/vidstash/services/session/login';
			var LOGOUT_URL = '/vidstash/services/session/logout';
			
			
			
			describe(
					'session request handling',
					function() {

						var sessionManagerService;
						var mockBackend;

						beforeEach( module('com.spx.session'));

						beforeEach(inject(function(sessionManager,$injector) {
							 sessionManagerService = sessionManager;
							 mockBackend = $injector.get('$httpBackend');
							
						}));

	
						
						it('after init and Successful Login Request have session in the Header', function() {
							sessionManagerService.init();
							var sessionData = {session:'00001'}; 
						    mockBackend.expectPOST(LOGIN_URL).respond(200,sessionData);
							sessionManagerService.login('test','password');
							mockBackend.flush();
							console.log('test not implimented');

							
						});
						
					
	

					});

		});