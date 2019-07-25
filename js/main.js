$( document ).ready(function() {
    // arrordeon on main page
    $(".accordeon > li > a").click(function (e) {
        e.preventDefault();

        var menu = $(this).closest('.accordeon');

        if (false == $(this).next().is(':visible')) {
            menu.find('li').removeClass('slide active');
            menu.find('ul').slideUp();
        }

        $(this).next().slideToggle();
        $(this).parent().toggleClass('slide');
    });
    // open small menu
    $("#menu").click(function (e) {
        e.preventDefault();
        $(".nav_list").toggleClass('d-flex');

    });
    // slider on main page
    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fal fa-arrow-circle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-arrow-circle-right"></i></div>',
    });
    $('.hot_deals_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        prevArrow: '<div class="slick-prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-long-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


        /*slider detail page product*/
        $('.product_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product_slider_nav'
        });
        $('.product_slider_nav').slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product_slider',
            arrows: !1,
            centerPadding: "20px",
            focusOnSelect: !0,
        });
        // modal script
        modalWindow('.modal_ask_product', '.open_feedback');
        modalWindow('.modal_by_in_credit', '.open_btn_credit');
        function modalWindow(NameModal, BtnOpenModal) {
            // modal variable
            var wrap = $('.cover'),
                btn = $(BtnOpenModal),
                modal = $(`.cover, ${NameModal}, ${NameModal} .content`);
            // open modal
            btn.on('click', function() {
                modal.fadeIn();
                modal.css({'display' : 'flex'});
            });


            // close modal

                wrap.on('click', function(event) {
                    var select = $(NameModal + ' .content');
                    if ($(event.target).closest(select).length)
                        return;
                    modal.fadeOut();
                });


            $(NameModal + " .closed").click(function(){
                modal.fadeOut();
            });
        }
        // counter item product
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });



        // add active class
        addActive('.size_box');
        addActive('.color_box');
        function addActive (boxClass){
            $(boxClass).click(function () {
                $(boxClass).removeClass('active');
                $(this).addClass('active');
            });
        }
        // fucking filter
        $('.bx_filter_container_title').click(function () {
           $(this).parent().toggleClass('active');
        });


});