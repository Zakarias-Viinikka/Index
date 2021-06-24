var app = angular.module("myWebsites", []);
app.controller("myCtrl", function($scope, $http) {
    $scope.websites = [];
    $http.get("../models/IndexModel.json")
        .then(function(response) {
            $scope.websites = response.data.websites;
            console.log(response.data.websites);
        }, function errorCallback(response) {
            $scope.items = response.statusText;
        });
});