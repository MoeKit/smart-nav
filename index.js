var $ = require('jquery'),
    Eventor = require('eventor'),
    $window = $(window),
    $doc = $(document);


var SmartNav = function(option) {
    var $target = $(option.target);
    // get top
    var oTop = option.top || parseInt($target.css('top'), 10);
    var sticky = option.sticky || false;

    var $column = $(option.column),
        columnOffset = option.columnOffset || 0;

    var fixSidebar = function(onresize) {
        // 屏幕宽度
        var width = $(window).width();
        var getRight = function() {
            return 10;
        };
        var absoluteTop = $column.offset().top + columnOffset + $column.height();
        var smallestOffset = sticky ? $target.offset().top : oTop + $target.height();
        var middleOffset = $column.offset().top + columnOffset + $column.height() - $target.height() - 0;
        var biggestOffset = $doc.height() - $window.height();

        var handleBar = function() {
            var top = $window.scrollTop();
            if (top <= smallestOffset) {
                if (!option.sticky) {
                    $target.css({
                        position: 'fixed',
                        top: oTop,
                        right: getRight()
                    });
                } else {
                    // not support sticky now
                }
            } else if (top > smallestOffset && top < middleOffset) {
                if ($target.css('position') === 'absolute') {
                    $target.css({
                        position: 'fixed',
                        top: oTop,
                        right: getRight()
                    });
                } else {
                    $target.css({
                        position: 'fixed',
                        top: oTop,
                        right: getRight()
                    });
                }
            } else if (top > middleOffset) {
                $target.css({
                    position: 'absolute',
                    right: getRight(),
                    top: absoluteTop - $target.height()
                });
            }
        };

        if (onresize) {
            handleBar();
        }

        $window.scroll(handleBar);
    }

    setTimeout(function() {
        fixSidebar();
    }, 1000);
    $window.resize(function() {
        fixSidebar(true);
    });
    setTimeout(function() {
        $(window).trigger('scroll');
    }, 1000)
};

Eventor.mixTo(SmartNav);
module.exports = SmartNav;