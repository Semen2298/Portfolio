$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 998) {
        $('.header-menu__wrapper').addClass('active');
    }else if(pixelTop < 1) {
        $('.header-menu__wrapper').removeClass('active');
    }
});