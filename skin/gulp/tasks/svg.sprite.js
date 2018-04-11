'use strict';

module.exports = function() {
    $.gulp.task('svg.sprite', function() {
        return $.gulp.src('images/svg-sprite/*.svg')
            // minify svg
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            // remove all fill, style and stroke declarations in out shapes
            .pipe($.gp.cheerio({
                run: function ($) {
                    //$('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            // cheerio plugin create unnecessary string '&gt;', so replace it.
            .pipe($.gp.replace('&gt;', '>'))
            // build svg sprite
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "../svg-sprite.svg",
                        render: {
                            scss: {
                                dest:'../../styles/scss/base/sprite/_svg-sprite.scss',
                                template: "styles/scss/base/sprite_templates/svg-sprite-template.scss"
                            }
                        }
                    }
                }
            }))
            .pipe($.gulp.dest('images/'));
    })
};
