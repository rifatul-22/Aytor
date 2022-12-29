$(function(){
  // banner slider activation
    $('.banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'banner_slider_dots',
      autoplay: true
    });
    // cream banner activation
    $('.cream_banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'cream_banner_slider_dots',
      autoplay: true,
      slidesToShow: 2
    });

    // latest news card slider activation
    $('.card_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'card_slider_dots',
      autoplay: true,
      slidesToShow: 4
    });
    // Products slider activation
    $('.new_products_slider').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      slidesToShow: 4
    });
    // Time Countdown activation
    $('#counter_time').countdown('2022/12/31', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="counter_time_item"><span>%d</span><span>Days</span></div>'
        + '<span class="clon">:</span>'
        + '<div class="counter_time_item"><span>%H</span><span>Hour</span></div>'
        + '<span class="clon">:</span>'
        + '<div class="counter_time_item"><span>%M</span><span>Minute</span></div>'
        + '<span class="clon">:</span>'
        + '<div class="counter_time_item"><span>%S</span><span>Sec</span></div>'
      ));
    });

    $(window).on('scroll', function(){
      var navScroll = $(window).scrollTop();

      //BackToTop
      if(navScroll > 500){
          $('#backToTop').show(500);
      }else{
          $('#backToTop').hide(500);
      }
  })
  $('#backToTop').on('click', function(){
      $('html, body').animate({
          scrollTop: 0
      })
  })
})