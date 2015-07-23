'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'run-sequence']
});

var tsProject = $.typescript.createProject({
  target: 'es5',
  module: 'commonjs'
});

gulp.task('compile', ['inspect:js', 'inspect:ts'], function () {
  return gulp.src(path.join(conf.paths.e2e, '/**/*.ts'))
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(conf.paths.tmp));
});

gulp.task('inspect:ts', function() {
  return gulp.src(path.join(conf.paths.e2e, '/**/*.ts'))
    .pipe($.tslint())
    .pipe($.tslint.report('prose', {emitError: false}));
});

gulp.task('inspect:js', function() {
  return gulp.src(path.join(conf.paths.gulp, '/**/*.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe($.jscs());
});

gulp.task('build', function() {
  $.runSequence('clean', 'tsd:install', 'compile');
});

gulp.task('clean', ['tsd:purge'], function (done) {
  $.del([path.join(conf.paths.tmp, '/')], done);
});
