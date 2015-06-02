// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function () {
    
    function initialize() {
	  var myLatlng = new google.maps.LatLng(41.949482, 12.419802);

      var mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false
      }
        
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                  
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
})

	  var marker = new google.maps.Marker({
  	  position: myLatlng,
  	  map: map,
  	  title: 'Roma'
});

	  var image = "<%= asset_path 'pizza-icon.jpeg'%>"
    	var marker = new google.maps.Marker({
      	position: myLatlng,
      	map: map,
      	animation: google.maps.Animation.DROP
  });

      var contentString = '<h2>Roma</h2>' +
   '<p>There is so much history to learn about here.</p>'
 ;

 	  var infowindow = new google.maps.InfoWindow({content: contentString
 });

	  google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);
 });