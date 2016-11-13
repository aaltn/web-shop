var feedbackBtn = document.querySelector(".feedback");

var feedbackPopup = document.querySelector(".modal-feedback-form");
var overleyPopup = document.querySelector(".modal-overley");
var modalClose = feedbackPopup.querySelector(".modal-close");

var form = feedbackPopup.querySelector("form");
var userName = feedbackPopup.querySelector("[name=name]");
var eMail = feedbackPopup.querySelector("[name=e-mail]");

var storage = localStorage.getItem("userName");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-show");
  overleyPopup.classList.add("overley-show");

  if (storage) {
    userName.value = storage;
    eMail.focus();
  } else {
    userName.focus();
  }

});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  overleyPopup.classList.remove("overley-show");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !eMail.value) {
    event.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    // alert(eMail.value);
    // alert(userName.value);
  } else {
    localStorage.setItem("userName", userName.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      overleyPopup.classList.remove("overley-show");
    }
  }
});


// function initialize() {
//   var mapOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(59.938953,30.322681),
//     scrollwhell: false,
//     disableDoubleClickZoom: true
//   }
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//   //var image = "../img/map-marker.png";
//   var myLatLng = new google.maps.LatLng(59.938953,30.322681);
//   var beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     //icon: image
//  });
// }
// google.maps.event.addDomListener(window, 'load', initialize);
