
$(window).load(function(){
  console.log("i'm in");
  $(window).scroll(function() {
    var winTop = $(window).scrollTop(),
    docHeight = $('article').height(),
    winHeight = $(window).height();
    console.log(winTop);
    var totalScroll = (winTop/(docHeight-winHeight))*100;
    console.log("total scroll" + totalScroll);
    $(".KW_progressBar").css("width",totalScroll+"%");
  });

});
// $(document).ready(function() {
// // Apply lettering() to the name title
//   $("#name-title").lettering();
//   $(".demo-box").click(function() {
//
//   });
// });
