/*추천 도서 re_slide1*/ 

$(function(){

    $(".sub1_prev").click(function(){
        $(".re_slide1 li:last").prependTo(".re_slide1 ul")
        $(".re_slide1 ul").css({marginLeft: -140})
        $(".re_slide1 ul").stop().animate({marginLeft:0})
    })

    $(".sub1_next").click(function(){
        $(".re_slide1 ul").stop().animate({marginLeft:-140}, function(){
            $(".re_slide1 li:first").appendTo(".re_slide1 ul")
            $(".re_slide1 ul").css({marginLeft:0})
        })
    })
})

setInterval(slide,2000); 

function slide(){
    $(".re_slide1 ul").stop().animate({marginLeft:-140},function(){
        $(".re_slide1 li:first").appendTo(".re_slide1 ul");
        $(".re_slide1 ul").css({marginLeft:0}); 
    }); 
}

/*추천 도서 re_slide2*/ 
$(function(){

    $(".sub2_prev").click(function(){
        $(".re_slide2 li:last").prependTo(".re_slide2 ul")
        $(".re_slide2 ul").css({marginLeft: -140})
        $(".re_slide2 ul").stop().animate({marginLeft:0})
    })

    $(".sub2_next").click(function(){
        $(".re_slide2 ul").stop().animate({marginLeft:-140}, function(){
            $(".re_slide2 li:first").appendTo(".re_slide2 ul")
            $(".re_slide2 ul").css({marginLeft:0})
        })
    })
})

setInterval(slide1,2000); 

function slide1(){
    $(".re_slide2 ul").stop().animate({marginLeft:-140},function(){
        $(".re_slide2 li:first").appendTo(".re_slide2 ul");
        $(".re_slide2 ul").css({marginLeft:0}); 
    }); 
}

/*추천 도서 re_slide3*/
$(function(){

    $(".sub3_prev").click(function(){
        $(".re_slide3 li:last").prependTo(".re_slide3 ul")
        $(".re_slide3 ul").css({marginLeft: -140})
        $(".re_slide3 ul").stop().animate({marginLeft:0})
    })

    $(".sub3_next").click(function(){
        $(".re_slide3 ul").stop().animate({marginLeft:-140}, function(){
            $(".re_slide3 li:first").appendTo(".re_slide3 ul")
            $(".re_slide3 ul").css({marginLeft:0})
        })
    })
})

setInterval(slide3,2000); 

function slide3(){
    $(".re_slide3 ul").stop().animate({marginLeft:-140},function(){
        $(".re_slide3 li:first").appendTo(".re_slide3 ul");
        $(".re_slide3 ul").css({marginLeft:0}); 
    }); 
}
