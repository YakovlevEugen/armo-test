'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js')
    },
    gulp: require('gulp'),
    argv: require('yargs').argv,
    merge: require('merge-stream'),
    buffer: require('vinyl-buffer'),
    htmlrender: require('gulp-htmlrender'),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel(
        'css.foundation',
        'js.foundation',
        'svg.sprite',
        'png.sprite',
        'sass',
        'render'
    ),
    $.gulp.parallel(
        'watch'
    )
));