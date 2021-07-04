$(document).ready(function() {
 $(window).on('scroll', function() {

    if ($(window).scrollTop() + $(window).height() > 1200) {
      $('.bounce_arrow').hide();
    } else {
      $('.bounce_arrow').show();
    }
  });


  $('.bounce_arrow').click( function(){
      // document.querySelector('.download_map_button').scrollIntoView({ behavior: 'smooth' });
$('html, body').animate({
          scrollTop: $('.safety_measures').offset().top+50
        }, 1000);
  });

});