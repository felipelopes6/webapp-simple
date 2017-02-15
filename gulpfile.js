var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

// task to connect with server-livereload (gulp-connect)
gulp.task('connect', function() {
  connect.server({
    root: '../webapp-simple',
    port: 7000,
    livereload: true
  });
});

// task watch html
gulp.task('html', function() {
  gulp.src('*.html')
      .pipe(connect.reload());
});

// task watch scss
gulp.task('scss', function() {
  gulp.src('assets/scss/**/*.scss')     
      .pipe(sass())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets/css/'))
      .pipe(connect.reload()); 
});

// task watch files change
gulp.task('watch', function() {
  gulp.watch(['*.html'], ['html']),
  gulp.watch('assets/scss/*.scss',['scss']);
  gulp.watch('assets/scss/**/*.scss', ['scss'])
});

// Task to run server
gulp.task('serve', ['connect', 'watch']);