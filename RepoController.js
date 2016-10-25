(function() {
    var app = angular.module('githubViewer');

    var RepoController = function($scope, github, $routeParams) {

        var onGetRepo = function(data) {
            $scope.repo = data;
            github.getContributors($scope.repo).then(onGetContributors, onContributorsError);
        };

        var onError = function(reason) {
            $scope.error = 'Couldn\x27t load the repo : ' + reason;
        };

        var onGetContributors = function(data) {
            $scope.contributors = data;
        };

        var onContributorsError = function(reason) {
            $scope.contributorsError = 'Couldn\x27t get the contributors : ' + reason;
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        $scope.contributorSortOrder = "+login";
        github.getRepo($scope.username, $scope.reponame).then(onGetRepo, onError)
    };

    app.controller('RepoController', RepoController)
}());