/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
       destDir: 'assets'
  });
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js');
  app.import('bower_components/perfect-scrollbar/css/perfect-scrollbar.css');

  return app.toTree();
};
