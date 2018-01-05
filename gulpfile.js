var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var lib = require('bower-files')();

gulp.task('jsBroswerify', function() {
  return browserify({ entries: ['./js/galactic-interface.js'] })
    .transform(babelify.configure({
      presets: ['es2015']
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat(vendor.min.js))
    .pipe(uglify())
    .pipe(gulp.des('./build/js'));
});
