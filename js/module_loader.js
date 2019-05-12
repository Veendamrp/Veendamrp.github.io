window.addEventListener("load", function(){
	var loadwrapper = document.getElementById('load-wrapper');
	var index = document.getElementById('index');
	setTimeout(function(){
		document.getElementById('center').removeChild(loadwrapper); 
		document.body.style.overflow = "auto";
		document.body.style.overflowX = "hidden";
		index.style.display = "block";
	}, 400);
});