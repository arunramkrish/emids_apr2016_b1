var page1Module = angular.module("page1",["ngRoute"]);

page1Module.controller("Page1Controller",["$scope", "$routeParams", function($scope, $routeParams) {
            $scope.title = "Page 1";
            $scope.message = $routeParams.pageId + " " + $routeParams.message;
}]);
        
//configure routes for page1
page1Module.config(["$routeProvider", function(routeProvider) {
    routeProvider.when("/page1.html", {
       templateUrl:"partials/page1.html",
        controller: "Page1Controller"
    });
    routeProvider.when("/pages/:pageId", {
       templateUrl:"partials/page1.html",
        controller: "Page1Controller"
    });

}]);
        
