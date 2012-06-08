
var windowWidth;			
var windowHeight;
var animating=false;

var indexItem=0;

var fProd1;
var fProd2;
var fConsom1;
var fConsom2;
var fConsom3;
var fSante1;
var fSante2;
var fSante3;
var fEnv1;
var fEnv2;
var fInt;
var fDivers;


$(document).ready(function(){

	$("body").queryLoader2({
	       barColor: "#6e6d73",
	       backgroundColor: "#fff1b0",
	       percentage: true,
	       barHeight: 30,
	       completeAnimation: "grow"
	   });
	  
	resizeContent();
	setZindex();
	setSubZindex();
	
	
	
	production_mondiale();
	//data_production();
	//import_export();
	//more_consume();
	//best_consom();
	//creerStatsParSexe();
	//creerStatsParAge();
	//creerStatsParRevenus();
	//nuage_tag();
	//litre_eau();
	//risk_of_death();
	//internet();
	//lesPlus();
	
	
	setTimeout(animateMenu, 400);
	
	$(".item-mask").click(function(){
			var pages = $("#content").find('.pages');
			var current = $("#content").find('.current');
			var lastIndex = current.index();
			var indexCurrent=$(this).index();
			
		if(!animating){
			indexItem=indexCurrent;
			animateMenu();
			animating=true;
			pages.eq(indexCurrent).css('z-index',"29");
			if (lastIndex<indexCurrent){
				current.delay(800).animate({"top":-windowHeight}, 1000,"easeInQuint",function(){
					animating=false;
					current.removeClass("current");
					pages.eq(indexCurrent).addClass("current");
					setZindex();
					setPagePos();
					checkPage();
				});
			} else if (lastIndex>indexCurrent){
				current.delay(800).animate({"top":+windowHeight}, 1000,"easeInQuint",function(){
					animating=false;
					current.removeClass("current");
					pages.eq(indexCurrent).addClass("current");
					setZindex();
					setPagePos();
					checkPage();
				});
			}
		}return false;
	});
	
	$(".right-arrow").click(function(){
		var current = $("#content").find('.current');
		var pages = $("#content").find('.pages');
		var subCurrent = current.find(".subCurrent");
		var indexSubCurrent = subCurrent.index();
		var subPages = current.find(".subpages");
		
		if(!animating){
			animating=true;
			subPages.eq(indexSubCurrent+1).css("z-index","29");
						
			$("#menu").find(".current-item h3").animate({"top":"-17px"}, 400,function() {
			
				current.find(".subCurrent").animate({"left":-windowWidth}, 1000,"easeInQuint",function(){
					animating=false;					
					subCurrent.removeClass("subCurrent");
					subPages.eq(indexSubCurrent+1).addClass("subCurrent");
					setSubZindex();
					setSubPagePos();
					animateSubMenu();
					checkPage();
					
				});
			});
			
		}
	});
	
	$(".left-arrow").click(function(){
	
		var current = $("#content").find('.current');
				var pages = $("#content").find('.pages');
				var subCurrent = current.find(".subCurrent");
				var indexSubCurrent = subCurrent.index();
				var subPages = current.find(".subpages");
				
				if(!animating){
					animating=true;
					subPages.eq(indexSubCurrent-1).css("z-index","29");
		
					$("#menu").find(".current-item h3").animate({"top":"-17px"}, 400,function() {
					
						current.delay(400).find(".subCurrent").animate({"left":+windowWidth}, 1000,"easeInQuint",function(){
							animating=false;
							subCurrent.removeClass("subCurrent");
							subPages.eq(indexSubCurrent-1).addClass("subCurrent");
							
							setSubZindex();
							setSubPagePos();
							animateSubMenu();
							checkPage();
						});
					});
				}
	
	});
	
	
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
	content.css({'width' : windowWidth, 'height' : windowHeight}).find(".pages").css({'width' : windowWidth, 'height' : windowHeight}).find(".subpages").css({'width' : windowWidth-10, 'height' : windowHeight-10});
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
			current.delay(800).animate({"top":-windowHeight}, 1000,"easeInQuint",function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent+1).addClass("current");
				setZindex();
				setPagePos();
				checkPage();
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
			current.delay(800).animate({"top":windowHeight}, 1000,"easeInQuint",function(){
				animating=false;
				current.removeClass("current");
				pages.eq(indexCurrent-1).addClass("current");
				setZindex();
				setPagePos();
				checkPage();
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
						
			$("#menu").find(".current-item h3").animate({"top":"-17px"}, 400,function() {
			
				current.find(".subCurrent").animate({"left":-windowWidth}, 1000,"easeInQuint",function(){
					animating=false;					
					subCurrent.removeClass("subCurrent");
					subPages.eq(indexSubCurrent+1).addClass("subCurrent");
					setSubZindex();
					setSubPagePos();
					animateSubMenu();
					checkPage();
					
				});
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

			$("#menu").find(".current-item h3").animate({"top":"-17px"}, 400,function() {
			
				current.delay(400).find(".subCurrent").animate({"left":+windowWidth}, 1000,"easeInQuint",function(){
					animating=false;
					subCurrent.removeClass("subCurrent");
					subPages.eq(indexSubCurrent-1).addClass("subCurrent");
					
					setSubZindex();
					setSubPagePos();
					animateSubMenu();
					checkPage();
				});
			});
		}
	}
});

function animateMenu(){
	//animating=true;
	
	var currentItem = $("#menu").find(".current-item");
	currentItem.find("h2").css({"top":"17px"});
	currentItem.find("h3").css({"top":"-17px"});
	currentItem.find('.menu-thumb').animate({ backgroundColor: "#393939" }, 800);
	
	currentItem.animate({"width":"70px"}, 400,function(){
	
		$(this).removeClass("current-item");
		$("#menu").find(".item-mask").eq(indexItem).addClass("current-item");
		
		var currentItem = $("#menu").find(".current-item");
		currentItem.find('.menu-thumb').animate({ backgroundColor: "#a2d4dd" }, 800);
		
		currentItem.animate({"width":"300px"}, 400,function(){
			currentItem.find("h2").animate({"top":"0"},400);
			currentItem.find("h3").animate({"top":"0"},400);
		});
		
	});
	
}

function animateSubMenu(){
	//animating=true;
	
	var currentItem = $("#menu").find(".current-item");
	var value = $(".current").find(".subCurrent").find("h2").html();
		
	currentItem.find("h3").html(value).delay(100).animate({"top":"0px"}, 400);
}

function checkPage(){
	var currentPage = ($(".current .subCurrent").attr("id"));
	
	if(currentPage == "production2" && fProd2!=false){
		fProd2 = false;
		setTimeout(data_production, 500)
	}
	if(currentPage == "production3" && fProd3!=false){
		fProd3 = false;
		setTimeout(data_production, 500)
	}
	if(currentPage == "consommation1" && fConsom1!=false){
		fConsom1 = false;
		setTimeout(more_consume, 500)
	}
	if(currentPage == "consommation3" && fConsom3!=false){
		fConsom3 = false;
		//setTimeout(more_consume, 500)
	}
	if(currentPage == "consommation2" && fConsom2!=false){
		fConsom2 = false;
		setTimeout(creerStatsParSexe, 500)
		setTimeout(creerStatsParAge, 3000)
		setTimeout(creerStatsParRevenus, 6000)
	}
	if(currentPage == "sante1" && fSante1!=false){
		fSante1 = false;
		setTimeout(nuage_tag, 500)
	}
	if(currentPage == "sante2" && fSante2!=false){
		fSante2 = false;
		setTimeout(calorie, 500)
	}
	if(currentPage == "sante3" && fSante3!=false){
		fSante3 = false;
		risk_of_death();
	}
	if(currentPage == "environnement1" && fEnv1!=false){
		fEnv1 = false;
		setTimeout(carbon, 500)
	}
	if(currentPage == "environnement2" && fEnv2!=false){
		fEnv2 = false;
		setTimeout(litre_eau, 500)
	}
	if(currentPage == "internet1" && fInt!=false){
		fInt = false;
		setTimeout(internet, 500)
	}
	if(currentPage == "divers1" && fDivers!=false){
		fDivers = false;
		setTimeout(lesPlus, 500)
	}
}