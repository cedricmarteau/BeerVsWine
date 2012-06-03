
//#production_mondial

$(document).ready(function(){


	$('#vin_2 img').height(0).animate({'height':'+=106px'}, 300, 'linear').function(){$('#vin_2 img').height(0).animate({'height':'+=106px'}, 300, 'linear');};
	//$('#biere_2 img').height(0).animate({'height':'+=605px'}, 500, 'linear');


});


//#import_export
function data_production(){
	var data_production_wine= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	for (var i=0;i<10;i++){
		$("#vin_import li.diagram").eq(i).animate({
			width: data_production_wine[i]*2+"px"
		}, 500, 'swing');
	}
}


//#production_pays



