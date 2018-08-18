console.log('client js');

const houseApp = angular.module('houseApp', ['ngRoute']);

//start config
houseApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html'
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        contoller: 'RentalController as rc'
    }).when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesController as sc'
    });
}); //end config