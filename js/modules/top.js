$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            this.aos();
            this.visual();
            this.sonic();

        },

        //aos
        aos: function () {
            AOS.init({
                startEvent: 'DOMContentLoaded',
                offset: 0,
                duration: 800,
                delay: '200',
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
                    // autoplay: true,
                    // autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    fade: true,
                    cssEase: 'linear',
                    variableWidth: false,

                    customPaging: function (slick, index) {
                        var targetText = slick.$slides.eq(index).find('.visual-img p').html();
                        var indexNew = index + 1;
                        var html = '<div class="visual-pagi">' + 
                                       '<div class="pagi-line">' +
                                            '<div class="pagi-line-silde"></div>' +
                                       '</div>' +
                                        '<div class="pagi-number">' + 0 + indexNew + '</div>' +
                                        '<div class="pagi-tt">' + 
                                            '<span class ="pagi-tt-jp">' + targetText + '</span>' +
                                            '<span class ="pagi-tt-en"> Business </span>' + 
                                        '</div>' +
                                    '</div>'
                        return html;
                       
                }

                });
            }
        },

        sonic: function () {
            $('#sonic-slick').slick({
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 15000,
            });
        },
    }

    obj.init();
});