/*책 소개*/

$(function(){
    $(".info_wrap .spread > p").eq(0).click(function(){
        $(".end1").show(); 
        $(".info_wrap .spread > p").eq(0).hide(); 
        $(".info_wrap .spread > p").eq(1).show(); 
    })

    $(".info_wrap .spread > p").eq(1).click(function(){
        $(".end1").hide(); 
        $(".info_wrap .spread > p").eq(1).hide(); 
        $(".info_wrap .spread > p").eq(0).show(); 
    })
})

/*출판사 서평*/

$(function(){
    $(".info_wrap .spread1 > p").eq(0).click(function(){
        $(".end2").show(); 
        $(".info_wrap .spread1 > p").eq(0).hide(); 
        $(".info_wrap .spread1 > p").eq(1).show(); 
    })

    $(".info_wrap .spread1 > p").eq(1).click(function(){
        $(".end2").hide(); 
        $(".info_wrap .spread1 > p").eq(1).hide(); 
        $(".info_wrap .spread1 > p").eq(0).show();

    })

})