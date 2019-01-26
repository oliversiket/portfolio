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

/*
$(document).ready(function() {

    $(window).scroll( function(){

        $('.projecthead').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});
*/
