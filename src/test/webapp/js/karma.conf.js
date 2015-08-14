// Karma configuration
// Generated on Sat Jul 25 2015 15:29:59 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
	
  
  var TEST = './test/webapp/';
  var MAIN = './main/webapp/';	  
  

  var BOWER_ASSETS = MAIN + 'assets/bower/';
  
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath:  '../../../', 


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
   // frameworks: ['jasmine'],
     frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser   ... false  as we using requirejs
    files: [
           
           
      {pattern: BOWER_ASSETS + 'underscore/underscore.js', included: false},
      {pattern: BOWER_ASSETS + 'angular/angular.js', included: false},
      {pattern: BOWER_ASSETS + 'angular/angular.js', included: false},
      {pattern: BOWER_ASSETS + 'angular-mocks/angular-mocks.js', included: false},
      {pattern: MAIN+'js/app.js', included:false},
      TEST+'js/main-test.js',
      {pattern: MAIN+'js/**/*.js', included: false},
      {pattern: MAIN+'js/**/*.js', included: false},
      {pattern: MAIN+'js/components/video/VideoModule.js', included: false},
     
  //  {pattern: '**/*.js', included: false},
 //   {pattern: '../main/webapp/components/*.js', included: false},
      {pattern: TEST+'**/*Spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [
       '../requirejs/**/*.js',  
       'test/webapp/js/node_modules/**/*Spec.js',  //exclude the examples 
       'test/webapp/js/node_modules/**/*spec.js',
       '**/*/js/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO || config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome' ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
