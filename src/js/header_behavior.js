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
        //checkSign();
    }

    function addMobileMenuFunctionality() {

        $('.burger-button').click(function () {
            $(this).toggleClass('open').parents('header').toggleClass('tooglled');


        });

        $('#open_container').click(function () {
            // $('#log-in').toggleClass('open');
            // console.log($('#log-in').hasClass('open'));
            if(!($('#log-in').hasClass('open'))){
                $('#log-in').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (event) {
                    $(this).off(event);
                });
                AnimationModule.addAnimationToElement([{
                    elementID: "#log-in",
                    elementAnimationClass: "fadeIn",
                    onload: true
                }],1);
                $('#log-in').addClass('open');
            }else{
                $('#log-in').removeClass('fadeIn animated');
                AnimationModule.addAnimationToElement([{
                    elementID: "#log-in",
                    elementAnimationClass: "fadeOut",
                    onload: true
                }],1,function () {

                    $('#log-in').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (event) {
                        $('#log-in').removeClass('fadeOut animated open');
                        $(this).off(event);
                    });

                });


            }
        });
        $('.change_language').click(function () {
            // $('#log-in').toggleClass('open');
            // console.log($('#log-in').hasClass('open'));
            if(!($('#lang-change').hasClass('open'))){
                $('#lang-change').parents('li').css('display','inherit');
                $('#lang-change').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (event) {
                    $(this).off(event);
                });
                AnimationModule.addAnimationToElement([{
                    elementID: "#lang-change",
                    elementAnimationClass: "fadeIn",
                    onload: true
                }],1);
                $('#lang-change').addClass('open');
            }else{

                $('#lang-change').removeClass('fadeIn animated');
                AnimationModule.addAnimationToElement([{
                    elementID: "#lang-change",
                    elementAnimationClass: "fadeOut",
                    onload: true
                }],1,function () {

                    $('#lang-change').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (event) {
                        $('#lang-change').parents('li').css('display','');
                        $('#lang-change').removeClass('fadeOut animated open');

                        $(this).off(event);
                        //$('#lang-change').parents('li').css('display','none');
                    });

                });


            }
        });

        $('.close_modal').click(function () {
            $('#log-in').removeClass('open');
            $('#lang-change').removeClass('open');
            $('#lang-change').parents('li').css('display','');
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
                //console.log($this.scrollTop());

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

    function checkSign(){
        if($(".sign-up-container").length > 0){
            $(".burger-button").addClass('sign');
        }
    }

    return {
        init: init
    }

})($);