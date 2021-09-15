$(function(){
/////////////////////start/////////////////////
$("#myWeb").fullpage({
    anchors:['m00', 'm01', 'm02', 'm03', 'm04', 'm05'],
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on")
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on")
    },
});

$("#intro").YTPlayer({
    videoURL:'EZ7la-hMNuk',
    containment:'.m00',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    useOnMobile:true,
});

//pofol video control 01
$("#portfolio_01").YTPlayer({
    containment:'.portfolio_01',
    autoPlay:true,
    mute:true,
    showControls:false,
    optimizeDisplay:false,
    realfullscreen:true,
    playOnlyIfVisible:true,
});
$(".m01 .xi-pause").click(function(){
    $('#portfolio_01').YTPPause();
});
$(".m01 .xi-play").click(function(){
    $('#portfolio_01').YTPPlay();
});
$('.m01 .xi-volume-up').on("click",function(){
    $('#portfolio_01').YTPToggleVolume();
    $(this).toggleClass("on")
})


//pofol video control 02
$("#portfolio_02").YTPlayer({
    containment:'.portfolio_02',
    autoPlay:true,
    mute:true,
    showControls:false,
    optimizeDisplay:false,
    realfullscreen:true,
    playOnlyIfVisible:true,
});
$(".m02 .xi-pause").on("click",function(){
    $('#portfolio_02').YTPPause();
});
$(".m02 .xi-play").on("click",function(){
    $('#portfolio_02').YTPPlay();
});
$('.m02 .xi-volume-up').on("click",function(){
    $('#portfolio_02').YTPToggleVolume();
    $(this).toggleClass("on")
})


//pofol video control 03
$("#portfolio_03").YTPlayer({
    containment:'.portfolio_03',
    autoPlay:true,
    mute:true,
    showControls:false,
    optimizeDisplay:false,
    realfullscreen:true,
    playOnlyIfVisible:true,
});
$(".m03 .xi-pause").on("click",function(){
    $('#portfolio_03').YTPPause();
});
$(".m03 .xi-play").on("click",function(){
    $('#portfolio_03').YTPPlay();
});
$('.m03 .xi-volume-up').on("click",function(){
    $('#portfolio_03').YTPToggleVolume();
    $(this).toggleClass("on")
})


//video_slider 슬라이드
$(".video_slider").slick({
    arrows:false,
    dots:true,
    mute:true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode:true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
});


$(".m04 i.xi-angle-left-thin").on("click",function(){
    $(".video_slider").slick("slickPrev")
})
$(".m04 i.xi-angle-right-thin").on("click",function(){
    $(".video_slider").slick("slickNext")
})


//full windows open
$("#header i, .m05 img").on("click", function(){
    $("#full").addClass("on")
})
$("#full i , #full a").on("click", function(){
    $("#full").removeClass("on")
})


$("#header .xi-bars").click(function(){
    $.fn.fullpage.setAllowScrolling(false);
})
$("#full .xi-close, #full a").click(function(){
    $.fn.fullpage.setAllowScrolling(true);
})

/////////////////////end/////////////////////
});