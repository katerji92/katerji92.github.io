(function(){
  angular
    .module('katerji92PW')
    .controller('MainCntrl', ['$scope', '$location', function ($scope, $location) {
      var vm = this;

      vm.showSideNav = false;
      vm.toggleSideNav = toggleSideNav;

      vm.currentRoute = '';
      $scope.$on('$locationChangeSuccess', function(newValue){
        vm.currentRoute = $location.path().slice(1,$location.path().length);
      });

      function toggleSideNav(){
        vm.showSideNav = !vm.showSideNav;
      }
    }]);
})();
