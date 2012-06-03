
var windowWidth;			
var windowHeight;
var animating=true;

var indexItem=0;

$(document).ready(function(){
	resizeContent();
	setZindex();
	setSubZindex();
	
	setTimeout(animateMenu, 1000);
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

function setSubZindex(){
	var subPages = $("#content").find('.subpages');
	subPages.each(function(index){
		if($(this).hasClass("subCurrent")){
			$(this).css('z-index',"30");
		}else{
			$(this).css("z-index",subPages.length-index)
		}
	});
}

function setPagePos(){
	var pages = $("#content").find('.pages');
	pages.each(function(index){
		$(this).css("top","0");
	});
}
function setSubPagePos(){
	var subPages = $("#content").find('.subpages');
	subPages.each(function(index){
		$(this).css("left","0");
	});
}

$(document).keydown(function(event){
	console.log(event.which);
		if(event.which=="40"){
			var pages = $("#content").find('.pages');
			var current = $("#content").find('.current');
			var indexCurrent=current.index();
			
		if(pages.length>indexCurrent+1 && !animating){
			indexItem+=1;
			animateMenu();
			animating=true;
			pages.eq(indexCurrent+1).css('z-index',"29");
			current.animate({"top":-windowHeight}, 1000,"easeInQuint",function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent+1).addClass("current");
				setZindex();
				setPagePos();
			});
			
		}
	}
	if(event.which=="38"){
		var pages = $("#content").find('.pages');
		var current = $("#content").find('.current');
		var indexCurrent=current.index();
		
		if(indexCurrent>0 && !animating){
			indexItem-=1;
			animateMenu();
			animating=true;
			pages.eq(indexCurrent-1).css('z-index',"29");
			current.animate({"top":windowHeight}, 1000,"easeInQuint",function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent-1).addClass("current");
				setZindex();
				setPagePos();
			});
			
		}
	}
	if(event.which=="39"){
		var current = $("#content").find('.current');
		var pages = $("#content").find('.pages');
		var subCurrent = current.find(".subCurrent");
		var indexSubCurrent = subCurrent.index();
		var subPages = current.find(".subpages");
		
		if(subPages.length>indexSubCurrent+1 && !animating){
			animating=true;
			subPages.eq(indexSubCurrent+1).css("z-index","29");
			
			current.find(".subCurrent").animate({"left":-windowWidth}, 1000,"easeInQuint",function(){
				animating=false;
				subCurrent.removeClass("subCurrent");
				subPages.eq(indexSubCurrent+1).addClass("subCurrent");
				setSubZindex();
				setSubPagePos();
			});
		}
	}
	if(event.which=="37"){
		var current = $("#content").find('.current');
		var pages = $("#content").find('.pages');
		var subCurrent = current.find(".subCurrent");
		var indexSubCurrent = subCurrent.index();
		var subPages = current.find(".subpages");
		
		if(indexSubCurrent>0 && !animating){
			animating=true;
			subPages.eq(indexSubCurrent-1).css("z-index","29");
			
			current.find(".subCurrent").animate({"left":+windowWidth}, 1000,"easeInQuint",function(){
			animating=false;
			subCurrent.removeClass("subCurrent");
			subPages.eq(indexSubCurrent-1).addClass("subCurrent");
			
			setSubZindex();
			setSubPagePos();
			});
		}
	}
});

function animateMenu(){
	animating=true;
	
	var currentItem = $("#menu").find(".current-item");
	currentItem.find("h2").css({"top":"17px"});
	currentItem.find("h3").css({"top":"-17px"});
	currentItem.animate({"width":"70px"}, 400,function(){
	
		$(this).removeClass("current-item");
		$("#menu").find(".item-mask").eq(indexItem).addClass("current-item");
		
		var currentItem = $("#menu").find(".current-item");
		
		currentItem.animate({"width":"200px"}, 400,function(){
			currentItem.find("h2").animate({"top":"0"},400);
			currentItem.find("h3").animate({"top":"0"},400);
			animating=false;
		});
		
	});
	
}




