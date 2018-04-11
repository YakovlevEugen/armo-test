'use strict';

var $document = $(document),
    $desktop = $('.desktop'),
    paths = [];

$(function() {
    var trunk = {
        listItem1: 1,
        subList: {
            subSubList: {
                subSubListItem1: 1,
                subSubListItem2: 'green'
            },
            subListItem1: 'blue'
        },
        subItem: {
            subSubList: {
                subSubListItem1: 1,
                subSubListItem2: {
                    'green': 1
                }
            },
            subListItem1: 'blue'
        }
    };

    var tree = buildTree(trunk);
    findAllPath(trunk, '');

    for (var i = 0; i < paths.length; i++) {
        paths[i] = '<p>' + paths[i] + '</p>';
        $desktop.append(paths[i]);
    }
    $('.empty-tree').text('Очистить дерево проектов').addClass('cursor-pointer');
    $('.tree-layout').append( '<div class="tree"><ul><li class="tree__node"><div class="tree__expand"></div><div class="tree__node-ttl bold">Дерево статического рендеринга</div>' + tree + '</li></ul>' );

    $document.on('click', '.empty-tree', function() {
        $('.tree-layout').html('<div class="empty-tree">Файлы не загружены</div>');
        $desktop.html('');
        $('.js-downloadFile').val('');
    });

    $document.on('click', '.tree__expand', function() {
        $(this).siblings('ul').toggle();
        $(this).parent().toggleClass('is-open');
    });
});

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