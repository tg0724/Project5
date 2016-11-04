//this is comment
// {}();$

$(document).ready(function(){
// $("h1").css({
//   "color":"red",
//   "font-size":40
// });
//
// var fontsize =
// $("h1").css("font-size");
// console.log(fontsize);


// $("h1.pineapple").text("<a href=''>I am pineapple!</a>");

// $("body").append("<h1 class='banana'></h1>")
// $("h1.banana").html("<a href=''>I am banana!</a>");
// $("body").append("<h1 class='answer'></h1>");
//
// var myFunction = function(){
//   var myAnswer =prompt("What's your name?")
//   $('h1.answer').text(myAnswer);
//   $('h1.answer').css({
//     "color":"blue",
//     "font-size":70
//
//   })
//   $("button").remove();
// }
// myFunction();
// $(".start-button").click(function(){
//   myFunction();
// });
// var myFunction =fuction(){
//   var myAnswer =prompt("Type in an URL for your background pic!")
//
// }
// $("button").remove();
//  $("Button").click(function(){
//    myFunction();
//    });

// alert("Let's start to make a poster for your band!")
// $('#btn').on('click', function(){
//   $('#img').attr('src', $('#url').val());
//   $('#btn').hide();
//   $('#url').hide();
// });
//



alert("Let's start to make a poster for your band!")
alert("Please follow the order of buttons(other to time) to create best poster! Recommend picture that with dark background color and reocommend size around 1000px!")
$('#btn').on('click', function(){
	// $("#div1").css("background","url("+$('#url').val()+")");
	$("#div1").attr("style","background:url("+$('#url').val()+") no-repeat;background-size:relative;");
  // $('#img').attr('src', $('#url').val());
  $('#btn').hide();
  $('#url').hide();
});

$("button4").on('click',function(){
    $("button4").toggle();
  var answer3 =prompt("First! Type in some words that you want to say to audience!")
  $('#div1').html(answer3+"<br />"+$('#div1').html());
  // $("#img").before(answer);
   $("#div1").css({ 'color': '#ff6600', 'font-size': '300%','font-family':'sans-serif','left':'100px'});
});

$("button1").on('click',function(){
    $("button1").toggle();
  var answer =prompt("Please type in the time that your concet will be held!")
  $('#div1').html("<br />"+"<br />"+"<br />"+"<br />"+	answer+"<br />"+$('#div1').html());
  // $("#img").before(answer);
//    $("body").css({ 'color': 'White', 'font-size': '300%','font-family':'sans-serif','position':'left 100px'});
});

$("button2").on('click',function(){
    $("button2").toggle();
  var answer1 =prompt("Please enter the name of your band!")
  $('#div1').html(answer1+"<br />"+"<br />"+"<br />"+"<br />"+$('#div1').html());
  // $("#img").before(answer);
//    $("body").css({ 'color': 'white', 'font-size': '250%','font-family':'sans-serif','position':'left 100px'});
});

$("button3").on('click',function(){
    $("button3").toggle();
  var answer2 =prompt("Please type in the place where the concert will be held!")
  $('#div1').html(answer2+"<br />"+"<br />"+$('#div1').html());
  // $("#img").before(answer);
//    $("body").css({ 'color': 'white', 'font-size': '250%','font-family':'sans-serif','position':'left 100px'});
});


















});
