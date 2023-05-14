// 選音樂
$(".header_music_active").click(function(){
    $(".header_music_list").slideToggle(300);
})

$(document).click(function (event) {
    var musicArea = $(".header_music");
    if (!musicArea.is(event.target) && musicArea.has(event.target).length === 0) {
        $(".header_music_list").slideUp(300);
    }
});

var music = document.getElementById("bgMusic");
$(".header_music_item").click(function(){
    let musicName = $(this).text();
    let musicSrc = "./public/mp3/" + $(this).data("music");
    $(".header_music_name").text(musicName);
    $(".header_music_list").slideUp(300);
    $(".bg-music").attr("src",musicSrc);
    $(this).addClass("active").siblings(".header_music_item").removeClass("active");
    $(".header_musicStart").removeClass("musicPause");
    music.pause();
})

$(".header_musicStart").click(function(){
    if($(this).hasClass("musicPause")) {
        $(this).removeClass("musicPause");
        music.pause();
    }else {
        $(this).addClass("musicPause");
        music.play();
    }
})

// 我要祈福
$(".btn-pray").click(function(){
    $(".pray-form").addClass("active");
})
$(".pray-form_close").click(function() {
    $(".pray-form").removeClass("active");
})

// 選擇祈福神明
$(".select-model").change(function(){
    let model = $(this).val();
    $(model).addClass("active").siblings(".model_pic").removeClass("active");
})

// 祈福的話
$(".pray-submit").click(function(){
    if($(".pray-content").val()==""){
        $(".pray-form_alert").show();
    }else {
        // 動畫
        let prayName = $(".pray_name").val();
        let prayContent = $(".pray-content").val();
        let outputName = $("<h3></h3>").text(prayName);
        let outputContent = $("<p></p>").text(prayContent);
        $(".pray-form").removeClass("active");
        $(".header").fadeOut(500).delay(6300).fadeIn(800);
        $(".footer").fadeOut(500).delay(6300).fadeIn(800);
        $(".btn-pray").fadeOut(500).delay(6300).fadeIn(800);
        $("html, body").animate({scrollTop: 0},500);
        $(".pray-content_output").empty();
        $(".pray-content_output").delay(800).fadeIn(800).append(outputName, outputContent).delay(5500).fadeOut(800);
        // $(".hand").addClass("active");
        $(".hand").show().delay(5000).hide(300);
        $(".fragrant").fadeOut().delay(4300).fadeIn(500);
        $(".baibai").delay(5000).fadeIn(500).delay(5000).fadeOut(500);
        $(".marquee").addClass("active");
        $(".marquee_name").text(prayName);
        $(".marquee_p").text(prayContent);

        // 表單資料清空
        $(".pray_name").val("");
        $(".pray_mail").val("");
        $(".select-model").val("#model-1");
        $(".pray-content").val("");
    }
})

$(".pray-content").keyup(function(){
    if($(".pray-content").val()!==""){
        $(".pray-form_alert").hide();
    }
})


