$(function(){

  //로딩바 : shopnow, our story
 $(".load-box").mouseover(function(){
  $(".loading-bar").stop().animate({width: 100 + "%"}, 600);
 });
 $(".load-box").mouseout(function(){
  $(".loading-bar").stop().animate({width:0}, 600);
 });


// 모바일
$(".icon-mobile__hamburger").on("click", function(){
  $(".mobile__menu").animate({left:0}, 500);
});
$(".icon-close").on("click", function(){
  $(".mobile__menu").animate({left:-100 + "%"}, 500);
  $(".moblie__dropdown").stop().slideUp(100);
});


//모바일 서브메뉴
$(".moblie__dropdown").hide();
$(".mobile__menu-list > a").on("click", function(){
 $(this).next(".moblie__dropdown").stop().slideToggle(300);
 $(this).toggleClass("active");
});










});