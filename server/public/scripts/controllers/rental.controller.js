houseApp.controller('RentalContoller', ['$http', function($http){
    const rc = this;

    //GET route
    function getRentals(){
        console.log('in getRentals');
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log('error in getRentals:', error);
        });
    };
}]);