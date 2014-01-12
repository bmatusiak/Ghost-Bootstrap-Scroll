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
        //window.hljs.initHighlightingOnLoad();
        
        
        $('[data-spy="scroll"]').each(function (i,item) {
            $(item).scrollspy('refresh');
        });
        
        /*
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
        */
        //$("pre code").each(function(i, eValue) {
        //    $(eValue).css("height", $(eValue).height());
        //});
        $("pre code").each(function(i, eValue) {
            $(eValue).css("height", $(eValue).height());
            
            var mode = $(eValue).attr("class");
            
            var editor = window.ace.edit(eValue);
            
            editor.setHighlightActiveLine(false);
            editor.setReadOnly(true);
            editor.setShowFoldWidgets(false);
            
            var session = editor.getSession();
            if(mode)
                session.setMode("ace/mode/"+mode);
            
            var count = session.getLength();
            
            setTimeout(function(){
                var len = count + 1;
                var hei = 14;
                console.log(count,"x",hei,len * hei);
                
                $(eValue).css("height",(len * hei)+5);
            });
            
        });
        
    });

}(jQuery));