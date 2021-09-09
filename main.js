$(function(){
/////////////////////start/////////////////////
$("#myWeb").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04'],
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index)
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on")
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on")
    },


});


$("#intro").YTPlayer({
    videoURL:'EZ7la-hMNuk',
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
    optimizeDisplay:false,
    realfullscreen:true,
});
$(".m02 .xi-pause").on("click",function(){
    $('#portfolio_01').YTPPause();
});
$(".m02 .xi-play").on("click",function(){
    $('#portfolio_01').YTPPlay();
});

/*slider_btn1*/
$(".m03 .slide_icon1 .xi-pause").on("click",function(){
    $('#video_01').YTPPause();
});
$(".m03 .slide_icon1 .xi-play").on("click",function(){
    $('#video_01').YTPPlay();
});
/*slider_bt2n*/
$(".m03 .slide_icon2 .xi-pause").on("click",function(){
    $('#video_02').YTPPause();
});
$(".m03 .slide_icon1 .xi-play").on("click",function(){
    $('#video_02').YTPPlay();
});
/*slider_btn3*/
$(".m03 .slide_icon3 .xi-pause").on("click",function(){
    $('#video_03').YTPPause();
});
$(".m03 .slide_icon3 .xi-play").on("click",function(){
    $('#video_03').YTPPlay();
});
/*slider_btn4*/
$(".m03 .slide_icon4 .xi-pause").on("click",function(){
    $('#video_04').YTPPause();
});
$(".m03 .slide_icon4 .xi-play").on("click",function(){
    $('#video_04').YTPPlay();
});
/*slider_btn5*/
$(".m03 .slide_icon5 .xi-pause").on("click",function(){
    $('#video_05').YTPPause();
});
$(".m03 .slide_icon5 .xi-play").on("click",function(){
    $('#video_05').YTPPlay();
});
/*slider_btn6*/
$(".m03 .slide_icon6 .xi-pause").on("click",function(){
    $('#video_06').YTPPause();
});
$(".m03 .slide_icon6 .xi-play").on("click",function(){
    $('#video_06').YTPPlay();
});
/*slider_btn7*/
$(".m03 .slide_icon7 .xi-pause").on("click",function(){
    $('#video_07').YTPPause();
});
$(".m03 .slide_icon7 .xi-play").on("click",function(){
    $('#video_07').YTPPlay();
});


$("#video_01").YTPlayer({
    containment:'#pf_video_01',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
    
});
$("#video_02").YTPlayer({
    containment:'#pf_video_02',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$("#video_03").YTPlayer({
    containment:'#pf_video_03',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$("#video_04").YTPlayer({
    containment:'#pf_video_04',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$("#video_05").YTPlayer({
    containment:'#pf_video_05',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$("#video_06").YTPlayer({
    containment:'#pf_video_06',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});
$("#video_07").YTPlayer({
    containment:'#pf_video_07',
    mute:true,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

//photo_slider 슬라이드
$(".video_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 1,
    autoplay: false,
    //autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
});


$(".m03 i.xi-angle-left-thin").on("click",function(){
    $(".video_slider").slick("slickPrev")
})
$(".m03 i.xi-angle-right-thin").on("click",function(){
    $(".video_slider").slick("slickNext")
})


//full windows open
$("#header i, .m04 img").on("click", function(){
    $("#full").addClass("on")
})
$("#full i , #full a").on("click", function(){
    $("#full").removeClass("on")
})


/////////////////////end/////////////////////
});