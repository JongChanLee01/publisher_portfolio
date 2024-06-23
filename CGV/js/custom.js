$(document).ready(function(){
    // summary 
    var su_tx = $('.slides .get').html();
    $('.summary_wrap').append(su_tx);
    $('.get').hide();
    $('.slides li').click(function(){
        var path = $(this).attr('data-img');
        var slides_summary = $(this).find('.get').html();
        // console.log('img_cont 값 입니다 :'+img_cont);

        $('.s_img_wrap>img').attr('src',path);

        $('.summary_wrap>div:last-child').remove();
        $('.summary_wrap').append(slides_summary);

        $('main .summary_bg .bg').css({"background-image":"url('" + path + "')"});
        // console.log(a);
    });

    // gnb
    $('.sub_mu').hide();
    $('header .gnb>li').mouseenter(function(){
        $(this).children('.sub_mu').stop().slideDown();
    })
    $('header .gnb>li').mouseleave(function(){
        $(this).children('.sub_mu').stop().slideUp();
    })

    // main slide
    $('.slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
    });
    
    $('.movie_summary').mouseenter(function(){
        $(".slides").slick('slickPause');
    });
    $('.movie_summary').mouseleave(function(){
        $(".slides").slick('slickPlay');
    });

    // 슬라이드 이동 시 위에 보기도 슬라이드 목록중 첫번째로 보이게함
    $(".slides").on("afterChange", function(){
        var path = $('.slides .slick-current').attr('data-img');
        var slides_summary = $('.slides .slick-current').find('.get').html();
    
        $('.s_img_wrap>img').attr('src',path);
    
        $('.summary_wrap>div:last-child').remove();
        $('.summary_wrap').append(slides_summary);
    
        $('main .summary_bg .bg').css({"background-image":"url('" + path + "')"});

    });    

    //arrow hover
    $('.slick-arrow').mouseenter(function(){
        $(this).css({opacity:1});
    });
    $('.slick-arrow').mouseleave(function(){
        $(this).css({opacity:0.5});
    });

    // event_slide
    var event_cnt = $('.event_items');
    var event_w = event_cnt.children().outerWidth();
    var event_h = event_cnt.children().outerHeight();
    var event_l = event_cnt.children().length;
    var rollingId = setInterval(function(){rollingStart();},3000);

    event_cnt.mouseenter(function(){
        clearInterval(rollingId);
    });
    event_cnt.mouseleave(function(){
        rollingId = setInterval(function(){rollingStart();},3000);
    });
    function rollingStart(){
        event_cnt.css({width:event_w*event_l});
        event_cnt.css({height:event_h});

        //console.log("w"+event_w*event_l+"h"+event_h);

        event_cnt.stop().animate({left:-event_w},1500,function(){
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left",0);
        });
        
    }


    $('.animate').scrolla({
        once: false 
    });


    var ht=$(window).height(); 
    $('section').outerHeight(ht); 
    $('html,body').stop().animate({scrollTop:0}); 

    // resize
    // 리사이즈를 하면 윈도우 창을 늘리거나 줄이면
    // 자동으로 맨 위로 올라가도록 해주는 코드
    // 개인적으로는 없는것이 더 나은거 같긴함
    $(window).on('resize',function(){
        ht=$(window).height(); 
        $('section').outerHeight(ht); 
        $('html,body').stop().animate({scrollTop:0});
    });
    // scroll
    $(window).on("scroll",function(){	
        var scrollT=$(window).scrollTop();
        if(scrollT>=ht){
            $('.goto').fadeIn()
        }else{
            $('.goto').fadeOut()
        }   
    });
    $('.goto').hide();
    // goto
    $('.goto').click(function(){
        $('html,body').animate({scrollTop:0},680)
    })

});