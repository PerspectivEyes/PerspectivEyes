function scroll_style() {
   var window_top = $(window).scrollTop();
   var div_top = $('.anchor-point').offset().top;

   if (window_top > div_top){
      $('.main').css("background-color", "white");
   }
   if (window_top < div_top){
      $('.main').css("background-color", "#white");
   }
}
$(function() {
  $(window).scroll(scroll_style);
  scroll_style();
 });
