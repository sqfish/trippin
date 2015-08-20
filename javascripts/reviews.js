define(function(require){
  var $ = require("jquery");
  var firebase = require("firebase");
  
  var selectedTripId;
  $(document).on("click", "#addReview", function() {
    selectedTripId = $(this).attr("data-key");
    $(".reviewEntry").toggle();
  });

  $("#addNewReview").click(function(){
    var newReview = {
      "title": "My title",
      "date": Date.now(),
      "text": $(".reviewEntry").val()
    };
    var myFirebaseRef = new Firebase("https://nss-sally-trippin.firebaseio.com/");
    myFirebaseRef.child("trips").child(selectedTripId).child("reviews").push(newReview);
  });
});