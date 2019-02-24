let joinCommunity = document.getElementById("join-community");
let startStartup = document.getElementById("start-button");

joinCommunity.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToCommunity();
})

startStartup.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToStartup();
})

const scrollToCommunity = () => {
  $('html, body').animate({
    scrollTop: $("#community").offset().top
  }, 500);
}

const scrollToStartup = () => {
  $('html, body').animate({
    scrollTop: $("#start").offset().top
  }, 500);
}

$(document).ready(function() {
    $(window).scroll(function() {

    if($(this).scrollTop() > 150) { 
        $('.colorlib-nav').addClass('solid');
    } else {
        $('.colorlib-nav').removeClass('solid');
    }
  });
});