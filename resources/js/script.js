$(document).scroll(function(){
  if ($(document).scrollTop() < 100) {
    $('.navbar').css("background-color", "transparent");
    $('.navbar img').css("padding-top", "20px");
    $('.navi').css("padding-top" , "20px");

  }
  else {
    $('.navbar').css("background-color", "rgba(16,16,16, 1)");
    $('.navi').css("padding-top" , "0px");
    $('.navi').css("margin-bottom" , "0px");
    $('.navbar img').css("padding-top", "0px");

  }
});
