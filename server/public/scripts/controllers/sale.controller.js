houseApp.controller('SalesContoller', ['$http', function ($http) {
    const rc = this;

    //GET route
    function getSales() {
        console.log('in getSales');
        $http({
            method: 'GET',
            url: '/sales'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log('error in getSales:', error);
        });
    };
}]);