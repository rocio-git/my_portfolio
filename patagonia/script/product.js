$(function(){

  // section : gifts_for_all line2 스크립트

  $(".line1 > div").mouseover(function(){
    $(this).find(".item_desc").stop().slideDown(100);
  });
  $(".line1 > div").mouseout(function(){
    $(this).find(".item_desc").stop().slideUp(100);
  });



  //button_more 

  $(".button_more").on("click", function(){
    $(".line2").css("display","flex");
    $(this).css("display","none");
  });



  // section : gifts_for_all line1 스크립트

  $(".line2 > div").mouseover(function(){
    $(this).find(".item_desc").stop().slideDown(100);
  });
  $(".line2 > div").mouseout(function(){
    $(this).find(".item_desc").stop().slideUp(100);
  });


  //section : membership 스크립트
  
  $(".membership_img_conts").mouseover(function(){
    $(this).toggleClass('on');
    $(this).find(".membership_img_desc2").css("padding-left","26px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".membership_img_conts").mouseout(function(){
    $(this).removeClass('on');
    $(this).find(".membership_img_desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });






});