//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _             = require('lodash');
const gulp          = require('gulp');
const livereload    = require('gulp-livereload');
const webpack       = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const nodemon       = require('gulp-nodemon');
const concat        = require('gulp-concat');
const merge         = require('merge-stream');
const order         = require("gulp-order");
const less          = require('gulp-less');
const open          = require('gulp-open');

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

gulp.task('compile-css', (cb) => {

    let cssStream = gulp.src('src/css/*.css')
        .pipe(concat("vendors.css"));

    let reload = function(){
        livereload.reload();
        cb();
    };

    lessStream = gulp.src('src/css/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'));

    // It is important to order the concat so our style will be at the moment 
    // and will take into effect.

    merge(cssStream, lessStream)
        .pipe(order([
            "vendors.css",
            "style.css",
        ]))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public')).on('end', reload);

});


gulp.task('compile-js', (cb) => {

    let config = _.assignIn(webpackConfig, {
        mode: 'development'
    });

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src(__filename)
        .pipe(webpack({
            config: config
        }))
        .pipe(gulp.dest('public')).on('end', reload);
});

gulp.task('reload', () => {
    livereload.reload();
});

// Open browser, using default browser.

gulp.task('browser', () => {
    return gulp.src(__filename)
    .pipe(open({
        uri: 'http://localhost:3000'
    }));
});

gulp.task('start-server', () => {
    nodemon({
        script: 'server.js',
        ext:    'js html',
        watch: ['server.js'],
        env:  { 'NODE_ENV': 'development' }
    });

    livereload({ start: true });
});

gulp.task('default', [
    'compile-js', 
    'compile-css', 
    'start-server',
    'browser'
]);

//-----------------------------------------------------------------------------//
// Watch changes
//-----------------------------------------------------------------------------//

gulp.watch('src/js/**/*.js', ['compile-js']);
gulp.watch('src/css/**',  ['compile-css']);

//-----------------------------------------------------------------------------//