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
});
$(".m01 .xi-pause").on("click",function(){
    $('#portfolio_01').YTPPause();
});
$(".m01 .xi-play").on("click",function(){
    $('#portfolio_01').YTPPlay();
});

//pofol video control 02
$("#portfolio_02").YTPlayer({
    containment:'.portfolio_02',
    autoPlay:true,
    mute:true,
    showControls:false,
    optimizeDisplay:false,
    realfullscreen:true,
});
$(".m02 .xi-pause").on("click",function(){
    $('#portfolio_02').YTPPause();
});
$(".m02 .xi-play").on("click",function(){
    $('#portfolio_02').YTPPlay();
});

//pofol video control 03
$("#portfolio_03").YTPlayer({
    containment:'.portfolio_03',
    autoPlay:true,
    mute:true,
    showControls:false,
    optimizeDisplay:false,
    realfullscreen:true,
});
$(".m03 .xi-pause").on("click",function(){
    $('#portfolio_03').YTPPause();
});
$(".m03 .xi-play").on("click",function(){
    $('#portfolio_03').YTPPlay();
});


//video_slider 슬라이드
$(".video_slider").slick({
    arrows:false,
    dots:true,
    mute:true,
    slidesToShow: 2,
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

//video01
$("#video01").YTPlayer({
    containment:'self',
    autoPlay:false,
    mute:true,
    showControls:true,
    optimizeDisplay:false,
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


/////////////////////end/////////////////////
});