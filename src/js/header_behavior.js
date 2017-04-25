/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by Anton on 19.04.2017.
 */

var HeaderModule = (function ($) {

    var init = function () {
        addMobileMenuFunctionality();
        addScrollHeader();
    }

    function addMobileMenuFunctionality() {

        $('.burger-button').click(function () {
            $(this).toggleClass('open').parents('header').toggleClass('tooglled');
        });

        $('#open_container').click(function () {
            $('#log-in').toggleClass('open');
        });

        $('.close_modal').click(function () {
            $('#log-in').removeClass('open');
        });

        $('#forgot').click(function () {
            $(this).parents('.absolute-form').removeClass('open');
            $('#restore-password').addClass('open');
        });

        $('#cancel').click(function () {
           $('.absolute-form').removeClass('open');
        });

    }

    function addScrollHeader() {
        var windowWidth = $(window).width();

        if(windowWidth<=450 && !($("#sign-up-form").length)){
            $(window).on('scroll',function () {
                var $this = $(this);
                console.log($this.scrollTop());

                if ($this.scrollTop()>= 400){
                    $('header').addClass('scrolled')
                }else{
                    $('header').removeClass('scrolled');
                }
            })
        }else if($("#sign-up-form").length && windowWidth<=450){
            $('header').addClass('scrolled sign');
        }
    }

    return {
        init: init
    }

})($);