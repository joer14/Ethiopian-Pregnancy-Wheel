var myapp = angular.module('myapp', ['ui']);

myapp.controller('controller', function ($scope) {
    $scope.listName = "List Name";
    // $scope.list = ["oneoneoneoneoneoneone", "two", "three", "four", "five", "six"];
    $scope.list = [
    {"name": "Google",
     "url": "http://google.com",
     "age": 0},
    {"name": "Facebook",
     "snippet": "http://facebook.com",
     "age": 1},
    {"name": "quora",
     "snippet": "http://quora.com",
     "age": 2}
  ];

});

angular.bootstrap(document, ['myapp']);
