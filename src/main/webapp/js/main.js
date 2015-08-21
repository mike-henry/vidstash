



var BOWER_ASSETS =  'assets/bower/';

require.config({
  baseUrl: '.',
  paths: {
	   'underscore': BOWER_ASSETS+ 'underscore/underscore',
       'angular': BOWER_ASSETS+ 'angular/angular',
       'ngroute': BOWER_ASSETS+ 'angular-route/angular-route',
       'bootstrap': BOWER_ASSETS+ 'angular-bootstrap/ui-bootstrap',
       'util': 'js/components/util/util' ,
       'app':'js/app'
  },
  shim: {
    angular: { exports: 'angular' },
    'bootstrap': ['angular'],
    'ngroute':['angular'],
    app : ['underscore','angular','ngroute','bootstrap' ]
  }
});

require(['./app']);

console.log("...initiated")








