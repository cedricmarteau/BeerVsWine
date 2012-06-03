$(document).ready(function(){
	resizeContent();
});

// Fire on window resize.
$(window).resize(function() {
	resizeContent();
});


function resizeContent(){
	////console.log("resize");
	// Resize content to fit window width.
	var windowWidth = $(window).width();
				
	var windowHeight = $(window).height();
	
	var content = $("#content");
	content.css({'width' : windowWidth, 'height' : windowHeight}).find(".pages").css({'width' : windowWidth, 'height' : windowHeight});
	
}

//#production_mondial





//#import_export





//#production_pays



