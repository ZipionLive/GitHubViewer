(function(){
    var app = angular.module('githubViewer');
    
    var UserController = function($scope, github, $routeParams) {

        var onGetUser = function(data) {
            $scope.gitHubUser = data;
            github.getRepos($scope.gitHubUser).then(onGetRepos, onRepoError);
        };
        
        var onError = function(reason) {
            $scope.error = 'Couldn\x27t load the user : ' + reason;
        };
        
        var onGetRepos = function(data) {
            $scope.gitHubRepos = data;
        };
        
        var onRepoError = function(reason) {
            $scope.repoError = 'Couldn\x27t get the repos : ' + reason; 
        };
        
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onGetUser, onError)
    };
    
    app.controller('UserController', UserController)
}());