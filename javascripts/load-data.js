define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var data = require("save-data");

  var myFirebaseRef = new Firebase("https://nss-sally-trippin.firebaseio.com/");

  myFirebaseRef.child("location-type").on("value", function(snapshot) {
    var locationTypes = snapshot.val();
    console.log(locationTypes);
    var populatedTemplate = templates.locTypeTpl(locationTypes);
    $("#locationType").append(populatedTemplate);
  });

  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();
    
    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);
    $("#trip-container").html(populatedTemplate);
  });
});