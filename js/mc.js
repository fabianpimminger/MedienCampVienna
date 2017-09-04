// @codekit-prepend "../bower_components/jquery/dist/jquery.js", "../bower_components/jquery.countdown/dist/jquery.countdown.js", "jquery.visualNav.min.js", "jquery.easing.1.2.js", "jquery.smooth-scroll.min.js", "cheet.min.js";

/* global cheet */

var MC = (function($){
	'use strict';

  var _setupEventHandlers = function(){


		$('.countdown').countdown("2017/12/02, 9:00", function(event) {
			$(".countdown .weeks").text(event.offset.weeks);
			$(".countdown .days").text(event.offset.days);
			$(".countdown .hours").text(event.offset.hours);
			$(".countdown .minutes").text(event.offset.minutes);
			$(".countdown .seconds").text(event.offset.seconds);
		});

		cheet('c a t s', function () {
			moarcats();
		  $("#catcontainer").show();
		});
  };

	var moarcats = function() {
    var timestamp = new Date().getTime();
    var catcontainer = document.getElementById("catcontainer");
    catcontainer.innerHTML = "";
    catcontainer.innerHTML = '<img src="http://edgecats.net?r='+timestamp+'" alt="random cat"/>';
  };

  var init = function(){
    //setup

	  $(document).ready(function() {
		  $('.main-navigation').visualNav({
		    selectedClass : 'active',
		    offsetTop: 50,
		    stopOnInteraction: false
		  });

		  $("#buy").click(function(ev) {
			  ev.preventDefault();
			  $( "#tickets" ).slideDown( "slow", function() {
					$.smoothScroll({
						offset: -150,    scrollTarget: $( "#tickets" )
	        });
			  });
		  });

		  $("#signup").click(function(ev) {
			  ev.preventDefault();
			  $( "#newsletter" ).slideDown( "slow", function() {
					$.smoothScroll({
						offset: -150,    scrollTarget: $( "#newsletter" )
	        });
			  });


		  });

    	_setupEventHandlers();
		});
  };

  return {
      init : init
  };

})(jQuery);

MC.init();
