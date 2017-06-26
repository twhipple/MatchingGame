$(document).ready(function() {
    $('#cardA').click(function()  {
    $(this).css('background-color', 'hsl(25, 85%, 65%');
    });
    $('#cardB').click(function()  {
    $(this).css('background-color', 'hsl(55, 85%, 65%');
    });
    $('#cardC').click(function()  {
    $(this).css('background-color', 'hsl(90, 85%, 65%');
//    $(this).css('color', 'white');
//    function myFunction(){
//    var x = document.getElementById('#cardC')
//    x.html = Math.floor((Math.random() * 8) + 1);
//    }
//    console.log(x.innerHTML);
     var randomNum = Math.floor((Math.random() * 8) + 1);
     $('#cardC').html(randomNum);
     console.log(randomNum);


//     $('#cardC').append('<h2> + 'randomNum' + </h2>');

    //var $randomCard = $('<h2>' + randomNum + '</h2>');
    });
    $('.cardD').click(function()  {
    $(this).css('background-color', 'hsl(160, 85%, 65%');
    });$('#cardE').click(function()  {
    $(this).css('background-color', 'hsl(220, 85%, 65%');
    });$('#cardF').click(function()  {
    $(this).css('background-color', 'hsl(265, 85%, 65%');
    });$('#cardG').click(function()  {
    $(this).css('background-color', 'hsl(310, 85%, 65%');
    });$('#cardH').click(function()  {
    $(this).css('background-color', 'hsl(360, 85%, 65%');
    });
    if ('.cardD'==='.cardD') {
      $(this).css('background-color','rgb(153, 153, 153');
    } else {
      $(this).css('background-color', 'rgb(32, 64, 86');
    }
});









//First Attempt:
    //  $('cardA').html('<h2>1</h2>');

//Second Attempt:
      //    myFunction() {
      //  var x = document.getElementById("cardB")
      //  x.innerHTML = Math.floor((Math.random() * 8) + 1);
      //}

//Third Attempt:
      //$('cardA').append($cardNumber);

//Fourth Attempt:
      // this below worked!
      //  $(this).css('background-color', 'hsl(25, 85%, 65%');

//Fifth Attempt:
      //  var message = Math.floor((Math.random() * 8) + 1);
      //  var $heading = $('<h2>' + message + '</h2>');
      //  $('cardA').append($heading);

//Sixth Attempt:
  //  $('.card').click(function()  {
  //      var a = Math.floor((Math.random() * 8) + 1);
  //      document.getElementById("cardA").innerHTML = a;
//    };

//Seventh Attempt:
    //var cardNumber = Math.floor((Math.random() * 8) + 1);
    //return cardNumber("cardNumber");






// Background-color of cards on click
// background-color: hsl(55, 85%, 65%);
// background-color: hsl(90, 85%, 65%);
// background-color: hsl(160, 85%, 65%);
// background-color: hsl(220, 85%, 65%);
// background-color: hsl(265, 85%, 65%);
// background-color: hsl(310, 85%, 65%);
// background-color: hsl(360, 85%, 65%);

// For after card has been paired.
// color: rgb (204, 204, 204);
// background-color: rgb(153, 153, 153);
