$(document).ready(function(){
    $('.circlechart').circlechart();

    var ht = $(window).height(); //브라우저에서 높이값 가져오기
    $('section').outerHeight(ht); //section에 높이값을 브라우저 높이값으로 넣기

    // 새로고침  
    $('.goto').hide();
    $('html, body').stop().animate({scrollTop:0});
    $('.gnb li').eq(0).addClass('on');

    // $('.goto')를 눌렀을때 $('html, body')의 scrollTop을 자연스럽게 0으로 올라가라
    // 메뉴 눌렀을때
    $('.goto').click(function(e){
        e.preventDefault(); //a태그의 링크 막아줌
        // var ht = $(window).height();
        // var i = $(this).index();//0 1 2 3
        // var chTop = i*ht;
        // console.log('c' + chTop);
        // $('html, body').stop().animate({scrollTop:chTop},1400);
        $('html, body').stop().animate({scrollTop:0},1400);
    });

    // 브라우저 리사이즈 될때 브라우저 높이값을 section높이값으로 갱신 .resize()
    $(window).on('resize',function(){
        ht = $(window).height(); //브라우저에서 높이값 가져오기
        $('section').outerHeight(ht); //section에 높이값을 브라우저 높이값으로 넣기
        // console.log(ht+'/'+$('section').height());
        $('html, body').stop().animate({scrollTop:0});
    });

    //스크롤을 내렸을 때
    $(window).scroll(function(){
        var scrollT = $(window).scrollTop();
        $('.scrollT').text(scrollT);
        $('.ht').text(ht);
        $('.nht').text(ht*2);

        for(var i = 0; i<4; i++){
            console.log('ww'+ht*(1+1));
            if(scrollT>=ht*i && scrollT<ht*(i+1)){
                $('.gnb li').removeClass('on');
                $('.gnb li').eq(i).addClass('on');
                $('section').eq(i).children('.htx_wrap').css({left:200, opacity:0}).stop().animate({left:300, opacity:1},2000)
            }
        }

        if(scrollT>=ht){
            //서서히 $('.goto')를 보임
            $('.goto').fadeIn();
        }else{
            //서서히 $('.goto')를 안보임
            $('.goto').fadeOut();
        }

    });


    // 원페이지 스크롤
    var sec = "section";
    $(sec).each(function (index) {
        var f = false;
        $(this).on("mousewheel", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
            } 
            else if (event.originalEvent){
                delta = -event.originalEvent / 3;
            }
            var moveTop = $(window).scrollTop();
            var location = $(sec).eq(index);
            
            // 마우스 휠 아래
            if (delta < 0) {
                f = true;
                if ($(location).next() != undefined) {
                    moveTop = $(location).next().offset().top;
                }
            } 
            //마우스 휠 위로
            else {
                f = true;
                if ($(location).prev() != undefined) {
                    moveTop = $(location).prev().offset().top;
                }
            }
            $("html,body").stop().animate({scrollTop: moveTop + 'px'},800, function (){f = false;});
        });
    });

//  e.pageX는 마우스무브이벤트에 자주 사용
   $('section').mousemove(function(e){
       var posX = e.pageX;
       var posY = e.pageY;
       console.log(posX+'/'+posY);
       //obj2
       $('.obj21').css({right:180-(posX/20), bottom:-480+(posY/20)});
       $('.obj22').css({right:130+(posX/50), bottom:-40+(posY/30)});
       //obj4
       $('.obj41').css({right:20-(posX/20), bottom:120-(posY/20)});
       $('.obj42').css({right:0+(posX/20), bottom:-180+(posY/20)});

   });

    // 메뉴를 눌렀을때
    $('.gnb li').click(function(){
        var i = $(this).index();
        var chTop = ht*i;
        console.log(i);

        // $('html, body').scrollTop(ht*i);
        $('html, body').stop().animate({scrollTop:ht*i},1400);
    });
})