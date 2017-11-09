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
  $("#i1").html("<p>" + one.name + "<br/>" + "$" + one.price + ".00" + "<h4>" + one.category + "<br>" + one.description + "</h4></p>");

  const two = new objectCreator("Hat2","Formal","Its real nice.", 50);
  $("#i2").html("<p>" + two.name + "<br/>" +  "$" + two.price + ".00"  + "<p>");

  const three = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i3").html("<p>" + three.name + "<br/>" +  "$" + three.price + ".00"  + "<p>");

  const four = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i4").html("<p>" + four.name + "<br/>" +  "$" + four.price + ".00"  + "<p>");

  const five = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i5").html("<p>" + five.name + "<br/>" +  "$" + five.price + ".00"  + "<p>");

  const six = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i6").html("<p>" + six.name + "<br/>" +  "$" + six.price + ".00"  + "<p>");

  const seven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i7").html("<p>" + seven.name + "<br/>" +  "$" + seven.price + ".00"  + "<p>");

  const eight = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i8").html("<p>" + eight.name + "<br/>" +  "$" + eight.price + ".00"  + "<p>");

  const nine = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i9").html("<p>" + nine.name + "<br/>" +  "$" + nine.price + ".00"  + "<p>");

  const ten = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i10").html("<p>" + ten.name + "<br/>" +  "$" + ten.price + ".00"  + "<p>");

  const eleven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i11").html("<p>" + eleven.name + "<br/>" +  "$" + eleven.price + ".00"  + "<p>");

  const twelve = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i12").html("<p>" + twelve.name + "<br/>" +  "$" + twelve.price + ".00"  + "<p>");

  var price;

$(".wrap").on("click", function() {
  //$(".container p h4").hide();
  $("#info_popup").show(300);
  var popupDisplay = $(this).children(".item");
$("#stuff").html(popupDisplay.clone());
$("#x_div").html("<img src = 'Images/closeicon.png'/>");
});

$("#x_div").on("click", function() {
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
