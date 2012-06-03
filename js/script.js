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
var canevasProd = new Raphael(document.getElementById('canevasProd'),400,710);
var biere = canevasProd.image("2_biere_03.png", 0, 0, 0, 0);
biere.attrs = {cx: 0, cy: 605};
biere.animate({width: 275, height:605},1000);




//#import_export





//#production_pays



