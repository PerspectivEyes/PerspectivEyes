// add class active to nav a on scroll
var scrollPos = $(document).scrollTop() + 100;
$('nav .nav_list ul li a').each(function () {
  var currLink = $(this);
  var refElement = $(currLink.attr("href"));
  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    $('nav .nav_list ul li a').removeClass("active");
    currLink.addClass("active");
  }
});

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'v34hR3bfkfo',
      events: {
          'onReady': onPlayerReady
      }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
}