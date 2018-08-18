houseApp.controller('RentalController', ['$http', function($http){
    const rc = this;

    //array to hold response
    rc.rentalArr = [];

    //GET route
    function getRentals(){
        console.log('in getRentals');
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function(response){
            console.log(response.data);

            for(let house of response.data){
                if(house.type == 'rent'){
                    rc.rentalArr.push(house);
                }
            }
            console.log(rc.rentalArr);
        }).catch(function(error){
            console.log('error in getRentals:', error);
        });
    };

    getRentals();
}]);