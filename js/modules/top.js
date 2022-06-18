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
                    autoplaySpeed: 5000,
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
                            '<div class="pagi-line-silde"></div>' +
                            '</div>' +
                            '<div class="pagi-number">' + 0 + (index + 1) + '<svg><circle cx="50%" cy="50%" r="75" class="recruit-circle"></circle></svg></div>' +
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
                'speed' : 50
            });
        },
        
        rec: function(){
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
                    mobile:false,
                    live: false,       // default
                }
            )
            wow.init();
            
        }
    }

    obj.init();
});