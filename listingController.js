angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listingsCtrl = this;
    this.listings = Listings;
    this.detailedInfo = undefined;
    this.showInfo = false;
    this.showForm = false;
    this.newListing = {};
    this.search = "";
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    this.isSelected = function(index){
      if(this.detailedInfo == undefined){
        return false;
      }
      return this.listings.indexOf(this.detailedInfo) === index;
    };
    this.coordExist = function(){
        return this.detailedInfo.hasOwnProperty("coordinates");
    };
    this.clickButton = function(){
      this.showForm = !this.showForm;
    };
    this.addListing = function() {
        this.listings.push(this.newListing);
        this.newListing = {};
        this.showForm = false;
    };
    this.deleteListing = function(index) {
        this.showInfo = false;
        this.detailedInfo = undefined;
        this.listings.splice(index,1);
    };
    this.showDetails = function(index) {
      this.showInfo = true;
      this.detailedInfo = this.listings[index];
    };
  }
]);
