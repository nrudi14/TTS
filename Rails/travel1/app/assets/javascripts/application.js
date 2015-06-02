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
//= require_tree .


$(document).ready(function(){

    function initialize() {


  	  var myLatlng = new google.maps.LatLng(41.949482, 12.419802);

  	  var contentString = '<h2>Rome</h2>' + '<p>There is so much history here.</p>'
 	;
      
      var mapOptions = {
      center: myLatlng,
      zoom: 18,
      scrollwheel:false
  };
        
      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);    
    
      

	 var marker = new google.maps.Marker({
  		position: myLatlng,
  		map: map,
 	    title: 'Roma',
 	    animation: google.maps.Animation.DROP
 	})

  	 

 	 var infowindow = new google.maps.InfoWindow({
   		content: contentString
 	});

	 google.maps.event.addListener(marker, 'click', function() {
     infowindow.open(map,marker);
 });



var image = "<%= asset_path 'pizza.html'%>"
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
});
