$(function(){
/////////////////////start/////////////////////
$("#myWeb").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'm09'],
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index)
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on")
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on")
    },


});


$("#intro").YTPlayer({
    videoURL:'L7OHcBdM6Lk',
    containment:'.m01',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    useOnMobile:true,
    // realfullscreen:true,
    // anchor:'center,center',
    // ratio:'auto',
});
//pofol video control
$("#portfolio_01").YTPlayer({
    containment:'.portfolio_01',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$(".m02 .xi-pause").on("click",function(){
    $('#portfolio_01').YTPPause();
});
$(".m02 .xi-play").on("click",function(){
    $('#portfolio_01').YTPPlay();
});

//pofol video control
$("#portfolio_02").YTPlayer({
    containment:'.portfolio_02',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$(".m03 .xi-pause").on("click",function(){
    $('#portfolio_02').YTPPause();
});
$(".m03 .xi-play").on("click",function(){
    $('#portfolio_02').YTPPlay();
});

//pofol video control
$("#portfolio_03").YTPlayer({
    containment:'.portfolio_03',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$(".m04 .xi-pause").on("click",function(){
    $('#portfolio_03').YTPPause();
});
$(".m04 .xi-play").on("click",function(){
    $('#portfolio_03').YTPPlay();
});

//pofol video control
$("#portfolio_04").YTPlayer({
    containment:'.portfolio_04',
    autoPlay:true,
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$(".m05 .xi-pause").on("click",function(){
    $('#portfolio_04').YTPPause();
});
$(".m05 .xi-play").on("click",function(){
    $('#portfolio_04').YTPPlay();
});

//photo_slider 슬라이드
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
});


$(".m07 i.xi-angle-left-thin").on("click",function(){
    $(".photo_slider").slick("slickPrev")
})
$(".m07 i.xi-angle-right-thin").on("click",function(){
    $(".photo_slider").slick("slickNext")
})


//full windows open
$("#header i, .m09 img").on("click", function(){
    $("#full").addClass("on")
})
$("#full i , #full a").on("click", function(){
    $("#full").removeClass("on")
})


/////////////////////end/////////////////////
});