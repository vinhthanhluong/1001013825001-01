$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');
    function anchorLink(el) {
        var p = $(el).offset();
        var offsetPC = 0;
        var offsetSP = 0;
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: p.top - offsetPC }, 400);
        } else {
            $('html,body').animate({ scrollTop: p.top - offsetSP }, 400);
        }
    }
    var obj = {
        init: function () {
            // this.tab();
            this.toTop();
            this.anchorLink();
            // this.scrollToMail();
            // this.visual();
            this.matchHeight();
            this.menu();
            // this.accordion();
        },

        //Change tab
        tab: function () {
            $('[data-tab]').click(function () {
                var _group = $(this).data('tab-group');
                var _index = $(this).data('tab');
                $('[data-tab][data-tab-group="' + _group + '"].active').removeClass('active');
                $(this).addClass('active');

                $('[data-tab-content][data-tab-group="' + _group + '"]').removeClass('active');
                $('[data-tab-content="' + _index + '"][data-tab-group="' + _group + '"]').addClass('active');
            });
        },

        toTop: function () {
            $(".scroll-top").click(function () {
                $('html,body').animate({
                    scrollTop: 0,
                }, 1000);
                return false;
            });

            $(window).scroll(function () {
                var st = $('html,body').scrollTop();
                if (st > 10) {
                    $('.scroll-top').addClass('--active');
                } else {
                    $('.scroll-top').removeClass('--active');
                }
            });
        },

        //Anchor Link
        anchorLink: function () {
            $(window).on('load', function () {
                "use strict";
                // ANCHOR FROM OTHER PAGE
                var hash = location.hash;
                if (hash && $(hash).length > 0) {
                    anchorLink(hash);
                }
                // ANCHOR IN PAGE
                $('a[href^="#"]').click(function () {
                    var getID = $(this).attr('href');
                    if ($(getID).length) {
                        anchorLink(getID);
                        // CLOSE SP NAV
                        if ($('body').hasClass('open-nav')) {
                            $('#menu-toggle').trigger('click');
                        }
                        return false;
                    }
                });
            });
        },

        //scroll to mail form
        scrollToMail: function () {
            if ($('#fmail_section').length > 0) {
                var x = location.search;
                if (x.search('mode') >= 0) {
                    var _mailFormPos = $('#fmail_section').offset().top;
                    _mailFormPos = parseInt(_mailFormPos);
                    if ($(window).width() > 750) {
                        $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
                    } else {
                        $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
                    }
                }
            }
        },

        visual: function () {
            if ($('#visual').length > 0) {
                $('#visual').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    fade: false,
                    variableWidth: false,
                });
            }
        },

        matchHeight: function () {
            // $('.asddd').matchHeight();
        },

        menu: function () {
            $('.hamburger-btn').click(function () {
                // $(this).toggleClass('--active');
                $('body').toggleClass('open-nav no-scroll');
                if ($(this).hasClass('ham-on')) {
                    $(this).removeClass('ham-on');
                    $(this).addClass('ham-off');
                }else if ($(this).hasClass('ham-off')) {
                    $(this).removeClass('ham-off');
                    $(this).addClass('ham-on');
                }
            });

            // $('.overplay').click(function () {
            //     $('.hamburger-btn').trigger('click');
            // });

            if ($('.header-menu').length) {
                const _w = $(window).width();
                if (_w < 751) {
                    $('.dropdown > span').click(function () {
                        $(this).toggleClass('open');
                        $(this).next('.sub-menu').stop().slideToggle();
                        $(this).closest('.dropdown').siblings().find('.sub-menu').stop().slideUp();
                        $(this).closest('.dropdown').siblings().find('span').removeClass('open');
                    });
                }
            }

            $(window).scroll(function () { 
               var st = $(window).scrollTop();
                if (st > 10) {
                    $('#header').addClass('--fix');
                }else{
                    $('#header').removeClass('--fix');
                }
            });
        },

        //Accordion
        accordion: function () {
            $(".accordion-button").click(function (e) {
                e.preventDefault();
                $(this).toggleClass("open");
                var _accordionID = $(this).attr('id');
                var accordion_content = $('[data-accordion-for="' + accordionID + '"]');
                accordion_content.stop().slideToggle(200);
            });
        }

    }

    obj.init();
});