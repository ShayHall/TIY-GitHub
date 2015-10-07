// jQuery.ajax('../../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });

jQuery.ajax("../apis/github/users/shayhall.json").then(function(data){
 console.log(arguments);
});


jQuery.getJSON("../apis/github/users/shayhall.json", function(data) {
  console.log($('#username').html('<h2>' + data.name));
  console.log($('#login').html('<h3>' + data.login));
});




var info = _.template("{{name}}");
info("{}")



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
