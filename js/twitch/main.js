$(document).ready(function() {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "https://api.twitch.tv/kraken/streams/devistygg",
		headers: {
		'Client-ID': 'y73l59jx85x9cbbtz3jj2cszcx9xf1'
	},
		success: function(data1) {
			if (data1.stream == null) { //offline
				document.getElementById('status').innerHTML = "Devisty is currently offline.";
				document.getElementById('twitch-btn').style.display = "none";
			} else { //live
				document.getElementById('status').innerHTML = "Devisty is currently live!";
				document.getElementById('twitch-btn').style.display = "inline-block";
				
				var mode = localStorage.getItem('colormode');
				if (mode == 'bluepurple') {
					document.getElementById("statuscircle").className += " pulsebp";
				} else
				if (mode == 'bluegreen') {
					document.getElementById("statuscircle").className += " pulsebg";
				} else
				if (mode == 'orangered') {
					document.getElementById("statuscircle").className += " pulseor";
				}				
			}
		}
	});
});