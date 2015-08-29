



var tests = [];   // Loads the files mentioned in Karma config
 


var _MAIN = 'main/webapp/'
var BOWER_ASSETS =  'assets/bower/';

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file) || /spec\.js$/.test(file) ) {
      tests.push(file);
    }
  }
}



require.config({
    // Karma serves files from '/base'
    baseUrl: '/base/main/webapp/',

    paths: {
        'underscore': BOWER_ASSETS+ 'underscore/underscore',
        'angular': BOWER_ASSETS+ 'angular/angular',
        'ngroute': BOWER_ASSETS+ 'angular-route/angular-route',
        'angular-mocks': BOWER_ASSETS+ 'angular-mocks/angular-mocks',
        'bootstrap': BOWER_ASSETS+ 'angular-bootstrap/ui-bootstrap',
        'ngCookies': BOWER_ASSETS+ 'angular-cookies/angular-cookies',
        'localstorage': BOWER_ASSETS+ 'ngStorage/src/angularLocalStorage',
        'util':  'js/components/util/util',
        'root':_MAIN ,
         'app':'js/app'
    },

    shim: {
        'underscore': {
        	
            exports: '_'
        },
        'angular-mocks': ['angular'],
        'ngroute': ['angular'],
        'bootstrap': ['angular'],
        'ngCookies':['angular'],
        'localstorage': ['angular','ngCookies'],
        'app': ['angular','underscore','util','bootstrap','ngroute','localstorage']        
        
       
    
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

//require(['app']);
