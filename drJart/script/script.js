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


//About : collections > li 넓이 조정

 $(".select").css("width","85%").siblings().css("width","5%");

  if ($(window).width() < 1280) {
    $(".collections > ul > li").css("width","90%");
    } else { //window 크기가 1280보다 클때
      $(".select").css("width","85%").siblings().css("width","5%");
      $(".collections > ul > li").on("click", function(){
        $(this).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
      });
    }

    $(window).resize(function(){document.location.reload();})
    // 리사이즈 끝나고 1초마다 리셋
    const delay = 1000;
    const timer = null; 
    $(window).on('resize', function(){
      clearTimeout(timer);
      timer = setTimeout(function(){
      document.location.reload();
      }, delay);
  });


  //About : collections -right arrow
  let currentIndex = 0;
  $(".right-arrow").on("click", function(){
    currentIndex++;
    $(".collections > ul > li").eq(currentIndex).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
    $(".swiper > p").eq(currentIndex).css("background-color","#fff").siblings().css("background-color","#5f5f5f");
  if(currentIndex == 4){
    $(".collections > ul > li").eq(0).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
    $(".swiper > p").eq(0).css("background-color","#fff").siblings().css("background-color","#5f5f5f");
    currentIndex = 0;
    }
  });


  //About : collections -swiper 버튼
  $(".swiper > p").on("click", function(){
    let activeIndex = $(this).index();
    $(".collections > ul > li").eq(activeIndex).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
    $(".swiper > p").eq(activeIndex).css("background-color","#fff").siblings().css("background-color","#5f5f5f");
   
    let currentIndex = activeIndex;
    $(".right-arrow").on("click", function(){
      currentIndex++;
      $(".collections > ul > li").eq(currentIndex).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
      $(".swiper > p").eq(currentIndex).css("background-color","#fff").siblings().css("background-color","#5f5f5f");
    if(currentIndex == 4){
      $(".collections > ul > li").eq(0).stop().animate({width : 85 + "%"}, 500).siblings().stop().animate({width : 5 + "%"}, 400);
      $(".swiper > p").eq(0).css("background-color","#fff").siblings().css("background-color","#5f5f5f");
      currentIndex = 0;
      }
    });
  });


  //About : collections 로딩바
  $(".about-load-box").mouseover(function(){
    $(this).find(".about-loading-bar").stop().animate({width: 100 + "%"}, 600);
   });
  $(".about-load-box").mouseout(function(){
    $(this).find(".about-loading-bar").stop().animate({width:0}, 600);
   });










});