'use strict';

var $document = $(document),
    $window = $(window),
    $desktop = $('.desktop'),
    paths = [];

$(function() {
    svg4everybody();

    $('.js-downloadFile').on('change', function() {
        var file = $(this)[0].files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function(event) {
                var tree = '',
                		trunk = ~file.name.indexOf('.json') ?
                        JSON.parse(event.target.result) :
                        eval("(" + event.target.result + ")");

                paths = [];
                tree = buildTree(trunk);
                findAllPath(trunk, '');

                var pathsLength = paths.length;
                for (var i = 0; i < pathsLength; i++) {
                    paths[i] = '<p>' + paths[i] + '</p>';

                    $desktop.append(paths[i]);
                    if (i == pathsLength - 1) {
                			$desktop.append('<p>================================</p>');
                    }
                }
                $('.empty-tree').text('Очистить дерево проектов').addClass('cursor-pointer');
                $('.tree-layout').append( '<div class="tree"><ul><li class="tree__node"><div class="tree__expand"></div><div class="tree__node-ttl bold">' + file.name + '</div>' + tree + '</li></ul>' );
            };

            reader.onerror = function(event) {
                console.error("Файл не может быть прочитан! Ошибка " + event.target.error.code);
            };

            reader.readAsText(file);
        }

        return false;
    });

    $document.on('click', '.empty-tree', function() {
        $('.tree-layout').html('<div class="empty-tree">Файлы не загружены</div>');
        $desktop.html('');
        $('.js-downloadFile').val('');
    });

    $document.on('click', '.tree__expand', function() {
        $(this).siblings('ul').toggle();
        $(this).parent().toggleClass('is-open');
    });

    $document.on('click', '.js-openDialogAjax', function(){
        var $this = $(this),
            title = $this.data('title'),
            cssClass = $this.data('cssclass'),
            hrefID = $this.attr('href').split('#'),
            url = '/templates/block/'+hrefID[1]+'.tpl.php';
        $.ajax({
            url: url,
            success: function(data){
                MyCMSDialog.closeAll();
                MyCMSDialog.open({
                    'title': title,
                    'cssClass': cssClass,
                    'content': data,
                    'open': function(){
                        $('.js-phoneMask').mask("+7 (999)-999-99-99");
                    }
                });
            }
        });
        return false;
    });

    $document.on('click', '.js-closeDialog', function(){
        MyCMSDialog.closeAll();
        return false;
    });
});

/*--- Task 1 ---*/
function buildTree(obj, i) {
    var query = '';

    if( Object.keys(obj) ) {
        var i = i ? i : 0;

        query += '<ul>';
        $.each(obj, function(key, item) {
            if (typeof item === 'object') {
                if (key && Object.keys(item).length) {
                    query += '<li class="tree__node"><div class="tree__expand"></div><div class="tree__node-ttl">' + key + '</div>' + buildTree(item, (i + 1)) + '</li>';
                } else if (key) {
                    query += '<li class="tree__node"><div class="tree__leaf"></div><div class="tree__node-ttl">' + key + '</div></li>';
                }
            } else {
                if (key) {
                    query += '<li class="tree__node"><div class="tree__leaf"></div><div class="tree__node-ttl' + (obj[key] == 1 ? ' red' : '') + '">' + key + '</div></li>';
                }
            }
        });
        query += '</ul>';
    }

    return query;
}

/*--- Task 2 ---*/
function findAllPath(obj, str) {
    $.each(obj, function(key) {
        if (typeof obj[key] === 'object') {
            findAllPath(obj[key], str ? str + ' > ' + key : key);
        } else {
            if (obj[key] == 1)
                paths.push( str ? str + ' > ' + key : key );
        }
    });
}