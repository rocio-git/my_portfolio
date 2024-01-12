$(function(){

  //advr 슬라이더 적용
  $('.advr').slick({
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    verticalSwiping: true,
  });


  $(".img-conts").mouseover(function(){
    $(this).toggleClass('on');
    $(this).find(".main-img-desc2").css("padding-left","30px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".img-conts").mouseout(function(){
    $(this).removeClass('on');
    $(this).find(".main-img-desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });

});