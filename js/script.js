$(document).ready(function{
	resizecontent();

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
//		var realisation = $('.realisation');
//		var sidebarWidth = $('#sidebar').width();
//		var contentWidth = windowWidth - sidebarWidth;
//		var lengthW = realisation.length;
//		var totalWidth = contentWidth*(lengthW);
//		
//		$("#content").css('height',windowHeight);
//		$('.pages').css('width',contentWidth);
//		$('.about-exp').css('width',contentWidth);
//		$('.about-section').css('width',(contentWidth-4)/3);
//		
//		var workWidth = (windowWidth)-(sidebarWidth+3);
//		
//		if (openProject == true){
//			var id = $('.realisation.open').index();
//			var realPosition = (((-contentWidth)*id));
//			var newLeftPos = (-workWidth-1)*(id);
//			
//			realisation.css('width',workWidth);
//			$('.work-list').css('left',newLeftPos).css('width',totalWidth-1);
//		};
//		
		////console.log('width : ',contentWidth,'newPos : ',realPosition);
//		
//		$("#content section.pages").each(function(index,item){
			////console.log($(this).attr("id"));
//			if ($(this).attr("id")!=currentPage){
//				$(this).css("top",windowHeight);
//				$(this).css("display","none");
//			}
//		});
//		
//		scrolling();	
//		resizeImageBackground();
}
