$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            // this.aos();
            this.visual();
            this.sonic();
            this.rec();
        },

        //aos
        aos: function () {
            AOS.init({
                startEvent: 'DOMContentLoaded',
                offset: 0,
                duration: 800,
                delay: '0',
                easing: 'ease-in-sine',
                once: true,
                mirror: true,
                disable: function () {
                    return $(window).width() <= 768;
                },
            });
        },

        visual: function () {
            if ($('#visual').length > 0) {
                $('#visual').slick({
                    dots: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 8100,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    fade: true,
                    cssEase: 'linear',
                    variableWidth: false,

                    customPaging: function (slick, index) {
                        var targetText = slick.$slides.eq(index).find('.visual-img p').html();
                        var targetLink = slick.$slides.eq(index).find('.visual-img a').attr('href');

                        var html = '<div class="visual-pagi">' +
                            '<div class="pagi-line">' +
                                '<div class="line-shadow">' +
                                '<svg x="0px" y="0px" width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><path fill="none" stroke="#00a500" stroke-width="30" stroke-miterlimit="10" d="M0,125c0,69.035,55.963,125,125,125 c69.037,0,125-55.965,125-125C250,55.964,194.037,0,125,0"></path></svg>'
                                + '</div>' +
                                '<div class="line-form">' +
                                '<svg x="0px" y="0px" width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><path fill="none" stroke="#37a168" stroke-width="30" stroke-miterlimit="10" d="M0,125c0,69.035,55.963,125,125,125 c69.037,0,125-55.965,125-125C250,55.964,194.037,0,125,0"></path></svg>'
                                + '</div>' +
                                '<div class=line-s>'+ 
                                '<svg x="0px" y="0px" width="250px" height="250px" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><path fill="none" stroke="#00a500" stroke-width="30" stroke-miterlimit="10" d="M0,125c0,69.035,55.963,125,125,125 c69.037,0,125-55.965,125-125C250,55.964,194.037,0,125,0"></path></svg>'
                                +'</div>'+ 
                            '</div>' +
                            '<div class="pagi-number">' + 
                                '<div class="number-first"> 0 </div>'+
                                '<div class="number-second">'+ (index + 1) +'</div>'
                            + '</div>' +
                            '<div class="pagi-tt">' +
                            '<span class ="pagi-tt-jp">' + targetText + '</span>' +
                            '<span class ="pagi-tt-en"> Business </span>' +
                            '</div>' +
                            '<a href="' + targetLink + '" class="lk-full"> </a>' +
                            '</div>'
                        return html;

                    }

                });
            }
        },

        sonic: function () {
            $("#sonic-slick").endlessRiver({
                'speed': 50
            });
        },

        rec: function () {
            // var offset = $('.recruit .rec-ig').offset();
            // var top = offset.top;

            // var prev = $('.recruit').prev().find('.container').height();

            // console.log(prev);

            // $(window).scroll(function () { 
            //     var st = $(window).scrollTop();

            //     if (st >= (top - prev)) {
            //         $('.recruit').addClass('asd');
            //     }
            // });

            var wow = new WOW(
                {
                    boxClass: 'wow',      // default
                    animateClass: 'animated', // default
                    offset: 0,          // default
                    mobile: false,
                    live: false,       // default
                }
            )
            wow.init();

        }
    }

    obj.init();
});