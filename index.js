var $ = require('jquery'),
    Eventor = require('eventor'),
    $window = $(window),
    $doc = $(document);

var SmartNav = function(option) {
    var $target = $(option.target),
        targetHeight = $target.height();
    this.mode = option.mode || $target.css('top') !== 'auto' ? 'top' : 'bottom';
    // column edge
    this.edge = option.ColumnEdge || 'bottom';
    // get top
    var oTop = option.top || this.mode === 'top' ? parseInt($target.css('top'), 10) : ($window.height() - parseInt($target.css('bottom'), 10) - targetHeight);
    var oriTop = $target.css('top');
    var oriBottom = parseInt($target.css('bottom'), 10);
    var sticky = option.sticky || false;
    var right = option.right || parseInt($target.css('right'), 10);
    var _this = this;
    var $column = $(option.column),
        columnOffset = option.columnOffset || 0;

    var fixSidebar = function(onresize) {
        var width = $(window).width();
        var getRight = function() {
            return right;
        };
        var absoluteTop = $column.offset().top + columnOffset + $column.height();
        var smallestOffset = sticky ? $target.offset().top : oTop + $target.height();
        var middleOffset = $column.offset().top + columnOffset + $column.height() - $target.height() - oTop;
        var biggestOffset = $doc.height() - $window.height();
        var setOriginalStyle = function() {
            $target.css({
                top: oriTop,
                bottom: oriBottom
            });
        };
        var handleBar = function() {
            var top = $window.scrollTop();
            if (_this.mode === 'bottom') {
                var offset = $(window).height() - ($column.height() - ($window.scrollTop() - $column.offset().top))-option.columnOffset;
                if (offset < 100) {
                    setOriginalStyle();
                } else {
                    $target.css({
                        position: 'fixed',
                        bottom: offset
                    });
                }
                return;
            }
            if (top <= smallestOffset) {
                if (!option.sticky) {

                    $target.css({
                        position: 'fixed',
                    });
                    setOriginalStyle();
                } else {
                    // not support sticky now
                }
            } else if (top > smallestOffset && top < middleOffset) {
                if ($target.css('position') === 'absolute') {
                    $target.css({
                        position: 'fixed',
                    });
                } else {
                    $target.css({
                        position: 'fixed',
                    });
                }
                setOriginalStyle();
            } else if (top > middleOffset) {
                $target.css({
                    position: 'absolute',
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