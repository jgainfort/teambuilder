/// <reference path="typings/tsd.d.ts" />

var gulp: any = require('gulp');
var tslint: any = require('gulp-tslint');
var shell: any = require('gulp-shell');
var gulpCopy: any = require('gulp-copy');
var minifyHtml: any = require('gulp-minify-html');
var runseq: any = require('run-sequence');
var del: any = require('del');
var config: any = require('./gulpfile.config')();

gulp.task('buildrun', (callback: Function) => {
   runseq('build', 'run', callback);
});

gulp.task('build', (callback: Function) => {
    runseq('tslint', 'clean:dev', 'compile', 'copy', callback)
});

gulp.task('run', shell.task([
    'DEBUG=teambuilder:* npm start'
]));

gulp.task('clean:dev', (cb: Function) => {
    del([
        'dev/**/*'
    ], cb);   
});

gulp.task('compile', ['compile:javascript', 'compile:html', 'compile:images', 'compile:styles'], () => {
    
});

gulp.task('copy', ['copy:libs'], () => {
 
});

gulp.task('copy:libs', () => {
    return gulp.src(config.paths.libs)
        .pipe(gulpCopy('dev', { prefix: 1 }));
});

gulp.task('compile:javascript', () => {
    return gulp.src(config.app, { read: false })
        .pipe(shell([
            'jspm install'
        ]))
        .pipe(shell([
            'jspm bundle-sfx ' + config.app + ' dev/client/app.js'
        ]));
});

gulp.task('compile:html', () => {
    return gulp.src([config.paths.html, config.paths.jspmIgnore])
        .pipe(gulpCopy('dev', { prefix: 1 }))
        .pipe(minifyHtml({
            quotes: true
        }))
        .pipe(gulp.dest('dev'));
});

gulp.task('compile:images', () => {
    
});

gulp.task('compile:styles', () => {
    
});

gulp.task('tslint', () => {
	return gulp.src(config.paths.ts)
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});

gulp.task('default', ['buildrun']);
