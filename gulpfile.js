var gulp: any = require('gulp');
var tslint: any = require('gulp-tslint');
var shell: any = require('gulp-shell');
var gulpCopy: any = require('gulp-copy');
var minifyHtml: any = require('gulp-minify-html');
var runseq: any = require('run-sequence');
var del: any = require('del');
var config: any = require('./gulpfile.config')();

gulp.task('buildrun', function(cb) {
   runseq('build', 'run', cb);
});

gulp.task('build', function(cb) {
    runseq('tslint', 'clean:dev', 'compile', 'copy', cb)
});

gulp.task('run', shell.task([
    'DEBUG=teambuilder:* npm start'
]));

gulp.task('clean:dev', function(cb) {
    del([
        'dev/**/*'
    ], cb);   
});

gulp.task('compile', ['compile:javascript', 'compile:html', 'compile:images', 'compile:styles'], function() {
    
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
            'jspm bundle-sfx ' + config.app + ' dev/client/app.js'
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
