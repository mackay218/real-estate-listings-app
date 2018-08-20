houseApp.controller('RentalController', ['$http', function($http){
    const rc = this;

    //GET routes
    /* get all listings from database */
    function getRentals() {
        console.log('in getSales');
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function (response) {
            console.log(response.data);
            //array to hold response
            rc.rentalArr = [];
            for (let house of response.data) {
                if (house.type == 'rent') {
                    rc.rentalArr.push(house);
                }
            }
            //console.log(sc.salesArr);
            rc.listingCount = rc.rentalArr.length;

        }).catch(function (error) {
            console.log('error in getSales:', error);
        });
    };//end getSales

    /* get lowest price listing*/
    function getLowest() {
        console.log('in getLowest');
        $http({
            method: 'GET',
            url: '/listings/rent/lowest'
        }).then(function(response){
            rc.lowestPrice = [];
            rc.lowestPrice.push(response.data[0]);
            console.log('lowest price:', rc.lowestPrice);
        }).catch(function(error){
            console.log('error in getLowest:', error);
        });
    };//end getLowest

    getLowest();

    /* function to confirm user deleting card */
    //PUT route
    rc.areYouSure = function (houseId, houseConfirm) {
        console.log('in areYouSure');
        if (houseConfirm == true) {
            houseConfirm = false;
        }
        else if (houseConfirm == false) {
            houseConfirm = true;
        }

        let sendData = {
            houseId: houseId,
            houseConfirm: houseConfirm
        };

        $http({
            method: 'PUT',
            url: '/listings',
            data: sendData
        }).then(function (response) {

            getRentals();
        }).catch(function (error) {
            console.log('error', error);
        });
    };//end areYouSure

    //DELETE route
    rc.deleteListing = function (houseId) {
        console.log('in deleteListing');
        $http({
            method: 'DELETE',
            url: '/listings/' + houseId
        }).then(function (response) {
            console.log('deleted listing:', houseId);
            getRentals();
        }).catch(function (error) {
            console.log('error client delete route:', error);
        });

    };//end deleteListing

    getRentals();
}]);