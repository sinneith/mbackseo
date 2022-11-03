//panel01
$(document).ready(function(){
   var btn01 = '#panel_icon a';
   var panel01 = '.panel01';
   var panelBg01 = '.black_bg01';

   $(btn01).click(function(e){
       e.preventDefault();

       $(btn01).add(panel01).toggleClass('active');

       var is = $(panelBg01).is(':hidden');

       if(is){
           $(panelBg01).stop().fadeIn(100, function(){
               $('html, body').css('overflow','hidden');
           });
       }else{
           $(panelBg01).stop().delay(300).fadeOut(100, function(){
               $('html, body').css('overflow','visible');
               $('.sub_menu').stop().slideUp('fast');
               $('.menu_name').removeClass('active');
           });
       }
   });
   $(panelBg01).click(function(){
       $(btn01).trigger('click');
   });
});

//panel01 active
$(document).ready(function(){
    $('.menu > li a').click(function(e){
        e.preventDefault();

         var has = $(this).hasClass('active');
         if(has){
            $(this).removeClass('active');
            $(this).next().stop().slideUp(); 
         }else{
            $('.menu_name').removeClass('active');
            $(this).addClass('active');
     
            $('.sub_menu').stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
         }
    });
});


//panel02
$(document).ready(function(){
    var btn02 = '#search_icon a';
    var panel02 = '.panel02';
    var panelBg02 = '.black_bg02';
 
    $(btn02).click(function(e){
        e.preventDefault();
 
        $(btn02).add(panel02).toggleClass('active');
 
        var is = $(panelBg02).is(':hidden');
 
        if(is){
            $(panelBg02).stop().fadeIn(100, function(){
                $('html, body').css('overflow','hidden');
            });
        }else{
            $(panelBg02).stop().delay(300).fadeOut(100, function(){
                $('html, body').css('overflow','visible');
            });
        }
    });
 
    $(panelBg02).click(function(){
        $(btn02).trigger('click');
    });
 });