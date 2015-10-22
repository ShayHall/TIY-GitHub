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

;(function(){

angular.module('Github', [])
  .run(function($http, $rootScope){
    $http.get("../apis/github/users/shayhall.json")
    .then(function(userInfo){
      $rootScope.user = userInfo.data;
    });
  })

  .run(function($http, $rootScope){
    $http.get("../apis/github/users/shayhall/repos.json")
    .then(function(repos){
      $rootScope.shayhall = repos.data;
    });
  })

  .run(function($http, $rootScope){
    $http.get("../apis/github/comments/comments.json")
    .then(function(feedback){
      $rootScope.comments = feedback.data;
    });
  });
  // .run(function($http, $rootScope){
  //   $http.get("../apis/github/users/shayhall/activity.json")
  //     .then(function(activity){
  //       $rootScope.shayhall = activity.data;

})(); //IIFE

;(function(){





})(); //IIFE
