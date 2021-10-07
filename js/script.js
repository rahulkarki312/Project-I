$(window).on('load', function () {
    $('#status').fadeOut(100);
    $('#preloader').delay(450).fadeOut();
});

$(document).ready(function () {
    $(".project-div").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: false,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });
});

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

// parallax
const parallax = document.getElementById('teams-bg');

window.addEventListener("scroll", function(){
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY=offset*0.48+"px";
})

const parallax_2= document.getElementById('testimonials-div');

window.addEventListener("scroll", function(){
      let offset = window.pageYOffset;
      parallax_2.style.backgroundPositionY=offset*0.7+"px";
})





// likeBtn function

// $(document).ready(function(){
//     var iconHover = $('#likeIcon-1,#likeIcon-2, #likeIcon-3' )
//     $('.likeBtn').hover(function(){
//         iconHover.removeClass("far");
//         iconHover.addClass("fas");
//     }, function(){
//         iconHover.removeClass("fas");
//         iconHover.addClass("far");
//     })
// })

function toggle1(){
    var icon1 = $('#likeIcon-1' )
    if(icon1.hasClass("far")){
        icon1.removeClass("far");
        icon1.addClass("fas");
    }
   else{
     icon1.removeClass("fas");
     icon1.addClass("far");
 }
}
function toggle2(){
    var icon2 = $('#likeIcon-2' )
    if(icon2.hasClass("far")){
        icon2.removeClass("far");
        icon2.addClass("fas");
    }
   else{
     icon2.removeClass("fas");
     icon2.addClass("far");
 }
}
function toggle3(){
    var icon3 = $('#likeIcon-3' )
    if(icon3.hasClass("far")){
        icon3.removeClass("far");
        icon3.addClass("fas");
    }
   else{
     icon3.removeClass("fas");
     icon3.addClass("far");
 }
}




