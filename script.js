$(document).ready(function() {
  //--------------------------------
  $("#home_icon").hide();
  $("#cart_container").hide();
  $("#info_popup").hide();

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

  class objectCreator{
    constructor(name, category, description, price){
      this.name = name;
      this.category = category;
      this.description = description;
      this.price = price;
    }
  }
  //Creating objects
  const one = new objectCreator("Hat1","Formal","Its real nice.", 50);
  $("#i1").html("<p>" + one.name + "<br/>" + one.price + "<p>");

  const two = new objectCreator("Hat2","Formal","Its real nice.", 50);
  $("#i2").html("<p>" + two.name + "<br/>" + two.price + "<p>");

  const three = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i3").html("<p>" + three.name + "<br/>" + three.price + "<p>");

  const four = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i4").html("<p>" + four.name + "<br/>" + four.price + "<p>");

  const five = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i5").html("<p>" + five.name + "<br/>" + five.price + "<p>");

  const six = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i6").html("<p>" + six.name + "<br/>" + six.price + "<p>");

  const seven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i7").html("<p>" + seven.name + "<br/>" + seven.price + "<p>");

  const eight = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i8").html("<p>" + eight.name + "<br/>" + eight.price + "<p>");

  const nine = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i9").html("<p>" + nine.name + "<br/>" + nine.price + "<p>");

  const ten = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i10").html("<p>" + ten.name + "<br/>" + ten.price + "<p>");

  const eleven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i11").html("<p>" + eleven.name + "<br/>" + eleven.price + "<p>");

  const twelve = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i12").html("<p>" + twelve.name + "<br/>" + twelve.price + "<p>");

  var price;
  var popupDisplay = $(this).children(".item");

$(".wrap").on("click", function() {
  $("#info_popup").show(300);
  $("#info_popup").html( popupDisplay + ("<img src = 'Images/closeicon.png'/>"));
});

$("#info_popup img").on("click", function() {
  $("#info_popup").hide(300);
});



/*
  $(".wrap").on("click", function(){
var name_price = $(this).children(".item").text();
var price_only = name_price.slice(-2);
var name_only = name_price.substring(0, name_price.length - 2);
$("#cart_container").append(name_only + " " + price_only);
  });
*/



  //--------------------------------
});


//BUGS
//double click on shopping cart and home makes them both dissappear
