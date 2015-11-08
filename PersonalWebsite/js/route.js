(function(){
  angular
    .module('katerji92PW')
    .config(['$routeProvider', '$locationProvider', configRoute]);

    function configRoute($routeProvider, $locationProvider){
      $routeProvider
        .when('/Blog', {
          templateUrl: 'views/blog.html',
          controller: 'BlogCntrl'
        })
        .when('/Contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCntrl'
        })
        .when('/Resume', {
          templateUrl: 'CV/index.html',
          controller: 'CVCntrl'
        });
    }
})();
