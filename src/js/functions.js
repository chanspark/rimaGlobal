function slideMenu(param) {
    var btn = $(param);
    var menu = $('.header__menu');

    btn.toggleClass('header__btn--active');
    menu.toggleClass('header__menu--active');
}

function menuBg(param) {
    $(param).parent().toggleClass('header__menu--active');
}