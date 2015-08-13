var gulp = require('gulp');
var tslint = require('gulp-tslint');
var config = require('./gulpfile.config')();

gulp.task('tslint', function() {
	return gulp.src(config.paths.scripts)
		.pipe(tslint(config.tslintOptions))
		.pipe(tslint.report('verbose'));
});

gulp.task('default', ['tslint']);