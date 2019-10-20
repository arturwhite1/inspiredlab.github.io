$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});


	$("#team-slider").owlCarousel({
	    paginationSpeed : 1500,      
	    singleItem:true,
	    autoPlay: 6000,
	});



	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	function moveIt(button) {
		var xcoords = new Array(70,100,150,175,225,260,300,320,350);
		var ycoords = new Array(30,40,50,60,70,80);
		var x = xcoords[Math.floor((Math.random()*10))];
		var y = ycoords[Math.floor((Math.random()*10))];
		button.style.left = x + "px";
		button.style.top = y + "px"
	  }

	  function backIt(button) {
		button.style.left = "10px";
		button.style.top = "0px"
	  }

});




