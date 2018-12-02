// Signup Tabs switch
$(document).ready(function(){
    $(".form-wrapper .button").click(function(){
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");
    });
});

//  Dashboard Tabs switch
(function() {
    $('.dashboard-nav__item').on('click', function(e) {
        var itemId;
        e.preventDefault();
        $('.dashboard-nav__item').removeClass('dashboard-nav__item--selected');
        $(this).addClass('dashboard-nav__item--selected');
        itemId = $(this).children().attr('href');
        $('.dashboard-content__panel').hide();
        $('.dashboard-content__panel[data-panel-id=' + itemId + ']').show();

        if (itemId === 'my_trip') {
            $('.dashboard-preview').show();
        } else {
            $('.dashboard-preview').hide();
        }
    });

    $('.dashboard-list__item').on('click', function(e) {
        var itemId;
        e.preventDefault();
        $('.dashboard-list__item').removeClass('dashboard-list__item--active');
        $(this).addClass('dashboard-list__item--active');
        itemId = $(this).attr('data-item-id');
        $('.dashboard-preview__panel').hide();
        $('.dashboard-preview__panel[data-panel-id=' + itemId + ']').show();
    });

    $('.dashboard-header__new').on('click', function () {
        $('.dashboard-preview__panel').hide();
    })
}).call(this);