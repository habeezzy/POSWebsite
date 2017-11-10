$(document).ready(function() {
  //--------------------------------
  $("#home_icon").hide();
  $("#cart_container").hide();
  $("#info_popup").hide();
  $("#cart_info").text("Item \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Price");

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
  //Creating objects
   const one = new objectCreator("Condiment Hat","Casual","Eat your hot dogs in style!", 50);
   $("#i1").html("<p>" + one.name + "<br/>" + "$" + one.price  + "<h4>" + one.category + "<br>" + one.description + "</h4></p>");

   const two = new objectCreator("Donut Hat","Formal","The donut over the eye look. ", 70);
   $("#i2").html("<p>" + two.name + "<br/>" +  "$" + two.price   + "<h4>" + two.category + "<br>" + two.description + "</h4></p>");

   const three = new objectCreator("Hamburger Hat","Casual","Go ham.", 60);
   $("#i3").html("<p>" + three.name + "<br/>" +  "$" + three.price   + "<h4>" + three.category + "<br>" + three.description + "</h4></p>");

   const four = new objectCreator("Squid Hat","Casual","Great for the winter.", 60);
   $("#i4").html("<p>" + four.name + "<br/>" +  "$" + four.price   + "<h4>" + four.category + "<br>" + four.description + "</h4></p>");

   const five = new objectCreator("Pot Hat","Formal","Perfect for dinner parties.", 100);
   $("#i5").html("<p>" + five.name + "<br/>" +  "$" + five.price   + "<h4>" + five.category + "<br>" + five.description + "</h4></p>");

   const six = new objectCreator("Drumstick Hat","Casual","Winner winner chicken dinner.", 60);
   $("#i6").html("<p>" + six.name + "<br/>" +  "$" + six.price   + "<h4>" + six.category + "<br>" + six.description + "</h4></p>");

   const seven = new objectCreator("Spaghetti Scarf","Formal","Wear your scarf and eat it too!", 70);
   $("#i7").html("<p>" + seven.name + "<br/>" +  "$" + seven.price   + "<h4>" + seven.category + "<br>" + seven.description + "</h4></p>");

   const eight = new objectCreator("Breakfast Hat","Business Casual","Mmm. Bacon and Eggs", 50);
   $("#i8").html("<p>" + eight.name + "<br/>" +  "$" + eight.price   + "<h4>" + eight.category + "<br>" + eight.description + "</h4></p>");

   const nine = new objectCreator("Cinnabon Hat","Formal","So classy. So chic. So YOU.", 90);
   $("#i9").html("<p>" + nine.name + "<br/>" +  "$" + nine.price   + "<h4>" + nine.category + "<br>" + nine.description + "</h4></p>");

   const ten = new objectCreator("No Shave November Hat","Casual","No shaving necessary.", 100);
   $("#i10").html("<p>" + ten.name + "<br/>" +  "$" + ten.price   + "<h4>" + ten.category + "<br>" + ten.description + "</h4></p>");

   const eleven = new objectCreator("Taco Hat","Formal","Who doesn't love tacos?", 80);
   $("#i11").html("<p>" + eleven.name + "<br/>" +  "$" + eleven.price   + "<h4>" + eleven.category + "<br>" + eleven.description + "</h4></p>");

   const twelve = new objectCreator("The Monday Hat","Business Casual","For those rough Mondays.", 50);
   $("#i12").html("<p>" + twelve.name + "<br/>" +  "$" + twelve.price   + "<h4>" + twelve.category + "<br>" + twelve.description + "</h4></p>");

  var price;
  var total_price = 0;

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

  $("#info_popup button").on("click", function(){
    var buttontext =$("button").siblings("#stuff");
    var trial = buttontext["0"].children["0"].children[1];
    $("#stuff p").not(trial);
    var cartinfo = $("#stuff p").text().split("$");
    $("#cart_container").append("<div>" + (cartinfo[0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "$" + cartinfo[1] + ".00" + "</div>"));
    cartinfo[1].toString();
    Number(cartinfo[1]);
    total_price = (Number(cartinfo[1]) + total_price);
    console.log(total_price);
    $("#total").html("Total $" + total_price + ".00");
    $("#cart_container #total").html("Sub-total $" + total_price + ".00" + "<br>" + "Tax: $" + total_price*0.10 + ".00" + "<br>" + "Total $" + total_price*1.10 + ".00");

    $(this).addClass("is-active");
    $(this).text("Added to Cart!");

    setTimeout(function(){
      console.log('working');
      $(".popup-button").text("Add to Cart");
      $(".popup-button").removeClass("is-active");
    }, 1000);
    //$("#info_popup button").css({transition:'background-color 1s ease-in-out',"background-color": "orange"});
  });
  $("#credit_container button").on("click",function(){
    $(this).addClass("active");
    $(this).text("Placing Order");
    setTimeout(function(){
      $("#topdiv").hide();
      $("#payment").hide();
      $("#creditinput").hide();
      $("#credit_container").html("<h5>Your order has been placed!</h5>")
    }, 3000);

  });

  $("#cashicon").on("click", function(){
    $("#credit_container").show(500);
    $("#topdiv").hide();
    $("#payment").hide();
    $("#creditinput").hide();
    $("#total_cash").text("Your total is : $" + total_price*1.10 + ".00");
  });

  $("#submit_cash").on("click", function(){
    var cash_val = $("#cashamount").val();
    console.log(cash_val - total_price*1.10);
  });


  $("#cardicon").on("click", function(){
    $("#credit_container").show(500);
    $("#cashamount").hide();
  });
  //--------------------------------
});


//BUGS
//double click on shopping cart and home makes them both dissappear
