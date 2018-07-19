$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 300);
    }, 200);

    $('.car-parts').click(function() {
        $('.parts').fadeToggle(100);
    });

    $(".active").mouseover(function(){
        $(".active").removeClass("active");
    });

    /*хотела чтобы li после mouseleave вправо-влево остается подсвеченной, не работает

    $("li").mouseleave(function () {
        $("this").addClass("permahover");
        $("li .nextSibling").removeClass("permahover");
    });*/

});

let carList = [{

    class: "mini-clear.jpg",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}, {

    class: "middle-clear.jpg",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}, {

    class: "premium-clear.jpg",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}];

$(".calculate").hover(function(){
    let c = $(this).index();
    $(".class").attr("src", carList[c]);
});

/* если включить, ломается логика 11-13 строки

$(".type li").hover(function(){
    let t = $(this).index();
    $(".class").attr("src", carList[c].type[t]);
});

$(".parts li").hover(function(){
    let p = $(this).index();
    $(".class").attr("src", carList[c].parts[p]);
});*/