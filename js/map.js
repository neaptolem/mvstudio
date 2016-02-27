angular.module('app.map', [])
  .controller('MapCtrl', function() {
    var mapProp = {
      center: new google.maps.LatLng(49.854862, 24.025606),
      zoom: 17,
      zoomControl: false,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      scaleControl: true,
      scrollwheel: true,
      panControl: false,
      streetViewControl: false,
      draggable: true,
      overviewMapControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  });
