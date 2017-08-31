$(document).ready(function() {
  // Apply lettering() to the name title
  $("#name-title").lettering();
  $(window).scroll(function() {
    var winTop = $(window).scrollTop(),
    docHeight = $('body').height(),
    winHeight = $(window).height();
    var totalScroll = (winTop/(docHeight-winHeight))*100;
    $(".KW_progressBar").css("width",totalScroll+"%");
  });
  $(".side-nav").hover(
    function() {
      $(".side-nav-link").fadeIn(400);
    },
    function() {
      $(".side-nav-link").fadeOut(400);
    }
  );
  $(".demo-box").mouseenter(function() {
    $(".demo-box").css("z-index", "10")
    $(this).css("z-index","1000")
    $("#overlay").fadeTo(100, 0.3);
  }).mouseleave(function() {
    $("#overlay").fadeOut(100);
  });
});
