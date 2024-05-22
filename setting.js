var Pagragon_Testimonial_Js = function ($scope, $) {
        var wrapper = $scope.find('.tml-slider_one');

        if (wrapper.length === 0) return;

        var settings = wrapper.data('settings');

        wrapper.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: settings['autoplay'],
            autoplaySpeed: 2000,
            // Add custom icons for previous and next buttons
            prevArrow: '<button type="button" class="slick-prev"><i class="ph ph-caret-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ph ph-caret-right"></i></button>',
            arrows: settings['arrows'],
            // infinite: true,
            // speed: 900,
            slidesToShow: settings['per_coulmn'],
            // slidesToScroll: 1,
            // autoplay: settings['autoplay'],
            // autoplaySpeed: settings['autoplaytimeout'],
            // draggable: settings['mousedrag'],
            // dots: settings['dots'],
            // lazyLoad: 'ondemand',
            // centerMode: settings['show_center_mode'],
            // dotsClass: "testimonial-slider-dot-list",
            // swipe: true,
            //vertical: true,
            // appendArrows: '.team-slider-arrow',
            //prevArrow: $('.prev'),
            //nextArrow: $('.next'),
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: settings['per_coulmn'],
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: settings['per_coulmn_tablet'],
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: settings['per_coulmn_mobile'],
                        slidesToScroll: 1,
                        vertical: false,
                    },
                },
            ],
        });
    };
