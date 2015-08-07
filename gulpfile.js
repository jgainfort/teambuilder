var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

var PATHS = {
	src: {
		js: 'src/client/**/*.js',
		html: 'src/client/**/*.html'
	},
	lib: [
		'node_modules/angular2/node_modues/traceur/bin/traceur-runtime.js',
		'node_modules/systemjs/dist/system.js',
		'node_modules/engine.io-client/engine.io.js'
	]
}

gulp.task('clean', function(done) {
	del(['dist'], done);
});

gulp.task('js', function() {
	return gulp.src(PATHS.src.js)
		.pipe(rename({extname: ''}))
		.pipe(plumber())
		.pipe(traceur({
			modules: 'instantiate',
			moduleName: true,
			annotations: true,
			types: true,
			memberVariables: true
		}))
		.pipe(rename({exname: '.js'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
	return gulp.src(PATHS.src.html)
		.pipe(gulp.dest('dist'));
});

gulp.task('libs', ['angular2'], function() {
	var size = require('gulp-size');
	return gulp.src(PATHS.lib)
		.pipe(size({showFiles:true, gzip:true}))
		.pipe(gulp.dest('dist/lib'));
});

gulp.task('angular2', function() {
	var buildConfig = {
		paths: {
			'angular2/*': 'node_modules/angular2/es6/prod/*.js',
			'rx': 'node_modules/angular2/node_modules/rx/dist/rx.js'
		},
		meta: {
			'rx': {
				format: 'cjs'
			}
		}
	};
	
	var Builder = require('systemjs-builder');
	var builder = new Builder(buildConfig);
	
	return builder.build('angular2/angular2', 'dist/lib/angular2.js', {});
});

gulp.task('serve-dev', function() {
	
});

gulp.task('default', ['clean', 'js', 'html', 'libs']);