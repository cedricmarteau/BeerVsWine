
//#production_mondial

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hectolitreCalcule1 = 0 ;
var hectolitreCalcule2 = 0 ;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

var hauteurAnimation2 = 675;
var placementTirets21 = hauteurAnimation2 - hauteurVin - 30;
var placementTirets22 = hauteurAnimation2 - hauteurBiere - 30;

$(document).ready(function(){

	 $('#nbBiere2').text(0);
	var t1 =setInterval(function(){
				hectolitreCalcule1+=2;
                 $('#nbVin2').text(hectolitreCalcule1);
                 if(hectolitreCalcule1==hectolitreVin){
	                 clearInterval(t1);
                  	hectolitreCalcule1 = hectolitreVin;}
				}, 1);

	$('#biere_2 img').height(0);
	$('#tiret21').css({"marginTop":""+(hauteurAnimation2-25)+"px"});
	$('#tiret22').css({"marginTop":""+(hauteurAnimation2-25)+"px"});

	$('#tiret21').animate({"marginTop": ""+placementTirets21+"px"},2000,'easeInOutExpo');
	$('#vin_2 img').height(0).animate({'height':'+='+hauteurVin+'px'}, 2000, 'easeInOutExpo', function(){
		$('#biere_2 img').animate({'height':'+='+hauteurBiere+'px'}, 3000,'easeInOutExpo');
		$('#tiret22').animate({"marginTop": ""+placementTirets22+"px"},3000,'easeInOutExpo',function(){
			$('#nbBiere2').text(hectolitreBiere);
		});

		var t2 =setInterval(function(){
				hectolitreCalcule2+=3;
                  $('#nbBiere2').text(hectolitreCalcule2);
                  if(hectolitreCalcule2>hectolitreBiere-3){
                  		hectolitreCalcule2 = hectolitreBiere;
	                  	clearInterval(t2);
                  		}
				}, 1);
	});

	data_production();
	import_export();
	more_consume();
<<<<<<< HEAD
	best_consom();
=======
	//creerStats();
>>>>>>> 6090a0e02703547efce74639145cf3053d234d03
	nuage_tag();
});



//#consomation par..

/*function creerStats(){

	var largeurCanvas = 339;
	var hauteurCanvas = 332;

	var hauteurOffset = 35;
	var hauteurHomme = 238;
	var consommationHommeVin = 20;
	var consommationHommeBiere = 48;

	var consommationFemmeVin = 51;
	var consommationFemmeBiere = 22;

	var hauteurHommeVin = 238*20/100;
	var hauteurHommeBiere = 238*48/100;
	var hauteurHommeAutres = 238-hauteurHommeVin-hauteurHommeBiere;

	var hauteurFemmeVin = 238*51/100;
	var hauteurFemmeBiere = 238*22/100;
	var hauteurFemmeAutres = 238 - hauteurFemmeVin - hauteurFemmeAutres;

	var statsParSexe = new Raphael(document.getElementById('statsParSexe'),339,332);
	
	var rectangleHommeVin = statsParSexe.rect(0,0,115,hauteurHommeVin);

	rectangleHommeVin.attr({
		'fill': "url(img/texture_vin.png)" ,
		stroke: "none",
		y: hauteurOffset + hauteurHomme
	});

	rectangleHommeVin.animate({y:hauteurOffset + hauteurHomme - hauteurHommeVin}, 1500,function(){
		var rectangleHommeBiere = statsParSexe.rect(0,0,115,hauteurHommeVin);

	});
}

/*
	});*/







//#import_export
function data_production(){
	var data_production_wine= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	var data_production_beer= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	for (var i=0;i<10;i++){
		$("#production_vin li.diagram").eq(i).animate({
			width: data_production_wine[i]*4+"px"
		}, 1500, 'easeInOutQuint');
		$("#production_biere li.diagram").eq(i).animate({
			width: data_production_wine[i]*4+"px"
		}, 1500, 'easeInOutQuint');
	}
}
function import_export(){
	var data_import_wine= new Array(37,6.8,6.6,6.3,5.6,5.2,2.5,2.4,2.2,1.1);
	var data_export_wine= new Array(34.9,18.0,9.3,8.7,4.3,3.6,3.5,3.0,2.4,1.8);
	var data_export_beer= new Array(21,19,13,5,4.9,4,3.4,2.8,2.5,2.1);
	for (var i=0;i<10;i++){
		$("#biere_import li.diagram").eq(i).animate({
			width: data_import_wine[i]*13+"px"
		}, 1500, 'linear');
		$("#biere_export li.diagram").eq(i).animate({
			width: data_export_wine[i]*13+"px"
		}, 1500, 'linear');
		$("#vin_export li.diagram").eq(i).animate({
			width: data_export_beer[i]*13+"px"
		}, 1500, 'linear');
	}
}

//les plus consommés

function more_consume(){
	var data_beer_more_consum = new Array(45,42,46,42,36,40,40,36),
	data_wine_more_consum = new Array(32,34,31,33,39,34,34,35),
	data_liqueur_more_consum = new Array(18,19,18,22,21,22,21,23),
	paper_width = 700,
	paper_height = 500,
	paper = Raphael(document.getElementById("plus_consom"), paper_width, paper_height),
	line_beer = "",
	line_beer_anim = "",
	line_wine = "",
	line_wine_anim = "",
	line_liqueur = "",
	line_liqueur_anim = "",
	tab_circle_beer = new Array(),
	tab_circle_wine = new Array(),
	circle_beer_anim = new Object(),
	circle_wine_anim = new Object(),
	circle_liqueur_anim = new Object(),
	letter,
	abscisse,
	ordonnee = paper.path("M0"+" "+paper_height+"L0 0"),
	abscisse = paper.path("M0"+" "+paper_height+"L"+paper_width+" "+paper_height),
	ordonnee_50 = paper.path("M0 1L5 1"),
	ordonnee_25 = paper.path("M0 "+paper_height/2+"L5 "+paper_height/2);
	for (var i=1;i<=7;i++){
		if (i==1){letter="M"}else{letter="L"};
		var abscisse = paper.path("M"+((paper_width/8)*i)+" "+paper_height+"L"+((paper_width/8)*i)+" "+(paper_height-5)),
		circle_beer = paper.circle(i*(paper_width/8), paper_width-((45*paper_width)/50), 5),
		circle_wine = paper.circle(i*(paper_width/8), paper_width-((32*paper_width)/50), 5);
		tab_circle_beer.push(circle_beer);
		tab_circle_wine.push(circle_wine);
		circle_beer.attr({
			"value":i,
			"stroke":"#FCD014",
			"fill":"#FCD014"
		});
		circle_wine.attr({
			"value":i,
			"stroke":"#8F0F0B",
			"fill":"#8F0F0B"	
		});
		line_beer += letter+i*(paper_width/8)+" "+(paper_width-((45*paper_width)/50));
		line_wine += letter+i*(paper_width/8)+" "+(paper_width-((32*paper_width)/50));
	}
	var beer_path = paper.path(line_beer);
	beer_path.attr({
		"stroke":"#FCD014",
		"stroke-width":"5"	
	});
	var wine_path = paper.path(line_wine);
	wine_path.attr({
		"stroke":"#8F0F0B",
		"stroke-width":"5"	
	});
	var liqueur_path = paper.path(line_liqueur);
	liqueur_path.attr({
		"stroke":"#A2D4DD",
		"stroke-width":"5"	
	});
	for (var i=1;i<=7;i++){
		//M : point d'origine, L : point d'arrivée en absolute
		if (i==1){
			letter="M";
		}else{
			letter="L"
		};
		//Courbes
		line_beer_anim += letter+i*(paper_width/8)+" "+(paper_width-((data_beer_more_consum[i]*paper_width)/50));
		line_wine_anim += letter+i*(paper_width/8)+" "+(paper_width-((data_wine_more_consum[i]*paper_width)/50));
		line_liqueur_anim += letter+i*(paper_width/8)+" "+(paper_width-((data_liqueur_more_consum[i]*paper_width)/50));
		//Cercles
		circle_beer_anim[i] = [i*(paper_width/8), paper_width-((data_beer_more_consum[i]*paper_width)/50)];
		circle_wine_anim[i] = [i*(paper_width/8), paper_width-((data_wine_more_consum[i]*paper_width)/50)];
		//circle_liqueur_anim[i] = [i*(paper_width/8), paper_width-((data_liqueur_more_consum[i]*paper_width)/50)];
		tab_circle_beer[i-1].animate({cx: circle_beer_anim[i][0], cy: circle_beer_anim[i][1]},1000);
		tab_circle_wine[i-1].animate({cx: circle_wine_anim[i][0], cy: circle_wine_anim[i][1]},1000);
	}
	beer_path.animate({path:line_beer_anim},1000);
	wine_path.animate({path:line_wine_anim},1000);
	//liqueur_path.animate({path:line_liqueur_anim},1000);*/
}

//les plus gros consommateur
function best_consom(){
	// var data_beer_best_consum = new Array(161.5,157,141.2,110.6,101.6,101.5,96.2,96.2,91.5,88.4),
	// 	data_wine_best_consum = new Array(62.2,60.13,55.85,52.70,48.16,46.67,43.77,42.27,39.87,34.66),
	// 	angle = 360/10,
	// 	paper_best_consom_width = 500,
	// 	paper_best_consom_height = 500,
	// 	paper_best_consom = Raphael(document.getElementById("best_consom"), paper_best_consom_width, paper_best_consom_height),
	// 	centre_fromage = "M250 250",
	// 	rayon = 200,
	// 	L_cote_oppose = (Math.sin(angle/2*Math.PI/180)*rayon)*2;
	// 	//console.log("cote_oppose "+L_cote_oppose)
	// 	for (var i=0;i<10;i++){
	// 		paper_best_consom.path(centre_fromage+"L"+(i*angle)+" "+(250+rayon*100)/data_beer_best_consum[i]);
	// 	}
}

//#sante
function nuage_tag(){
        var nuageTextVal= new Array(
 			'Texte1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte13 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte14 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte15 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte16 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte17 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte18 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.',
 			'Texte19 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum consectetur augue, eu interdum augue sollicitudin at.'
 		);
		var nuageName;
		var nuageText;
		var nuageType;

        $('#nuageDeTag p#nuageLine1').animate({marginLeft:11}, 500);
        $('#nuageDeTag p#nuageLine2').animate({marginLeft:0}, 500);
        $('#nuageDeTag p#nuageLine3').animate({marginLeft:12}, 500);
        $('#nuageDeTag p#nuageLine4').animate({marginLeft:-40}, 500);
        $('#nuageDeTag p#nuageLine5').animate({marginLeft:32}, 500);
        
        $('#nuageDeTag p a').click(function(){
 			nuageName=$(this).attr('name');
 			nuageText=nuageName.substring(9,11);
 			nuageType=nuageName.substring(12,15);
 			
 			if (nuageType=='vin') {
 				$('#nuageIconVin').animate({left:0});
 				$('#nuageIconBiere').animate({right:45});
 				$('#nuageTexte').animate({'border-color':'#8e0f0a'});
 			} else {
 				$('#nuageIconVin').animate({left:45});
 				$('#nuageIconBiere').animate({right:0});
 				$('#nuageTexte').animate({'border-color':'#fad947'});
 			}
 			$('#nuageTexte').html(nuageTextVal[nuageText-1]);
 			return false;
         });
}

