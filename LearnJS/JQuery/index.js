// jQuery()
// $(document).ready(function() {
//  ...
// })

$("h1").addClass("big-title margin50");
$("h1").hasClass("margin50");

$("h1").text("Bye");
$("button").html("<em>Hey</em>");

//-----------------------------------------------------------------------

$("img").attr("src","https://cdn.pixabay.com/photo/2023/09/30/17/13/coffee-beans-8286087_1280.jpg");
$("a").attr("href");
$("h1").attr("class");

//-----------------------------------------------------------------------

$("h1").click(function() {
    $("h1").removeClass("margin50");
    $("img").attr("src","https://cdn.pixabay.com/photo/2017/03/28/16/30/cat-2182624_640.jpg");
})

//-----------------------------------------------------------------------

for (let i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "yellow";
    })
}

$("button").click(function() {
    $("h1").css("color","yellow");
})

//-----------------------------------------------------------------------

$(document).keypress(function(e) {
    console.log(e.key);
    $("h1").text(e.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
})

$("h1").on("mouseleave", function() {
    $("h1").css("color", "yellow");
})

//-----------------------------------------------------------------------

$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");

// .hide() .show() .toggle() .fadeIn() .fadeOut() .fadeToggle()
// .slideUp() .slideDown() .slideToggle()
// .animate({opacity: 0.5})