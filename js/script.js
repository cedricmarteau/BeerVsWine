
var windowWidth;			
var windowHeight;
var animating=false;

$(document).ready(function(){
	resizeContent();
	setZindex();
});



// Fire on window resize.
$(window).resize(function() {
	resizeContent();
});


function resizeContent(){
	////console.log("resize");
	// Resize content to fit window width.
	windowWidth = $(window).width();
				
	windowHeight = $(window).height();
	
	var content = $("#content");
	content.css({'width' : windowWidth, 'height' : windowHeight}).find(".pages").css({'width' : windowWidth, 'height' : windowHeight});
}

function setZindex(){
	var pages = $("#content").find('.pages');
	pages.each(function(index){
		if($(this).hasClass("current")){
			$(this).css('z-index',"30");
		}else{
			$(this).css('z-index',pages.length-index);
		}
	});
}
function setPagePos(){
	var pages = $("#content").find('.pages');
	pages.each(function(index){
		pages.css("top","0");
	});
}

$(document).keydown(function(event){
	var pages = $("#content").find('.pages');
	var current = $("#content").find('.current');
	var indexCurrent=current.index();
	if(event.which=="40"){
		if(pages.length>indexCurrent+1 && !animating){
			animating=true;
			pages.eq(indexCurrent+1).css('z-index',"29");
			current.animate({"top":-windowHeight}, 500,function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent+1).addClass("current");
				setZindex();
				setPagePos();
			});
			
		}
	}
	if(event.which=="38"){
		if(indexCurrent>0 && !animating){
			animating=true;
			pages.eq(indexCurrent-1).css('z-index',"29");
			current.animate({"top":windowHeight}, 500,function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent-1).addClass("current");
				setZindex();
				setPagePos();
			});
			
		}
	}
	
});
//#production_mondial
var canevasProd = new Raphael(document.getElementById('canevasProd'),400,710);
var biere = canevasProd.image("2_biere_03.png", 0, 0, 0, 0);
biere.attrs = {cx: 0, cy: 605};
biere.animate({width: 275, height:605},1000);




//#import_export





//#production_pays



