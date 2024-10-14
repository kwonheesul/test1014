$(document).ready(function(){//실행틀 시작

  $(window).on('load',function(){
    AOS.refresh();
  });


  // 메인 배너 슬라이드
  var mb = new Swiper(".mb", {

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type : "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".mb-play").hide();
  $(".mb-pause").click(function(){
    mb.autoplay.stop();
    $(".mb-pause").hide();
    $(".mb-play").show();
  });
  $(".mb-play").click(function(){
    mb.autoplay.start();
    $(".mb-pause").show();
    $(".mb-play").hide();
  });
  

  var fav_list = new Swiper(".mill_list", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop:true,
    direction: "vertical",
  });

  // 제품 슬라이드
  var prdList = new Swiper(".prd-list", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },


  });

  //탭메뉴 구현

  $(".teaware-tap-con li").hide();
  $(".teaware-tap-btn li").eq(0).addClass("active");
  $(".teaware-tap-con li").eq(0).show();

  $(".teaware-tap-btn li").click(function(){

    $(this).addClass("active").siblings().removeClass("active");

    //순서를 가져오는 index() - 사용자가 선택한 li 의 순번을 기억

    var indexNum = $(this).index();
    $(".teaware-tap-con li").eq(indexNum).fadeIn().siblings().hide();  
  
  });

  //아코디언 배너
  $("#museum ul li").eq(0).addClass("active");
  $("#museum ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });







})