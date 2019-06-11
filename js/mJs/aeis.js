$(function () {
    //锚链接
    $(".titleAll a").click(function () {
        $(".titleAll a").removeClass("sel")
        $(this).addClass("sel")
    })
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop <= 130) {
            $(".titleAll a").removeClass("sel").eq(0).addClass("sel")
        }
    });
    /*点击锚链接滑行至相应位置*/
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000); //jquery animate
    });

    //导航
    var num = 0;
    $('.mHead .nav').click(function(){
        num++;
        if(num%2 == 1){
            $('.menu_list').css('display','block');
        }else{
            $('.menu_list').css('display','none');
        }
    })

    //高度
    var height=$(".aeis .con").height();
    $(".aeis .inBox").height((height*0.9)+'px')
    var height1=$(".pinpai .con").height();
    $(".pinpai .inBox").height((height1*0.6)+'px')

    //brand课程切换
    $(".kcNav .navList").eq(0).addClass("navListOn")
    $(".kcNav .navList").click(function () {
        var index=$(this).index();
        if(index==0){
            $('.kcCon').css('display','none');
            $(".univer").css("display",'block');
        }else if(index==1){
            $('.kcCon').css('display','none');
            $(".pri").css("display",'block');
        }else{
            $('.kcCon').css('display','none');
            $(".master").css("display",'block');
        }
        $(".kcNav .navList").removeClass("navListOn")
        $(this).addClass("navListOn")
    })
    //sat机构切换
    $(".comNav .comList").eq(0).addClass("comListOn")
    $(".comNav .comList").click(function () {
        var index=$(this).index();
        if(index==0){
            $('.comCon').css('display','none');
            $(".com").css("display",'block');
        }else{
            $('.comCon').css('display','none');
            $(".sanli").css("display",'block');
        }
        $(".comNav .comList").removeClass("comListOn")
        $(this).addClass("comListOn")
    });
})