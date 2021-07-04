$(document).ready(function() {
 $(window).on('scroll', function() {

    if ($(window).scrollTop() + $(window).height() > 1200) {
      $('.bounce_arrow').hide();
    } else {
      $('.bounce_arrow').show();
    }
  });


  $('.bounce_arrow').click( function(){
      //scroll down to the park_schedule on the park map page.  css / js animation example lsheed
      $('html, body').animate({
          scrollTop: $('.park_schedule_container').offset().top
        }, 1000);
  });

});