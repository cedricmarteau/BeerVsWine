
//#production_mondial

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

$(document).ready(function(){

	$('#biere_2 img').height(0);

	$('#vin_2 img').height(0).animate({'height':'+='+hauteurVin+'px'}, 1000, 'easeInOutExpo', function(){
	$('#biere_2 img').animate({'height':'+='+hauteurBiere+'px'}, 2000,'easeInOutExpo');});


	data_production();
	import_export();
});


//#import_export
function data_production(){
	var data_production_wine= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	for (var i=0;i<10;i++){
		$("#production_vin li.diagram").eq(i).animate({
			width: data_production_wine[i]*2+"px"
		}, 1500, 'easeInOutQuint');
	}
}
function import_export(){
	var data_import_wine= new Array(37,6.8,6.6,6.3,5.6,5.2,2.5,2.4,2.2,1.1);
	var data_export_wine= new Array(34.9,18.0,9.3,8.7,4.3,3.6,3.5,3.0,2.4,1.8);
	var data_export_beer= new Array(21,19,13,5,4.9,4,3.4,2.8,2.5,2.1);
	for (var i=0;i<10;i++){
		$("#biere_import li.diagram").eq(i).animate({
			width: data_import_wine[i]*6+"px"
		}, 1500, 'linear');
		$("#biere_export li.diagram").eq(i).animate({
			width: data_export_wine[i]*6+"px"
		}, 1500, 'linear');
		$("#vin_export li.diagram").eq(i).animate({
			width: data_export_beer[i]*6+"px"
		}, 1500, 'linear');
	}
}

//#production_pays



