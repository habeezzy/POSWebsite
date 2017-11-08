$(document).ready(function() {
  //--------------------------------
  $("#home_icon").hide();
  $("#cart_container").hide();

  $("#cart_icon").on("click", function(){
    $("#cart_icon").hide(500);
    $("#home_icon").show();
    $("#cart_container").show(500);
  });

  $("#home_icon").on("click", function(){
    $("#home_icon").hide(500);
    $("#cart_icon").show();
    $("#cart_container").hide(500);
  });
  //--------------------------------
});


//BUGS
//double click on shopping cart and home makes them both dissappear
