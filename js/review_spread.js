/*review1*/

$(function(){

    $.get("./text/text1", function(data){

        $(".end6").html(data); 

    })

}); 

/*review1*/

$(function(){
    $(".text").click(function(){
        $(".end6").show(); 
        $(".text").hide(); 
        $(".text1").show(); 
    })

    $(".text1").click(function(){
        $(".end6").hide(); 
        $(".text1").hide(); 
        $(".text").show(); 
    })

})



