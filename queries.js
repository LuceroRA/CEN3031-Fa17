/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    config = require('./config'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js');

mongoose.connect(config.db.uri);

var findLibraryWest = function () {
    /*
      Find the document that contains data corresponding to Library West,
      then log it to the
       console.
     */
    Listing.find({ name: 'Library West' }, function(err, listing){
        if(err) throw err;
        console.log(listing);
    });
};
var removeCable = function () {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console.
    */
    Listing.findOneAndRemove({code: 'CABL'}, function (err, listing, param) {
        if (err) throw err;
        console.log(listing);
    });
};
var updatePhelpsLab = function () {
    /*
      Phelps Laboratory's address is incorrect. Find the listing, update it, and then
      log the updated document to the console.
     */
    Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: 'UPDATED ADDRESS!'}, {new:true}, function (err, listing){
        if(err) throw err;
        console.log(listing);
    });
};
var retrieveAllListings = function () {
    /*
      Retrieve all listings in the database, and log them to the console.
     */
    Listing.find({}, function(err, listing){
        if(err) throw err;
        console.log(listing);
        mongoose.disconnect();
    });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
