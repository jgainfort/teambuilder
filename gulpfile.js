var gulp = require('gulp');
var tslint = require('gulp-tslint');
var del = require('del');
var inject = require('gulp-inject')
var size = require('gulp-size');
var config = require('./gulpfile.config')();

gulp.task('tslint', function() {
	return gulp.src(config.paths.ts)
		.pipe(tslint(config.tslintOptions))
		.pipe(tslint.report('verbose'));
});

gulp.task('clean:dist', function() {
   del([
       'dist/**/*',
       config.devPaths.libs
   ]);
});

gulp.task('copy:devLibs', ['clean:dist'], function() {
   return gulp.src(config.paths.libs)
       .pipe(size({showFiles:true, gzip:true}))
       .pipe(gulp.dest(config.devPaths.libs));
});

gulp.task('inject', ['copy:devLibs'], function() {
    var target = gulp.src(config.html);
    var sources = gulp.src(config.devPaths.libs + '/*.js', {read: false});
    
    return target.pipe(inject(sources))
        .pipe(gulp.dest(config.client));
})

gulp.task('default', ['tslint', 'inject']);