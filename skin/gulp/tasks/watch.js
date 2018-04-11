'use strict';

module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('js/src/*.js', $.gulp.series('js.foundation'));
        $.gulp.watch('styles/scss/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('images/svg-sprite/*.svg', $.gulp.series('svg.sprite'));
        $.gulp.watch('images/png-sprite/*.png', $.gulp.series('png.sprite'));
        $.gulp.watch(['src/**/*.html'], $.gulp.series('render'));
    });
};