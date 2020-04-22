var scrollMoreOpen = 0;

$(document).ready(function() {

    // animations

    /*window.onscroll = function() {
        if (window.innerWidth > 767) {
            const wh = window.innerHeight;

            const reasonsOffset = document.getElementsByClassName('reasons')[0].offsetTop;
            const reasonsStartAnimPosition = reasonsOffset - (wh - 200);
            if (window.pageYOffset > reasonsStartAnimPosition) {
                $('.reasons__item').each(function (index) {
                    setTimeout(function () {
                        $('.reasons__item:nth-child(' + (index + 1) + ')').addClass('reasons__item--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.reasons__item').removeClass('reasons__item--shown');
            }

            const galleryOffset = document.getElementsByClassName('gallery')[0].offsetTop;
            const galleryStartAnimPosition = galleryOffset - (wh - 200);
            if (window.pageYOffset > galleryStartAnimPosition) {
                $('.gallery__slider').each(function (index) {
                    setTimeout(function () {
                        $('.gallery__slider:nth-child(' + (index + 1) + ')').addClass('gallery__slider--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.gallery__slider').removeClass('gallery__slider--shown');
            }

            const whatOffset = document.getElementsByClassName('what-in')[0].offsetTop;
            const whatStartAnimPosition = whatOffset - (wh - 200);
            if (window.pageYOffset > whatStartAnimPosition) {
                $('.what-in__item').each(function (index) {
                    setTimeout(function () {
                        $('.what-in__item:nth-child(' + (index + 1) + ')').addClass('what-in__item--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.what-in__item').removeClass('what-in__item--shown');
            }

            const addOffset = document.getElementsByClassName('additionals')[0].offsetTop;
            const addStartAnimPosition = addOffset - (wh - 200);
            if (window.pageYOffset > addStartAnimPosition) {
                $('.additionals').addClass('additionals--shown');
            }
            else {
                $('.additionals').removeClass('additionals--shown');
            }
        }
    }*/

    var answers = document.getElementsByClassName('faq__answer');
    [...answers].forEach(function(ans) {
        ans.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    document.getElementsByClassName('header__mobile-menu')[0].onclick = function(e) {
        e.preventDefault();
        if (!document.getElementsByClassName('header')[0].classList.contains('header--opened_menu')) {
            document.getElementsByClassName('header')[0].classList.add('header--opened_menu');
        }
        else {
            document.getElementsByClassName('header')[0].classList.remove('header--opened_menu');
        }
    }

    $('.faq__question-text').click(function(e) {
        if (window.innerWidth < 768) {
            var block = $(this);
            setTimeout(function () {
                $('html, body').animate({scrollTop: block.offset().top - 68}, 200);
            }, 100);
        }
    });

    // menu scrolls

    var buttons = document.getElementsByClassName('go-to');
    [...buttons].forEach(function(but) {
        but.onclick = function (e) {
            e.preventDefault();
            var block = document.getElementById(but.getAttribute('data-href'));
            var destination = block.offsetTop;
            $('html, body').animate({ scrollTop: destination }, 600);
        }
    });

    var links = document.getElementsByTagName('a');
    [...links].forEach(function(link) {
        link.onclick = function (e) {
            e.preventDefault();
            var id = link.getAttribute('href').slice(1);
            var block = document.getElementById(id);
            var destination = block.offsetTop;
            $('html, body').animate({ scrollTop: destination }, 600);
            document.getElementsByClassName('header')[0].classList.remove('header--opened_menu');
        }
    });

    document.getElementsByClassName('header__logo')[0].onclick = function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    }

    document.getElementsByClassName('what-in__more')[0].onclick = function() {
        if (!document.getElementsByClassName('what-in__block')[0].classList.contains('what-in__block--opened')) {
            document.getElementsByClassName('what-in__block')[0].classList.add('what-in__block--opened');
            scrollMoreOpen = window.pageYOffset;
        }
        else {
            document.getElementsByClassName('what-in__block')[0].classList.remove('what-in__block--opened');
        }
    }
    document.getElementsByClassName('what-in__less')[0].onclick = function() {
        var block = document.getElementsByClassName('what-in__block')[0];
        block.classList.remove('what-in__block--opened');
        $('html, body').animate({ scrollTop: scrollMoreOpen }, 200);
    }

    var calcStatus = document.getElementsByClassName('calculator__status');
    [...calcStatus].forEach(function(stat) {
        stat.onclick = function (e) {
            e.preventDefault();
            document.getElementsByClassName('calculator__status--active')[0].classList.remove('calculator__status--active');
            stat.classList.add('calculator__status--active');
        }
    });

    // sliders

    $('.gallery__slider').each(function() {
        $(this).slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    });

    $('.reviews__slider').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    if (window.innerWidth < 768) {
        $('.prices__slider').slick({
            arrows: false,
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    window.onresize = function() {
        $('.gallery__slider').each(function() {
            $(this).slick('unslick');
            var slider = $(this);
            setTimeout(function() {
                slider.slick({
                    arrows: true,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                dots: true
                            }
                        }
                    ]
                });
            }, 500);
        });

        if (window.innerWidth < 768) {
            $('.prices__slider').slick({
                arrows: false,
                dots: true,
                autoplay: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        else {
            $('.prices__slider').slick('unslick');
        }
    }

});


