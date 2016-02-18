$(function() {
    var template = $('#templates .legacy-header-template').html();
    var rendered = Mustache.render(template, {
        navigation: navigationObj.navigation
    });
    $('#container').html(rendered);
    initHeader()
})

function initHeader() {
    //show flyouts on top level hover
    $('.legacy-header-top-level a, .legacy-header-flyout').on({
        mouseenter: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.show()
            $topLevel.addClass('active')
            $topLevel.parent().addClass('active')
        },
        mouseleave: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.hide()
            $topLevel.removeClass('active')
            $topLevel.parent().removeClass('active')
        },
        focusin: function(){
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.show()
            $topLevel.addClass('active')
            $topLevel.parent().addClass('active')
        },
        focusout: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.hide()
            $topLevel.removeClass('active')
            $topLevel.parent().removeClass('active')
        },
    });

    //show flyout second level on first level hover
    $('.legacy-header-flyout-first-level-item, .legacy-header-flyout-second-level').on({
        mouseenter: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.show()
            $firstLevel.addClass('active')
        },
        mouseleave: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.hide()
            $firstLevel.removeClass('active')
        }
    });
}
