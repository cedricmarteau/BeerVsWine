
//#production_mondial

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

$(document).ready(function(){

	$('#biere_2 img').height(0);

	$('#vin_2 img').height(0).animate({'height':'+='+hauteurVin+'px'}, 1000, 'easeInOutExpo', function(){
	$('#biere_2 img').animate({'height':'+='+hauteurBiere+'px'}, 2000,'easeInOutExpo');});


});


//#import_export





//#production_pays



