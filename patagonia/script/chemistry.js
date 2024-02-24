$(function(){



  //section : goretex_ski 스크립트
  
  $(".goretex_ski").mouseover(function(){
    $(this).find(".goretex_ski_img_conts").toggleClass('on');
    $(this).find(".goretex_ski_img_desc2").css("padding-left","20px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".goretex_ski").mouseout(function(){
    $(this).find(".goretex_ski_img_conts").removeClass('on');
    $(this).find(".goretex_ski_img_desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });



    //section : goretex_climbimg 스크립트
  
    $(".goretex_climbing").mouseover(function(){
      $(this).find(".goretex_climbing_img_conts").toggleClass('on');
      $(this).find(".goretex_climbing_img_desc2").css("padding-left","20px");
      $(this).find(".icon-caret-right-fill").css("opacity","100");
    });
    $(".goretex_climbing").mouseout(function(){
      $(this).find(".goretex_climbing_img_conts").removeClass('on');
      $(this).find(".goretex_climbing_img_desc2").css("padding-left","0");
      $(this).find(".icon-caret-right-fill").css("opacity","0");
    });













});