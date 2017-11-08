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
  $("#1").text(one.name + one.category + one.description + one.price);

  const two = new objectCreator("Hat2","Formal","Its real nice.", 50);
  $("#2").text(two.name + two.category + two.description + two.price);

  const three = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#3").text(three.name + three.category + three.description + three.price);

  const four = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#4").text(four.name + four.category + four.description + four.price);

  const five = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#5").text(five.name + five.category + five.description + five.price);

  const six = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#6").text(six.name + six.category + six.description + six.price);

  const seven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#7").text(seven.name + seven.category + seven.description + seven.price);

  const eight = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#8").text(eight.name + eight.category + eight.description + eight.price);

  const nine = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#9").text(nine.name + nine.category + nine.description + nine.price);

  const ten = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#10").text(ten.name + ten.category + ten.description + ten.price);

  const eleven = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#11").text(eleven.name + eleven.category + eleven.description + eleven.price);

  const twelve = new objectCreator("Hat3","Formal","Its real nice.", 50);
  $("#12").text(twelve.name + twelve.category + twelve.description + twelve.price);

  var price ;

//  console.log($(".cart_button"));
  $("div:nth-of-type(4)").on("click", function(){
    console.log("Hey");
    // console.log(one.name);
    // $("#cart_container").append(one.name )
  });






  //--------------------------------
});


//BUGS
//double click on shopping cart and home makes them both dissappear
