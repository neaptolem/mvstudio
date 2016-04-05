var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var htmlmin=require('gulp-htmlmin');

gulp.task('buildLib', function() {
  gulp.src(require('./dependencies.json').dependencies)
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./app/js'));
});

gulp.task('connect', function() {
  connect.server({
    root:'app'
  });
});

gulp.task('jsUglify', function() {
  return gulp.src('./js/*.js')
  .pipe(concat('build.js'))
  .pipe(gulp.dest('./app/js'));
});

gulp.task('templates', function() {
  return gulp.src('./index.html')
  .pipe(gulp.dest('./app'));
});

gulp.task('clean', function () {
  return gulp.src('app')
    .pipe(clean());
});
gulp.task('templatesDirect', function() {
  return gulp.src(['./views/**/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./app/views'));
});
gulp.task('add_image',function(){
  return gulp.src(['./img/**/*.*'])
  .pipe(gulp.dest('./app/img'));
});
gulp.task('add_css',function(){
  return gulp.src(['./css/*.css'])
  .pipe(gulp.dest('./app/css'));
});
gulp.task('default', ['clean'], function () {
  gulp.start('buildLib','add_css','jsUglify','templates','templatesDirect','add_image','connect');
});
