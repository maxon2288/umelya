function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .popup__container, .nav-container').removeClass('visible');
    });


    $(".form-reset").click(function() {
        $(this).closest('form').find('input').val('');
    });

    $(".popup, .popup__container").click(function(e) {
        if (e.target == this) {
            $('body').css('overflow', 'auto');
            $('.popup, .overlay, .header-menu, .humburger-overlay, .period').removeClass('visible');
        }
    });


    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .popup__container, .nav-container').removeClass('visible');
        var popup = $(this).attr('data-popupBlock');
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
    });

}