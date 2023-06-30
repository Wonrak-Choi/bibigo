// 돋보기 클릭시 메뉴 이벤트
$(function(){
    $(".search>a>i").click(function(){
        $('.search_box').slideToggle(100);
    });
});
// 자주 묻는 질문 슬라이드
$(function(){
    $(".faq>div>h3").click(function(){
        $(this).next("p").slideToggle(200);
        // 다른 답변 닫기
        $(this).parent("div").siblings("div").children("p").slideUp(200);
    });
});
// 월드맵 애니메이션
setInterval(function() {
    $(".korea").animate({ fontSize: '18px' ,width: '80px', height: '80px',lineHeight: '80px',opacity: '1' }, 1000)
        .animate({ fontSize: '16px', width:'70px',height:'70px',lineHeight: '70px',opacity:'0.95' }, 1000);
}, 0);
setInterval(function() {
    $(".green_circle").animate({width: '120px', height: '120px',opacity: '0.5' }, 1000)
        .animate({width:'110px',height:'110px',opacity:'0.4' }, 1000);
}, 0);
setInterval(function() {
    $(".green_circle2").animate({width: '170px', height: '170px',opacity: '0.4' }, 1000)
        .animate({width:'160px',height:'160px',opacity:'0.3' }, 1000);
}, 0);
setInterval(function() {
    $(".green_circle3").animate({width: '210px', height: '210px',opacity: '0.3' }, 1000)
        .animate({width:'200px',height:'200px',opacity:'0.2' }, 1000);
}, 0);

// a태그 이벤트 제거
$('a[href="#"]').on('click',function(e){
    e.preventDefault();
});


// GNB 메뉴 호버효과
$('.gnb>li').hover(function(){
    // mouseenter()시 이벤트 리스너
    $(this).children().next("dl").css({
        display:"block",backgroundColor: "#fff", padding: "12px",width: "120px", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px"
    });
},function(){
    // mouseleave()시 이벤트 리스너
    $(this).children().next("dl").hide(200);
});

// GNB 메뉴 스크롤시 CSS적용
$(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition > 90) {
      $('.header').addClass('header-scrolled');
    } else {
      $('.header').removeClass('header-scrolled');
    }
});

// 동영상제어
var video = $('#video');
var btn = $('#video_btn');
btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>')
    }else{
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>')
    }
})
// 동영상 재생 처음에 보였다가 안보이게 하기위해 hover씀
btn.hover(
    function() {
        $(this).css('opacity', '0.8'); // 마우스 진입 시 투명도 조절
    },
    function() {
        $(this).css('opacity', '0'); // 마우스 이탈 시 투명도 원래대로 복원
    }
);