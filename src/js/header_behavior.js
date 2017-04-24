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

    }

    return {
        init: init
    }

})($);