'use strict';

module.exports = function() {
    $.gulp.task('png.sprite', function() {
        var spriteData = $.gulp.src('images/png-sprite/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: '_png-sprite.scss',
                cssTemplate: 'styles/scss/base/sprite_templates/png-sprite-template.scss.handlebars'
            }));

        // Pipe image stream through image optimizer and onto disk
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin`
            .pipe($.buffer())
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('images/'));

        // Pipe CSS stream through CSS optimizer and onto disk
        var cssStream = spriteData.css
            .pipe($.gulp.dest('styles/scss/base/sprite/'));

        // Return a merged stream to handle both `end` events
        return $.merge(imgStream, cssStream);
    })
};