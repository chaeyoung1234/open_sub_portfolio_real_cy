function Movescroll(scroll){
    var scroll =$(scroll); 
    var scrollon = scroll.offset().top; 
    $('html, body').animate({scrollTop : scrollon -40},500)
}

$(function(){
    $(".sub_list li").click(function(){
        var index = $(this).index(); 
        $(".sub_list li").css({"backgroundColor" : "white","color": "#666"}); 
        $(".sub_list li").eq(index).css({"backgroundColor": "#888", "color": "white"}); 
    })

})