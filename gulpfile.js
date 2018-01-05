var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

gulp.task('jsBroswerify', function() {
  return browserify({ entries: ['./js/galactic-interface.js'] })
  .transform(babelify.configure({
    presets: ['es2015']
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
