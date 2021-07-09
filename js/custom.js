$(function(){
    // scroll spy 
$(window).on('scroll', function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
      $('.navbar').addClass('navbg');
    }
    else{
      $('.navbar').removeClass('navbg');
    }
  });
  
  // animation scroll js
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          html_body.animate({
          scrollTop: target.offset().top - 95
          }, 1500);
          return false;
          }
        }
    });
  
  // back to top 
  $(window).on('scroll', function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 100){
      $('.back-to-top').fadeIn(500);
   }
    else{
      $('.back-to-top').fadeOut(500);
    }
  });
    
  // banner slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        fade:true,
        speed:2500,
        dots:true,
    });
    
    // team slider
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        speed:2500,
        dots:true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              }
            },
        ]
    });

    // clients slider
    $('.clients-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 800,
        arrows:false,
        speed:2500,
        dots:true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                }
              }
        ]
    });

    // testimonials slider
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        speed:2500,
        dots:true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }
            }
        ]
    });

});