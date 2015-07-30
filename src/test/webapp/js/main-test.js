
//TODO  move this monstrosity
var com = com || {};

(function() {
	com.spx = com.spx || {};
	com.spx.vidstash = com.spx.vidstash || {};

})()


var tests = [];   // Loads the files mentioned in Karma config



var _MAIN = '/base/main/webapp/'
var BOWER_ASSETS = _MAIN + 'assets/bower/';

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file) || /spec\.js$/.test(file) ) {
      tests.push(file);
    }
  }
}



requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'underscore': BOWER_ASSETS+ 'underscore/underscore',
        'angular': BOWER_ASSETS+ 'angular/angular',
        'angular-mocks': BOWER_ASSETS+ 'angular-mocks/angular-mocks',
        'root':_MAIN ,
         'app':'main/webapp/js/app'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
       
    
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

require(['app']);
