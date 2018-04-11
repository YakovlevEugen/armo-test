'use strict';

module.exports = function() {
    $.gulp.task('render', function() {
        return $.gulp.src('../html/render.html', {read: false})
            .pipe($.htmlrender.render())
            .pipe($.gulp.dest('dist'));
    })
};