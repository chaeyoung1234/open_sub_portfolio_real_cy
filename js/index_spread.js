/*index*/

$(function(){
    $(".spread2 p").eq(0).click(function(){
        $(".end3").show();
        $(".spread2 p").eq(0).hide(); 
        $(".spread2 p").eq(1).show(); 
    })

    $(".spread2 p").eq(1).click(function(){
        $(".end3").hide(); 
        $(".spread2 p").eq(1).hide(); 
        $(".spread2 p").eq(0).show(); 
    })

})

/*maintext*/ 

$(function(){
    $(".spread3 p").eq(0).click(function(){
        $(".end4").show();
        $(".spread3 p").eq(0).hide(); 
        $(".spread3 p").eq(1).show(); 
    })

    $(".spread3 p").eq(1).click(function(){
        $(".end4").hide(); 
        $(".spread3 p").eq(1).hide(); 
        $(".spread3 p").eq(0).show(); 
    })

})

/*저자 소개*/

$(function(){
    $(".spread4 p").eq(0).click(function(){
        $(".end5").show();
        $(".spread4 p").eq(0).hide(); 
        $(".spread4 p").eq(1).show(); 
    })

    $(".spread4 p").eq(1).click(function(){
        $(".end5").hide(); 
        $(".spread4 p").eq(1).hide(); 
        $(".spread4 p").eq(0).show(); 
    })

})

