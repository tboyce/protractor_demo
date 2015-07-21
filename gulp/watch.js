'use strict';

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

gulp.task('watch', ['compile'], function () {

  var paths = [
    path.join(conf.paths.e2e, '/**/*.ts')
  ];

  gulp.watch(paths, ['compile']);

});
