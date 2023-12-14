$(function(){

  //드롭다운 메뉴
  $(".dropdown-wrap").hide();
  $(".gnb > li.has-dropdown").mouseover(function(){
    $(this).find(".dropdown-wrap").stop().fadeIn(600);
  });
  $(".gnb > li.has-dropdown").mouseout(function(){
    $(this).find(".dropdown-wrap").stop().fadeOut(400);
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




//bestseller 이미지 호버
$("a.item").each(function(){
  let nowImg = $(this).find("img");
  let srcName = nowImg.attr("src");
  let newSrc = srcName.substring(0, srcName.lastIndexOf("."));

  $(this).hover(function(){
    $(this).find("img").attr("src", newSrc+ "-hover." + /[^.]+$/.exec(srcName),500);
  }, function(){
    $(this).find("img").attr("src", newSrc+ "." + /[^.]+$/.exec(srcName),500);
  });
});








});