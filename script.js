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
  $("#i1").text(one.name + one.price);

  const two = new objectCreator("Hat2","Formal","Its real nice.", 50);
  $("#i2").text(two.name + two.price);

  const three = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i3").text(three.name + three.price);

  const four = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i4").text(four.name + four.price);

  const five = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i5").text(five.name + five.price);

  const six = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i6").text(six.name + six.price);

  const seven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i7").text(seven.name + seven.price);

  const eight = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i8").text(eight.name + eight.price);

  const nine = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i9").text(nine.name + nine.price);

  const ten = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i10").text(ten.name + ten.price);

  const eleven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i11").text(eleven.name + eleven.price);

  const twelve = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#i12").text(twelve.name + twelve.price);

  var price;


$(".wrap").on("click", function() {
  $("#info_popup").show(300);
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
