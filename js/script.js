/*
 * Copyright by Alexander Afanasyev
 * E-mail: blackbirdeagle@mail.ru
 * Skype: al_sidorenko1
 * */
$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 40;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });
    }
}

addEventListener("keydown", keyExit);

function banner_h(){
    var h = document.documentElement.clientHeight + 17;
    var w = h * 26710 / 3391;

    $('.screen1').css('height', h);

    $('.advancedpanorama').css('height', h);
    $('.advancedpanorama').css('width', w);
}

banner_h();

$(window).resize(function() {
    banner_h();
});

jQuery(function(){
    jQuery(".phone__field").mask("+7(999) 999-9999");
    jQuery(".data__field").mask("99.99.99");
    jQuery(".time__field").mask("99:99");
});

$('.popup__form__subscribe label').click(function() {
    if ($(this).children('input').prop("checked") == false) {
        $(this).addClass('check');
    }else{
        $(this).removeClass('check');
    }
});

$('.screen4__slider__nav a:nth-child(1)').click(function(){
    $('.panorama-control-left').click();
});

$('.screen4__slider__nav a:nth-child(2)').click(function(){
    $('.panorama-control-right').click();
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$("#to__top").click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});


$(document).ready(function(){
    var flag = 0;
    $('#nav-toggle').click(function(){
        $(this).toggleClass('active');

        if(flag == 0) {
            $('.menu').animate({top: 0}, 300);
            flag = 1;
        }else{
            $('.menu').animate({top: -100 + '%'}, 300);
            flag = 0;
        }
    });

    $('.menu ul li a').click(function(){
        $('.menu').animate({top: -100 + '%'}, 300);
        $('#nav-toggle').removeClass('active');
        flag = 0;
    });

    $('.book, .menu__book').click(function(){
        $('.popup__form').animate({left: 0}, 300);
    });

    $('.hide__form').click(function(){
        $('.popup__form').animate({left: -100 + '%'}, 300);
    });

    $("img.advancedpanorama").panorama({
        auto_start: 1,
        start_position: 0
    });

    $('.fade__day').click(function(){
        $('.day__panoram').fadeIn(800);
        $('.night__panoram').fadeOut(800);
    });

    $('.fade__night').click(function(){
        $('.night__panoram').fadeIn(800);
        $('.day__panoram').fadeOut(800);
    });

    $(window).scroll(function(){
        if($( window ).width() > 767) {
            var fromTop = $(window).scrollTop() / 4;
            var fromTop1 = $(window).scrollTop() / 4 - 300;
            var fromTop2 = $(window).scrollTop() / 4 - 500;
            var fromTop3 = $(window).scrollTop() / 4 - 700;
        }else if($( window ).width() <= 767 && $( window ).width() > 480){
            var fromTop = $(window).scrollTop() / 4;
            var fromTop1 = $(window).scrollTop() / 4 - 200;
            var fromTop2 = $(window).scrollTop() / 4 - 400;
            var fromTop3 = $(window).scrollTop() / 4 - 500;
        }else{
            var fromTop = $(window).scrollTop() / 4;
            var fromTop1 = $(window).scrollTop() / 4 - 200;
            var fromTop2 = $(window).scrollTop() / 4 - 300;
            var fromTop3 = $(window).scrollTop() / 4 - 500;
        }

        $('.star__team__wrap1').css('margin-top', - fromTop + 'px');
        $('.star__team__wrap2').css('margin-top', - fromTop1 + 'px');
        $('.star__team__wrap3').css('margin-top', - fromTop2 + 'px');
        $('.star__team__wrap4').css('margin-top', - fromTop3 + 'px');
    });

    $("#news__slider").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 66,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        smartSpeed:1000,
        navText: ['', ''],
    });

    var owl1 = $("#screen3__slider");
    owl1.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        smartSpeed:1000,
        navText: ['', ''],
    });

    $('.screen3__slider__nav a:nth-child(1)').click(function(){
        owl1.trigger('prev.owl.carousel');
    });

    $('.screen3__slider__nav a:nth-child(2)').click(function(){
        owl1.trigger('next.owl.carousel');
    });

    $('#screen3__dot1').click(function(){
        owl1.trigger('to.owl.carousel', [0, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot2').click(function(){
        owl1.trigger('to.owl.carousel', [1, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot3').click(function(){
        owl1.trigger('to.owl.carousel', [2, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot4').click(function(){
        owl1.trigger('to.owl.carousel', [3, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot5').click(function(){
        owl1.trigger('to.owl.carousel', [4, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot6').click(function(){
        owl1.trigger('to.owl.carousel', [5, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen3__dot7').click(function(){
        owl1.trigger('to.owl.carousel', [6, 300]);
        $('.slider__dots1 a').removeClass('active');
        $(this).addClass('active');
    });

    owl1.on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot1').addClass('active');
        } else if (in_owl == 1) {
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot2').addClass('active');
        } else if(in_owl == 2){
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot3').addClass('active');
        }else if(in_owl == 3){
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot4').addClass('active');
        }else if(in_owl == 4){
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot5').addClass('active');
        }else if(in_owl == 5){
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot6').addClass('active');
        }else if(in_owl == 6){
            $('.slider__dots1 a').removeClass('active');
            $('#screen3__dot7').addClass('active');
        }
    });

    $('.screen3__slider__nav a:nth-child(1)').click(function(){
        $a = $('.slider__dots1 a.active');
        $x = $(this).hasClass('prev') ? $a.next() : $a.prev();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });

    $('.screen3__slider__nav a:nth-child(2)').click(function(){
        $a = $('.slider__dots1 a.active');
        $x = $(this).hasClass('next') ? $a.prev() : $a.next();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });

    var owl2 = $("#screen5__slider");
    owl2.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        smartSpeed:1000,
        navText: ['', ''],
    });

    $('.screen5__slider__nav a:nth-child(1)').click(function(){
        owl2.trigger('prev.owl.carousel');
    });

    $('.screen5__slider__nav a:nth-child(2)').click(function(){
        owl2.trigger('next.owl.carousel');
    });

    $('#screen5__dot1').click(function(){
        owl2.trigger('to.owl.carousel', [0, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot2').click(function(){
        owl2.trigger('to.owl.carousel', [1, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot3').click(function(){
        owl2.trigger('to.owl.carousel', [2, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot4').click(function(){
        owl2.trigger('to.owl.carousel', [3, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot5').click(function(){
        owl2.trigger('to.owl.carousel', [4, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot6').click(function(){
        owl2.trigger('to.owl.carousel', [5, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    $('#screen5__dot7').click(function(){
        owl2.trigger('to.owl.carousel', [6, 300]);
        $('.slider__dots2 a').removeClass('active');
        $(this).addClass('active');
    });

    owl2.on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot1').addClass('active');
        } else if (in_owl == 1) {
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot2').addClass('active');
        } else if(in_owl == 2){
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot3').addClass('active');
        }else if(in_owl == 3){
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot4').addClass('active');
        }else if(in_owl == 4){
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot5').addClass('active');
        }else if(in_owl == 5){
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot6').addClass('active');
        }else if(in_owl == 6){
            $('.slider__dots2 a').removeClass('active');
            $('#screen5__dot7').addClass('active');
        }
    });

    $('.screen5__slider__nav a:nth-child(1)').click(function(){
        $a = $('.slider__dots2 a.active');
        $x = $(this).hasClass('prev') ? $a.next() : $a.prev();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });

    $('.screen5__slider__nav a:nth-child(2)').click(function(){
        $a = $('.slider__dots2 a.active');
        $x = $(this).hasClass('next') ? $a.prev() : $a.next();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });
});