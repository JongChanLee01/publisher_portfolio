$(document).ready(function(){
    // nav
    $('.header_gnb>li').mouseenter(function(){
        $(this).children('.sub_mu').stop().slideDown().css({'display':'flex'});
        $('.sub_back').stop().slideDown();
    });
 
    $('.header_gnb>li').mouseleave(function(){
        $(this).children('.sub_mu').stop().hide();
        $('.sub_back').stop().slideUp();
    });
    


    // 700px이하일때
    $(document).ready(function() {

        var mainSliderFn = function() {
        
          $(window).resize(function() {
            var winW = $(window).width();
            
            if(winW <= 700) {
              //서브메뉴 안보이게함
              $('.header_gnb>li').mouseenter(function(){
                  $(this).children('.sub_mu').css({'display':'none'});
                  $('.sub_back').css({'display':'none'});
              });

              $('.muOpen').click(function(){
                  $('.header_gnb').stop().show().animate({'right':'0%'});
              });
              $('.muClose').click(function(){
                  $('.header_gnb').stop().show().animate({'right':'-70%'});
              });
            }
          });
        };
        mainSliderFn();
        $(window).resize(function(){
          var winW = $(window).width();
          if(winW <= 468){
            $('main .main_screen img').css({'width':'800px','heigth':'300px'});
            $('.main_screen .slides li').css({'overflow':'hidden'})
            $('main .main_screen img').css({'margin-left':'-33%'});
          }
        });
        $(window).trigger('resize');
    });

    $('.slides').slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
        pauseOnFocus: false,
    });

    // $('.estimate_items').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4
    //   });
      
    //   var filtered = false;
      
    //   $('.js-filter').on('click', function(){
    //     if (filtered === false) {
    //       $('.filtering').slick('slickFilter',':even');
    //       $(this).text('Unfilter Slides');
    //       filtered = true;
    //     } else {
    //       $('.filtering').slick('slickUnfilter');
    //       $(this).text('Filter Slides');
    //       filtered = false;
    //     }
    // });
    $('.estimate_items').slick({
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnFocus: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 487,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    $('.animate').scrolla({

        // default 
        
        mobile: false,// disable animation on mobiles 
        
        once: false, // only once animation play on scroll 
        
    });
});