$(document).ready(function() {
  // Apply lettering() to the name title
  $("#name-title").lettering();
  // Full opacity for silhouette
  $("#silhouette").fadeIn(1414);
  $("#silhouette1").fadeIn(555);
  $("#silhouette2").fadeIn(999);
  $("#silhouette1").fadeOut(999);
  $("#silhouette2").fadeOut(555);
  // Functionality for the bottom progress bar
  $(window).scroll(function() {
    var winTop = $(window).scrollTop(),
    docHeight = $('body').height(),
    winHeight = $(window).height();
    var totalScroll = (winTop/(docHeight-winHeight))*100;
    $(".KW_progressBar").css("width",totalScroll+"%");
  });
  // Functionality to fade in and out text on the side navigation bar
  $(".side-nav").hover(function() {
      $(".side-nav-hidden").fadeIn(400);
    }, function() {
      $(".side-nav-hidden").fadeOut(400);
    }
  );
  // Functionality to "light focus" the hovered demo box
  $(".demo-box").mouseenter(function() {
    $(".demo-box").css("z-index", "10")
    $(this).css("z-index","1000")
    $("#overlay").fadeTo(100, 0.3);
  }).mouseleave(function() {
    $("#overlay").fadeOut(100);
  });

});
