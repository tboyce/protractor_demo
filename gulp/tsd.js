'use strict';

var gulp = require('gulp');
var tsd = require('tsd');

var tsdJson = 'tsd.json';
var tsdApi = new tsd.getAPI(tsdJson);

gulp.task('tsd:install', function () {
  var options = new tsd.Options();
  options.overwriteFiles = true;
  options.saveBundle = true;

  return tsdApi.readConfig()
    .then(function () {
      return tsdApi.reinstall(options);
    });
});

gulp.task('tsd:purge', function () {
  return tsdApi.purge(true, true);
});

gulp.task('tsd', ['tsd:install']);
