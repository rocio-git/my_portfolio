$(function(){

  //드롭다운 메뉴
  // $(".dropdown-wrap").hide();
  $(".gnb > li.has-dropdown").mouseover(function(){
    $(this).find(".dropdown-wrap").stop().fadeIn(600);
  });
  $(".gnb > li.has-dropdown").mouseout(function(){
    $(this).find(".dropdown-wrap").stop().fadeOut(600);
  });



  //로딩바 : shopnow, our story
 $(".load-box").mouseover(function(){
  $(".loading-bar").stop().animate({width: 100 + "%"}, 600);
 });
 $(".load-box").mouseout(function(){
  $(".loading-bar").stop().animate({width:0}, 600);
 });



// 모바일
$(".icon-mobile__hamburger").on("click", function(){
  $("html").css("overflow", "hidden");
  $(".mobile__menu").animate({left:0}, 400);
});
$(".icon-close").on("click", function(){
  $(".mobile__menu").animate({left:-100 + "%"}, 400);
  $(".moblie__dropdown").stop().slideUp(100);
  $("html").css("overflow", "auto");
});



//모바일 서브메뉴
$(".moblie__dropdown").hide();
$(".mobile__menu-list > a").on("click", function(){
 $(this).next(".moblie__dropdown").stop().slideToggle(300);
 $(this).toggleClass("active");
});










});