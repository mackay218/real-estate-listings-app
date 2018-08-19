houseApp.controller('SalesController', ['$http', function ($http) {
    const sc = this;
    
    //GET route
    function getSales() {
        console.log('in getSales');
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function (response) {
            console.log(response.data);
            //array to hold response
            sc.salesArr = [];
            for (let house of response.data) {
                if (house.type == 'sale') {
                    sc.salesArr.push(house);
                }
            }
            //console.log(sc.salesArr);
            sc.listingCount = sc.salesArr.length;

        }).catch(function (error) {
            console.log('error in getSales:', error);
        });
    };//end getSales

    /* function to confirm user deleting card */
    //PUT route
    sc.areYouSure = function(houseId, houseConfirm){
        console.log('in areYouSure');
        if(houseConfirm == true){
            houseConfirm = false;
        }
        else if(houseConfirm == false){
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
        }).then(function(response){
            
            getSales();
        }).catch(function(error){
            console.log('error', error);
        });
    };//end areYouSure

    //DELETE route
    sc.deleteListing = function(houseId){
        console.log('in deleteListing');
        $http({
            method: 'DELETE',
            url: '/listings/' + houseId
        }).then(function(response){
            console.log('deleted listing:', houseId);
            getSales();
        }).catch(function(error){
            console.log('error client delete route:', error);
        });

    };//end deleteListing


    getSales();
}]);