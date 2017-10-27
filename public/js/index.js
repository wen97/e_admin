$(function(){
    //菜单点击
    $(".navItem").click(function(){
        $(this).addClass("navItemActive").siblings().removeClass("navItemActive");
        $(".navTip").html($(this).html());
        var index=$(".navItem").index($(this));
        if(index!=0){
            $(".menuCont").addClass("dispBlock");
            $(".menucontlist").eq(index-1).addClass("dispBlock").siblings().removeClass("dispBlock");
            $("#page-wrapper").addClass("mgl370");
            $(".menucontlist").eq(index-1).find($(".contlistItem")).removeClass("contlistItemActive").eq(0).addClass("contlistItemActive");
        }else{
            $(".menuCont").removeClass("dispBlock");
            $("#page-wrapper").removeClass("mgl370");
        }
        var url = $(this).data("url");
        // if($("#J_iframe").attr("src")!=url){
            $("#J_iframe").attr("src",url);
        // }
    });
    //二级菜单点击
    $(".contlistItem").click(function(){
        $(".contlistItem").not(this).removeClass("contlistItemActive");
        $(this).addClass("contlistItemActive");
        var url = $(this).data("url");
        // if($("#J_iframe").attr("src")!=url){
            $("#J_iframe").attr("src",url);
        // }
    })
    if ($(this).width() < 1281) {
        $("body").addClass("mini-navbar");
        $(".navbar-static-side").fadeIn();
        $(".navbar-static-side").find("img").css("margin-top","20px");
    }

});

$(window).bind("load resize", function () {
    if ($(this).width() < 1281) {
        $("body").addClass("mini-navbar");
        $(".navbar-static-side").fadeIn();
        $(".navbar-static-side").find("img").css("margin-top","20px");
    }else{
        $("body").removeClass("mini-navbar");
    }; 
});
