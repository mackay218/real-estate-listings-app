houseApp.controller('HomeController', ['$http', function($http){
    const hc = this;

    //array to hold rental type options for drop down menu
    hc.listingType = [{type: 'sale', name:'sale'}, {type: 'rent', name:'rental'}];

    //array to hold img strings for drop down menu
    hc.listingPics = [{ type: 'choose', name: 'choose', disabled: true }, 
                      { type: 'classic-flats.jpg', name: 'Flat', disabled: false}, 
                      { type: 'haunted.png', name: 'Fixer Upper', disabled: false}, 
                      { type: 'older.jpg', name: 'Classic', disabled: false}, 
                      { type: 'rental.jpg', name: 'City Apt.', disabled: false}, 
                      { type: 'rental2.jpg', name: 'Suburban Apt.', disabled: false},
                      { type: 'shiny.jpg', name: 'Rural McMansion', disabled: false}, 
                      { type: 'stony.jpg', name: 'Suburban Ranch', disabled: false}];

    //POST route
    hc.addListing = function(listing){
        console.log('listing:', listing);
        $http({
            method: 'POST',
            url: '/listing',
            data: listing
        }).then(function(response){
            console.log('listing created');
        }).catch(function(error){
            console.log('error:', error);
        });
    };

}]);