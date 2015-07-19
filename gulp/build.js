'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});

var tsProject = $.typescript.createProject({
  target: 'es5',
  module: 'commonjs'
});

gulp.task('build', ['tsd:install'], function () {
  return gulp.src(path.join(conf.paths.e2e, '/**/*.ts'))
    .pipe($.sourcemaps.init())
    .pipe($.tslint())
    .pipe($.tslint.report('prose', { emitError: false }))
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(conf.paths.tmp))
});

gulp.task('clean', ['tsd:purge'], function (done) {
  $.del([path.join(conf.paths.tmp, '/')], done);
});
