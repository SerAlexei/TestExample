$(document).ready(function() {
    $(".burger").on('click', function () {
        $(this).toggleClass("open");
        $('.nav').slideToggle();
    });
    $(".slider").on("init", function(event, slick){
        $('#current').text(slick.currentSlide + 1);
        $('#total').text(slick.slideCount)
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '555px',
        dots: false,
        prevArrow: "<svg class='prevArrow' width=\"24\" height=\"52\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\n" +
            "<path d=\"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n" +
            "\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n" +
            "\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n" +
            "\t\t\t\"/>\n\n\n\n" +
            "</svg>",
        nextArrow: "<svg class='nextArrow' width=\"24\" height=\"52\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\n" +
            "<path d=\"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n" +
            "\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n" +
            "\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n" +
            "\t\t\t\"/>\n\n\n\n" +
            "</svg>",
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '23%',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0',
                }
            }
        ]
    });
    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $('#current').text(currentSlide + 1);
    });
});