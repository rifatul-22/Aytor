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
    $('#counter_time').countdown('2023/01/30', function(event) {
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
          $('#backToTop').show(400);
      }else{
          $('#backToTop').hide(400);
      }
  })
  $('#backToTop').on('click', function(){
      $('html, body').animate({
          scrollTop: 0
      })
  })
  //Counter Up Js 
  $('.counter').counterUp();
  // leadershipe slick activation 
  $('.leadershipe_card').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 4
  });
  // instagrame slider activation
  $('.instagram_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'instagram_slider_dots',
    autoplay: true,
    slidesToShow: 6
  });
  //leadershipe_info_slider activation
  $('.leadershipe_info_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    asNavFor: '.leadershipe_info_slider_nav'
  });
  $('.leadershipe_info_slider_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.leadershipe_info_slider',
    arrows: false,
    dots: true,
    dotsClass: 'leadershipe_info_slider_nav_dots',
    centerMode: true,
    focusOnSelect: true
  });
  // zoom pluging activation 
  $(".xzoom").xzoom();

  // products details activation
  $('.product_details_slider_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product_details_slider_nav'
  });
  $('.product_details_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_details_slider_img',
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true
  });
  // filterizr activation
  $('.product_customer_review_text').filterizr();

  $('.product_customer_review_menu li').on('click', function(){
    $(this).addClass('active_menu');
    $(this).siblings().removeClass('active_menu');  
  })
  // Product Releted Slider Activation
  $('.product_releted_slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 4
  });
})

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

new VenoBox({
  selector: '.my-video-links',
});