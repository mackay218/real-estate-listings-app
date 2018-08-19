houseApp.controller('RentalController', ['$http', function($http){
    const rc = this;

    //GET route
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