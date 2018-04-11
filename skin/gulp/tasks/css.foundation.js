'use strict';

module.exports = function() {
    $.gulp.task('css.foundation', function() {
        return $.gulp.src($.path.cssFoundation)
            .pipe($.gp.concat('foundation.css'))
            .pipe($.gp.cleanCss({compatibility: 'ie8'}))
            .pipe($.gulp.dest('styles'));
    })
};