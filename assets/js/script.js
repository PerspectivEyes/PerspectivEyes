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