var gulp = require("gulp");
var protractor = require("gulp-protractor");

gulp.task('update-webdriver', function (cb) {
  protractor.webdriver_update({browsers: ['chrome']}, cb);
});

gulp.task('test', ['update-webdriver'], function () {
  gulp.src(["features/*.feature"])
    .pipe(protractor.protractor({
      configFile: "protractor.conf.js"
    }));
});

