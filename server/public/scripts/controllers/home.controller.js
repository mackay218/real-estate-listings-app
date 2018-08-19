houseApp.controller('HomeController', ['$http', function($http){
    const hc = this;

    //array to hold rental type options for drop down menu
    hc.listingType = [{type: 'sale', name:'sale'}, {type: 'rent', name:'rental'}];

    //array to hold img strings for drop down menu
    hc.listingPics = [{ type: 'classic-flats.jpg', name: 'Flat'}, 
                      { type: 'haunted.png', name: 'Fixer Upper'}, 
                      { type: 'older.jpg', name: 'Classic'}, 
                      { type: 'rental.jpg', name: 'City Apt.'}, 
                      { type: 'rental2.jpg', name: 'Suburban Apt.'},
                      { type: 'shiny.jpg', name: 'Rural McMansion'}, 
                      { type: 'stony.jpg', name: 'Suburban Ranch'}];

    //POST route
    hc.addListing = function(listing){
        console.log('listing:', listing);
        $http({
            method: 'POST',
            url: '/listings',
            data: listing
        }).then(function(response){
            console.log('listing created');
        }).catch(function(error){
            console.log('error:', error);
        });
    };

}]);