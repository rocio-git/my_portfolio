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



  //main : img 스크립트

  $(".img_conts").mouseover(function(){
    $(this).toggleClass('.on');
    $(this).find(".main_img_desc2").css("padding-left","30px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".img_conts").mouseout(function(){
    $(this).removeClass('.on');
    $(this).find(".main_img_desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });



  //section : slider-1 

  let slide = $(".slider1-wrapper > div");
  let slideCount = slide.length;
  let currentIdx = 0;

  slide.hide().eq(currentIdx).show();

  setInterval(showNextSlide, 3400);

  function showNextSlide(){
    let nextIdx = (currentIdx + 1) % slideCount;
    slide.eq(currentIdx).fadeOut();
    slide.eq(nextIdx).fadeIn();
    currentIdx = nextIdx;
  }



  //section : collection 스크립트

  $(".collection_img_conts").mouseover(function(){
    $(this).toggleClass('on');
    $(this).find(".collection_img_desc2").css("padding-left","30px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".collection_img_conts").mouseout(function(){
    $(this).removeClass('on');
    $(this).find(".collection_img_desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });



  //section : shop

  $('.shop_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3200,
    arrows: true,
    prevArrow : "<button type='button' class='slick-prev'></button>",
    nextArrow : "<button type='button' class='slick-next'></button>",
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '44px',
    responsive : [
      {
        breakpoint : 1024,
        settings : {
          slidesToShow: 2,
          centerPadding: '0px',
        }
      }
    ],
    dots: true,
    appendDots: ".controler",
    customPaging: function(slider, i){
      return '<p>' + '0' + (i + 1) + '</p><p>' + '0' + slider.slideCount + '</p>';
    }
  });



  // section : anniver50 스크립트

    $(".anniver50_img_conts").mouseover(function(){
      $(this).toggleClass('on');
      $(this).find(".anniver50_img_desc2").css("padding-left","30px");
      $(this).find(".icon-caret-right-fill").css("opacity","100");
    });
    $(".anniver50_img_conts").mouseout(function(){
      $(this).removeClass('on');
      $(this).find(".anniver50_img_desc2").css("padding-left","0");
      $(this).find(".icon-caret-right-fill").css("opacity","0");
    });



    // section : anniver50_items

    $(".img_conts").mouseover(function(){
      $(this).toggleClass('on');
      $(this).find(".anniver50_items_img_desc2").css("padding-left","30px");
      $(this).find(".icon-caret-right-fill").css("opacity","100");
    });
    $(".img_conts").mouseout(function(){
      $(this).removeClass('on');
      $(this).find(".anniver50_items_img_desc2").css("padding-left","0");
      $(this).find(".icon-caret-right-fill").css("opacity","0");
    });



    //section : shop

    $('.anniver50_shop_wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3200,
      arrows: true,
      prevArrow : "<button type='button' class='slick-prev'></button>",
      nextArrow : "<button type='button' class='slick-next'></button>",
      pauseOnHover: false,
      centerMode: true,
      centerPadding: '44px',
      responsive : [
        {
          breakpoint : 1024,
          settings : {
            slidesToShow: 2,
            centerPadding: '0px',
          }
        }
      ],
      dots: true,
      appendDots: ".anniver50_shop_controler",
      customPaging: function(slider, i){
        return '<p>' + '0' + (i + 1) + '</p><p>' + '0' + slider.slideCount + '</p>';
      }
    });



  //section : slider-2 

  let slider2slide = $(".slider2_wrapper > div");
  let slider2Count = slider2slide.length;
  let slider2currentIdx = 0;

  slider2slide.hide().eq(slider2currentIdx).show();

  setInterval(slider2NextSlide, 3400);

  function slider2NextSlide(){
    let slider2nextIdx = (slider2currentIdx + 1) % slider2Count;
    slider2slide.eq(slider2currentIdx).fadeOut();
    slider2slide.eq(slider2nextIdx).fadeIn();
    slider2currentIdx = slider2nextIdx;
  }



  //section : event 스크립트
  
  $(".event_img_conts").mouseover(function(){
    $(this).toggleClass('on');
    $(this).find(".event_img_desc2").css("padding-left","30px");
    $(this).find(".icon-caret-right-fill").css("opacity","100");
  });
  $(".event_img_conts").mouseout(function(){
    $(this).removeClass('on');
    $(this).find(".event_img_desc2").css("padding-left","0");
    $(this).find(".icon-caret-right-fill").css("opacity","0");
  });















});