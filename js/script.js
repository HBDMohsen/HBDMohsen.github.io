var sf = new Snowflakes({
    color: "#ffd700",
    minSize: 20
});
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("name");
console.log(c);
if (c != null) {
    document.getElementById("name").innerHTML = c;
    document.getElementById("nae").innerHTML = c;
}
$(".main").fadeOut(1);
$('#play').click(function () {
    $(".loader").fadeOut(1500);
    $(".main").fadeIn("slow");
    sf.destroy();
    $('.balloon-border').animate({
        top: -500
    }, 8000);
    var audio = $('.song')[0];
    audio.play();

});

