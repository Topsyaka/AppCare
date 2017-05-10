/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by Anton on 20.04.2017.
 */

$(document).ready(function(){
    MainPageModule.init();
    HeaderModule.init();
    AnimationModule.addAnimationToElement([
        {
            elementID: "#topBlockImage",
            elementAnimationClass: "fadeInRight",
            onload: true
        },
        {
            elementID: "#notebookRight",
            elementAnimationClass:"fadeInRight",
            onload: true,
            afterAnimation: {
                elementID: "#notebookRightScreen",
                elementAnimationClass: "fadeInRight",
                onload: true
            }
        }
    ],1)
    $(window).scroll(function () {
        var doc = document.documentElement;

        var scrollY = (window.pageYOffset || doc.scrollTop)  + 300;//(doc.clientTop || 0);
        //var scrollY = this.scrollY;
        //console.log(this.scrollTop());
        AnimationModule.addAnimationToElement([
            {
                elementID: "#topBlockImage",
                elementAnimationClass: "fadeInRight",
                onload: true
            },
            {
                elementID: "#iphone",
                elementAnimationClass: "fadeInRight",
                onload: false,
                afterAnimation: {
                    elementID: "#iphoneScreen1",
                    elementAnimationClass: "fadeInRight",
                    onload: true,
                    afterAnimation: {
                        elementID: "#iphoneScreen2",
                        elementAnimationClass: "fadeInRight",
                        onload: true
                    }
                }
            },
            {
                elementID: "#notebookLeft",
                elementAnimationClass: "fadeInLeft",
                onload: false,
                afterAnimation: {
                    elementID: "#notebookLeftScreen",
                    elementAnimationClass: "fadeInLeft",
                    onload: true,
                }
            }


        ],scrollY)
    });
});

