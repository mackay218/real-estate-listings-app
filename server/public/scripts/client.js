console.log('client js');

const houseApp = angular.module('houseApp', ['ngRoute']);

//start config
houseApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalController as rc'
    }).when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesController as sc'
    }).otherwise({redirectTo: '/'});
}); //end config