let communityLink = document.getElementById("organizations");
let joinCommunity = document.getElementById("join-community");
let startStartup = document.getElementById("start-button");

communityLink.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToCommunity();
})

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