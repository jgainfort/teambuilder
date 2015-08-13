var gulp = require('gulp');
var server = require('gulp-express');
var config = require('./gulpfile.config')();

gulp.task('server', function() {
	server.run([config.serverStart]);
})

gulp.task('default', ['server']);