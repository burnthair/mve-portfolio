$(document).ready(function() {
  // Apply lettering() to the name title
  $("#name-title").lettering();
  $(window).scroll(function() {
    var winTop = $(window).scrollTop(),
    docHeight = $('body').height(),
    winHeight = $(window).height();
    var totalScroll = (winTop/(docHeight-winHeight))*100;
    $(".KW_progressBar").css("height",totalScroll+"%");
  });
  $(".side-nav").hover(
    function() {
      $(".side-nav-link").fadeIn(400);
    },
    function() {
      $(".side-nav-link").fadeOut(400);
    }
  );
  $(".demo-box").click(function() {

  });
});
