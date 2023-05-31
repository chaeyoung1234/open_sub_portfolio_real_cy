/*subevent ajax 소설 */

$.ajax({
    method: "POST",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"소설", size:12 },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    var slide = $(".re_slide1 ul li");

    for(var i=0; i<slide.length; i++){

        var document=msg.documents[i]; 

        $(slide).eq(i).find("img").attr("src", document.thumbnail);
        $(slide).eq(i).find("p").text(document.title);

    }

});

/*subevent ajax 고전*/

$.ajax({
    method: "POST",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"고전", size:12 },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    var slide = $(".re_slide2 ul li");

    for(var i=0; i<slide.length; i++){

        var document=msg.documents[i]; 

        $(slide).eq(i).find("img").attr("src", document.thumbnail);
        $(slide).eq(i).find("p").text(document.title);

    }

});

/*subevent ajax 서양*/

$.ajax({
    method: "POST",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"서양", size:12 },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    var slide = $(".re_slide3 ul li");

    for(var i=0; i<slide.length; i++){

        var document=msg.documents[i]; 

        $(slide).eq(i).find("img").attr("src", document.thumbnail);
        $(slide).eq(i).find("p").text(document.title);

    }

});