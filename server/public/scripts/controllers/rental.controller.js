houseApp.controller('RentalContoller', ['$http', function($http){
    const rc = this;

    //array to hold response
    rc.rentalArr = [];s

    //GET route
    function getRentals(){
        console.log('in getRentals');
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function(response){
            console.log(response);
            rc.rentalArr = response;
            console.log(rc.rentalArr);
        }).catch(function(error){
            console.log('error in getRentals:', error);
        });
    };
}]);