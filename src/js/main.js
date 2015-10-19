jQuery.ajax("../apis/github/users/shayhall.json").then(function(data){
 console.log(arguments);
});

jQuery.ajax("../apis/github/users/shayhall/repos.json").then(function(data){
 console.log(arguments);
});

jQuery.ajax("../apis/github/users/shayhall/activity.json").then(function(data){
 console.log(arguments);
});

$('.tabs a[href]').on('click', function(event){
  event.preventDefault();
    $(this).add(this.hash)
    .addClass('active')
    .siblings().removeClass('active');
});

$('.mobile a[href]').on('click', function(event){
  event.preventDefault();
    $(this).add(this.hash)
    .addClass('active')
    .siblings().removeClass('active');
});

var info = jQuery.getJSON("../apis/github/users/shayhall.json", function(data) {
  $('#username').html('<h2>' + data.name);
  $('#login').html('<h2>' + data.login);
  $('.company').html('<li>' + data.company);
  $('.location').html('<li>' + data.location);
  $('.email').html('<li>' + data.email);
  $('.blog').html('<li>' + data.blog);
  $('.created_at').html('<li>' + data.created_at);
  $('avatar_url').html('<a>' + data.avatar_url);
});
