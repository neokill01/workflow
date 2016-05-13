'use strict'
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
require('colors');
let paths = {
  dest: "dist/",
  src: "src/",
  jade: ['src/jade/*.jade', '!src/jade/include/*']
};
gulp.task('jade', function () {
  gulp.src(paths.jade)
    .pipe($.plumber())
    .pipe($.jade({
        pretty: true
      })
    )
    .pipe(gulp.dest(paths.dest + "html"))
});

gulp.task('watch', function () {
  gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['jade'], function () {
  console.log('所有任务执行完成'.green);
});
