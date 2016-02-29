$(function() {
    var template = $('#templates .legacy-header-template').html();
    var rendered = Mustache.render(template, {
        navigation: navigationObj.navigation
    });
    $('#container').html(rendered);
    initHeader()
    initTabIndex()
})

function initHeader() {
    //show flyouts on top level hover
    $('.legacy-header-top-level a, .legacy-header-flyout').on({
        mouseenter: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            //$flyout.show()
            $flyout.addClass('legacy-header-visible')
            $topLevel.addClass('active')
            $topLevel.parent().addClass('active')
        },
        mouseleave: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.removeClass('legacy-header-visible')
            $topLevel.removeClass('active')
            $topLevel.parent().removeClass('active')
        },
        //flyouts do not gain focus, but top-level items do...
        focusin: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.addClass('legacy-header-visible')
            $topLevel.addClass('active')
            $topLevel.parent().addClass('active')
        },
        focusout: function() {
            var name = $(this).attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.removeClass('legacy-header-visible')
            $topLevel.removeClass('active')
            $topLevel.parent().removeClass('active')
        }

    });

    /*$('.legacy-header-flyout-first-level-item, .legacy-header-flyout-second-level-item').on({
        focusin: function() {
            console.log('focusin')
            var name = $(this).closest('[data-flyout]').attr('data-flyout');
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.show()
            $topLevel.addClass('active')
            $topLevel.parent().addClass('active')
        },
        focusout: function() {
            console.log('focusout')
            var name = $(this).closest('[data-flyout]').attr('data-flyout')
            var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
            var $topLevel = $('.legacy-header-top-level-item[data-flyout="' + name + '"]');
            $flyout.hide()
            $topLevel.removeClass('active')
            $topLevel.parent().removeClass('active')
        }
    });*/

    //show flyout second level on first level hover
    $('.legacy-header-flyout-first-level-item, .legacy-header-flyout-second-level').on({
        mouseenter: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.addClass('legacy-header-visible')
            $firstLevel.addClass('active')
        },
        mouseleave: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.removeClass('legacy-header-visible')
            $firstLevel.removeClass('active')
        },
        focusin: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.addClass('legacy-header-visible')
            $firstLevel.addClass('active')
        },
        focusout: function() {
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            var $firstLevel = $('.legacy-header-flyout-first-level-item[data-second-level="' + name + '"]');
            $secondLevel.removeClass('legacy-header-visible')
            $firstLevel.removeClass('active')
        }
    });
}
var tabIndexCounter = 0;

function initTabIndex() {
    function tabIndexNext() {
        tabIndexCounter += 1;
        return tabIndexCounter;
    }
    $('.legacy-header-top-level-item').each(function() {
        $(this).attr('tabIndex', tabIndexNext())
        var name = $(this).attr('data-flyout');
        var $flyout = $('.legacy-header-flyout[data-flyout="' + name + '"]');
        $flyout.find('.legacy-header-flyout-first-level-item').each(function() {
            $(this).attr('tabIndex', tabIndexNext())
            var name = $(this).attr('data-second-level');
            var $secondLevel = $('.legacy-header-flyout-second-level[data-second-level="' + name + '"]');
            $secondLevel.find('.legacy-header-flyout-second-level-item').each(function() {
                $(this).attr('tabIndex', tabIndexNext())
            })
        })
    });
}
