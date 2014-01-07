/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        window.hljs.initHighlightingOnLoad();
        
        $('[data-spy="scroll"]').each(function (i,item) {
            $(item).scrollspy('refresh');
        });
        
        $(".mainbody").scroll(function() {
            
            var height = $(".main-content").innerHeight()-$(".mainbody").innerHeight();
            var sideHeight = $("#side-nav").outerHeight(true);
            var curScrollPOS = $(".mainbody").scrollTop();
            var pos = curScrollPOS - height;
            
            if (pos > 0) {
                var hasRoom = pos < $(".mainbody").innerHeight() - sideHeight;
                if(!hasRoom)
                $("#side-nav").css("bottom",pos);
            }else{
                $("#side-nav").css("bottom","");
            }
        });
        
    });

}(jQuery));