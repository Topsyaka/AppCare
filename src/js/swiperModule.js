/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by Anton on 20.04.2017.
 */

var MainPageModule = (function ($, Swiper) {
    var init = function () {
        initSlider();
        console.log('swiper inited');
    }

    var initSlider = function () {
        var swiperSlider = new Swiper('.app-slider',{
            direction: 'horizontal',
            loop: true,
            spped: 1000,
            autoplayDisableOnInteraction: false,
            slidesPerView: 5,
            centeredSlides: true,
            autoplay: 5000,
            breakpoints: {
                // when window width is <= 320px

                // when window width is <= 640px
                1360: {
                    slidesPerView: 3

                },
                800:{
                    slidesPerView: 2,
                    spaceBetween: 20

                },
                450:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                    effect: 'fade'



                }
            }


            // If we need pagination
        });


    }

    return {
        init: init
    };
})($, Swiper);