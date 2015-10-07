// jQuery.ajax('../../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });

jQuery.ajax("../apis/github/users/shayhall.json").then(function(data){
 console.log(arguments);
});


var info = jQuery.getJSON("../apis/github/users/shayhall.json", function(data) {
  $('#username').html('<h2>' + data.name);
  $('#login').html('<h2>' + data.login);
  $('.company').html('<li>' + data.company);
  $('.location').html('<li>' + data.location);
  $('.email').html('<li>' + data.email);
});



$(".tabs").click(function(){
    addTabs();
    $(this).addClass("active");
    $(this).next().addClass("active");
    $(this).next().css("display", "block");
}); //Adapted from http://www.jankoatwarpspeed.com/dynamic-tabs-using-jquery-why-and-how-to-create-it/

function addTabs() {
  $(".tabs").removeClass("active");
  $(".tabs").next().css("display", "none");
}; // Used within event listener to move active class
