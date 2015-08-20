define(function(require){
  var $ = require("jquery");
  var isVisited = false;
  $("#visited").click(function(){
    $("#wishlist").css("background-color", "white");
    $("#visited").css("background-color", "#ffd250");
    isVisited = true;
  });

  $("#wishlist").click(function(){
    $("#visited").css("background-color", "white");
    $("#wishlist").css("background-color", "#ffd250");
    isVisited = false;
  });

  $("#addLocation").click(function(){
    var myFirebaseRef = new Firebase("https://nss-sally-trippin.firebaseio.com/trips");
    var newLocation = {
      "location": $("#inputLocation").val(),
      "location_type": $("#locationType").val(),
      "visited": isVisited,
      "reviews": [{
        "title": $("#inputTitle").val(),
        "date": $("#inputDate").val(),
        "text": $("#inputReview").val()
      }]
    };
    myFirebaseRef.push(newLocation);
    document.getElementById("addLocationForm").reset();
  });
});
