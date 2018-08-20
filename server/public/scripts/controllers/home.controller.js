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

    /* array for adding search categories NOT IMPLEMENTED ON DOM YET */                  
    hc.searchTypes = [{type: 'city', name: 'city'}, 
                      {type: 'cost', name: 'price'},
                      {type: 'sqft', name: 'sq feet'}];

    //POST route
    hc.addListing = function(listing){
        console.log('listing:', listing);

        $http({
            method: 'POST',
            url: '/listings',
            data: listing
        }).then(function(response){
            console.log('listing created');
            hc.resetAddListing();
        }).catch(function(error){
            console.log('error:', error);
        });
    };

    /* function to search database*/
    hc.search = function(searchTerm) {
        console.log('in search', searchTerm);
        $http({
            method: 'POST',
            url: '/listings/search',
            data: searchTerm
        }).then(function(response){
            hc.searchArr = [];
            hc.searchArr = response.data;
            console.log('search results:', hc.searchArr);
            hc.resetSearch();
        }).catch(function(error){
            console.log('error in search:', error);
            hc.searchArr = [{city: 'no results', cost: 'no results'}]
        });
    };

    /* functions to reset forms */
    hc.resetSearch = function(){
        console.log('in resetSearch');
        hc.searchTerms.term.$setPristine;
        hc.searchTerms.term = '';
    };

    hc.resetAddListing = function(){
        console.log('in resetAddListing');
        hc.propertyToAdd.sqft.$setPristine;
        hc.propertyToAdd.sqft = '';
        hc.propertyToAdd.city.$setPristine;
        hc.propertyToAdd.city = '';
        hc.propertyToAdd.cost.$setPristine;
        hc.propertyToAdd.cost = '';
    }

}]);