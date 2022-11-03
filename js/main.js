//popup
$(document).ready(function(){

  function setCookie(name, value, expiredays){
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
  }

  //오늘 하루 보지 않기
  $('#never').click(function(e){
    e.preventDefault(); //체크박스 없이 실행되어야 하므로, 바로 실행되도록 if문 쓰지 않음
    setCookie('exCookie','done',1);
    $(this).parents('.popup').stop().fadeOut(0);
  });

  //닫기
  $('#close').click(function(e){
      e.preventDefault();
      $(this).parents('.popup').stop().fadeOut(0);
  });

  var cookieData = document.cookie;
  if(cookieData.indexOf('exCookie=done') < 0){
      $('.popup').fadeIn(0);
  }else{
      $('.popup').fadeOut(0);
  }
});



//main - swiper
$(document).ready(function(){
    var swiper = new Swiper("main .swiper-container", {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
      });
});


//tabbox
$(document).ready(function(){
    var btn = '.tabbox .btn';
    var content = '.tabbox .conwrap';

    $(btn).find('li:first a').addClass('active');
    $(content).find('> div:first').fadeIn(0);
    $(content).find('.best').stop().fadeOut(0);
    
    $(btn).find('a').click(function(e){
        e.preventDefault();

        $(btn).find('a').removeClass('active');
        $(this).addClass('active');

        var index = $(this).parent().index();

        $(content).find('> div').stop().fadeOut(0);
        $(content).find('> div').eq(index).stop().fadeIn(0);
    });
});


//award_slider
$(document).ready(function(){
  var swiper = new Swiper(".award_slider", {
    slidesPerView: 3.7,
    spaceBetween: 25,
  });
});


//sns_board
$(document).ready(function(){
  var swiper = new Swiper(".sns-slider", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});