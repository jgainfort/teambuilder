var gulp = require('gulp');
var tslint = require('gulp-tslint');
var shell = require('gulp-shell');
var gulpCopy = require('gulp-copy');
var minifyHtml = require('gulp-minify-html');
var runseq = require('run-sequence');
var del = require('del');
var config = require('./gulpfile.config')();

gulp.task('buildrun', function(cb) {
   runseq('build:dev', 'run', cb);
});

gulp.task('build:dev', function(cb) {
    runseq('tslint', 'clean:dev', 'compile', cb)
});

gulp.task('run', shell.task([
    'DEBUG=teambuilder:* npm start'
]));

gulp.task('clean:dev', function(cb) {
    del([
        'dev/**/*'
    ], cb);
});

gulp.task('compile', ['compile:javascript'], function() {

});

gulp.task('copy', ['copy:libs'], function() {

});

gulp.task('copy:libs', function() {
    return gulp.src(config.paths.libs)
        .pipe(gulpCopy('dev', { prefix: 1 }));
});

gulp.task('compile:javascript', function() {
    return gulp.src(config.app, { read: false })
        .pipe(shell([
            'jspm install'
        ]))
        .pipe(shell([
            'jspm bundle ' + config.app + ' src/client/build.js'
        ]));
});

gulp.task('compile:html', function() {
    return gulp.src([config.paths.html, config.paths.jspmIgnore])
        .pipe(gulpCopy('dev', { prefix: 1 }))
        .pipe(minifyHtml({
            quotes: true
        }))
        .pipe(gulp.dest('dev'));
});

gulp.task('compile:images', function() {

});

gulp.task('compile:styles', function() {

});

gulp.task('tslint', function() {
	return gulp.src(config.paths.ts)
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});

gulp.task('default', ['buildrun']);
