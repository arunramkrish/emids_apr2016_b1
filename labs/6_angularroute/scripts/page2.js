var page2Module = angular.module("page2",["ngRoute"]);

page2Module.controller("Page2Controller", function($scope) {
            $scope.title = "Page 2";
            $scope.message = "Page 2 has additional message";
        })

//configure routes
page2Module.config(["$routeProvider", function(routeProvider) {
    routeProvider.when("/page2.html", {
       templateUrl:"partials/page2.html",
        controller: "Page2Controller"
    });
}]);
        
