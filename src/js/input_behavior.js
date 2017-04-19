/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by Anton on 19.04.2017.
 */

var InputModule = (function ($) {

    var init = function(){
        addInputsBehavior();
    }

    var addInputsBehavior = function () {
        var inputs = $(".input");


        $.each(inputs,function(index, elem){
            $(elem).on('focus',function () {
                $(this).addClass('active');
                $(this).parents('.input-outer-container').find('label').removeClass('filled').addClass('active');
            });

            $(elem).on('focusout',function () {
                var value = $(this).val();

                $(this).removeClass('active');
                $(this).parents('.input-outer-container').find('label').removeClass('active');

                if (value){
                    $(this).parents('.input-outer-container').find('label').addClass('filled')
                }
            });

        });

    }

    return {
        init: init
    };
})($);

$(document).ready(function () {
    InputModule.init();
})