



var BOWER_ASSETS =  'assets/bower/';

require.config({
  baseUrl: '.',
  paths: {
	   'underscore': BOWER_ASSETS+ 'underscore/underscore',
       'angular': BOWER_ASSETS+ 'angular/angular',
       'util': 'js/components/util/util' ,
       'app':'js/app'
  },
  shim: {
    angular: { exports: 'angular' },
    app : ['underscore','angular' ]
  }
});

require(['./app']);

console.log("...initiated")








