houseApp.controller('SalesController', ['$http', function ($http) {
    const sc = this;
    
    //array to hold response
    sc.salesArr = [];

    //GET route
    function getSales() {
        console.log('in getSales');
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function (response) {
            console.log(response.data);

            for (let house of response.data) {
                if (house.type == 'sale') {
                    sc.salesArr.push(house);
                }
            }
            console.log(sc.salesArr);

        }).catch(function (error) {
            console.log('error in getSales:', error);
        });
    };

    getSales();
}]);