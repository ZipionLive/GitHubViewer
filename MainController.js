(function(){
    var app = angular.module('githubViewer');
    
    var MainController = function($scope, $interval, $location) {
        $scope.search = function() {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path('/user/' + $scope.username)
        };
        
        var decrementCountdown = function() {
            $scope.countdown--;
            if ($scope.countdown < 1)
                $scope.search();
        };
        
        var startCountdown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        
        $scope.username = 'angular';
        $scope.countdown = 10;
        var countdownInterval = null;
        startCountdown();
    };
    
    app.controller('MainController', MainController)
}());