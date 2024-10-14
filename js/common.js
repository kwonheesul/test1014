$(document).ready(function(){//실행틀 시작

 // 전체메뉴
 $(".all-wrap").hide();
  
 //.sitemap 을 클릭하면 다음과 같은 일이 일어남
 // .all-wrap 가 서서히 나와라
 $(".sitemap").click(function(){
   $(".all-wrap").fadeIn();
 });

 // .all-close 를 클릭하면 다음과 같은 일어남
 // .all-wrap 가 서서히 사라짐
 $(".all-close").click(function(){
   $(".all-wrap").fadeOut();
 });
 // 전체메뉴 끝



 //.depth2,.depth2_bg 를 숨겨라
 $(".depth2, .depth2-bg").hide();

 // .gnb > li  에 마우스가 들어가면 다음과 같은 일이 일어남
 /*
 1. depth2-bg 가 서서히 나와야 함
 2. 사용자가 선택한 .gnb > li 인 this 의 자식 .depth2 서서히 나와야 함

 *** 주의점 - mouseenter 동작은 반드시 stop() 걸어줘야 함
 */

 $(".gnb > li").mouseenter(function(){
   $(".depth2-bg").stop().fadeIn();
   $(this).children(".depth2").stop().fadeIn();
 });

 $(".gnb > li").mouseleave(function(){
   $(".depth2-bg").stop().fadeOut();
   $(this).children(".depth2").stop().fadeOut();
 });


 //모바일 메뉴
 // .ham 을 클릭햇을때 다음과 같은 일어남
 // .mgnb-wrap 의 css 중에 left 값이 0 으로 변경, 단 animate()함수 사용
 // $(선택자).animate({css 속성 : 값})

 $(".ham").click(function(){
   $(".mgnb-wrap").animate({
     "left" : "0"
   });
 });

 // .mgnb-close를 클릭하면 다음과 같은 일이 일어남
 // .mgnb-wrap 의 css 중에 left 값이 -100% 으로 변경, 단 animate()함수 사용
 $(".mgnb-close").click(function(){
   $(".mgnb-wrap").animate({
     "left" : "100%"
   });

   $(".mdepth2").hide();
   
 });

 // 모바일 2차메뉴
 $(".mdepth2").hide();
 $(".mgnb > li").click(function(){
   $(this).children(".mdepth2").slideDown();
   $(this).siblings().children(".mdepth2").slideUp();
 })







})//실행틀 끝