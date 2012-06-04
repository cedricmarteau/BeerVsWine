
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
	best_consom();

	creerStatsParSexe();
	creerStatsParAge();
	creerStatsParRevenus();
	nuage_tag();


	nuage_tag();
	litre_eau();
	risk_of_death();

});



//#consomation par..



function creerStatsParSexe(){

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
	var hauteurFemmeAutres = 238 - hauteurFemmeVin - hauteurFemmeBiere;

	var statsParSexe = new Raphael(document.getElementById('statsParSexe'),339,332);
	

	//Rectangle homme vin
	var rectangleHommeVin = statsParSexe.rect(2,0,115,hauteurHommeVin);
	rectangleHommeVin.attr({
		'fill': "url(img/texture_vin.png)" ,
		stroke: "none",
		y: hauteurOffset + hauteurHomme
	});

	rectangleHommeVin.animate({y:hauteurOffset + hauteurHomme - hauteurHommeVin}, 1000,function(){
		var rectangleHommeBiere = statsParSexe.rect(2,0,115,hauteurHommeBiere);
		rectangleHommeBiere.toBack();
		rectangleHommeBiere.attr({
			'fill': "url(img/texture_biere.png)" ,
			stroke: "none",
			y: hauteurOffset + hauteurHomme-hauteurHommeVin
		});
		rectangleHommeBiere.animate({y:hauteurOffset + hauteurHomme - hauteurHommeVin - hauteurHommeBiere}, 1000, function(){
			var rectangleHommAutres = statsParSexe.rect(2,0,115,hauteurHommeAutres);
			rectangleHommAutres.toBack();
			rectangleHommAutres.attr({
				'fill': "#d2d2d2" ,
				stroke: "none",
				y: hauteurOffset + hauteurHomme - hauteurHommeVin - hauteurHommeBiere
			});
			rectangleHommAutres.animate({y:hauteurOffset + hauteurHomme - hauteurHommeVin - hauteurHommeBiere - hauteurHommeAutres}, 1000);
		});
	});

	var rectangleFemmeVin = statsParSexe.rect(116,0,115,hauteurFemmeVin);
	rectangleFemmeVin.attr({
		'fill': "url(img/texture_vin.png)" ,
		stroke: "none",
		y: hauteurOffset + hauteurHomme
	});
	rectangleFemmeVin.animate({y:hauteurOffset + hauteurHomme - hauteurFemmeVin}, 1000, function(){
		var rectangleFemmeBiere = statsParSexe.rect(114,0,115,hauteurFemmeBiere);
		rectangleFemmeBiere.toBack();
		rectangleFemmeBiere.attr({
			'fill': "url(img/texture_biere.png)" ,
			stroke: "none",
			y: hauteurOffset + hauteurHomme-hauteurFemmeVin
		});
		rectangleFemmeBiere.animate({y:hauteurOffset + hauteurHomme - hauteurFemmeVin - hauteurFemmeBiere},1000, function(){
			var rectangleFemmeAutres = statsParSexe.rect(114,0,115,hauteurFemmeAutres);
			rectangleFemmeAutres.toBack();
				rectangleFemmeAutres.attr({
				'fill': "#d2d2d2" ,
				stroke: "none",
				y: hauteurOffset + hauteurHomme - hauteurFemmeVin - hauteurFemmeBiere
			});
			rectangleFemmeAutres.animate({y:hauteurOffset + hauteurHomme - hauteurFemmeVin - hauteurFemmeBiere - hauteurFemmeAutres},1000);

		});
	});
}

function creerStatsParAge(){

	var statsAge=[25/47*90,39/47*90,31/47*90,41/47*90,47/47*90,27/47*90];
	var largeureMax = 90;

	var vinJeune = $("#jeune .VinAge .pourcentageAge");
	var biereJeune = $("#jeune .biereAge .pourcentageAge");

	var vinAdulte = $("#adulte .VinAge .pourcentageAge");
	var biereAdulte = $("#adulte .biereAge .pourcentageAge");

	var vinVieux = $("#vieux .VinAge .pourcentageAge");
	var biereVieux = $("#vieux .biereAge .pourcentageAge");

	vinJeune.css({"width":0+"px"});
	biereJeune.css({"width":0+"px"});
	vinAdulte.css({"width":0+"px"});
	biereAdulte.css({"width":0+"px"});
	vinVieux.css({"width":0+"px"});
	biereVieux.css({"width":0+"px"});


	vinJeune.animate({'width':statsAge[0]+'px'}, 1000);
	biereJeune.animate({'width':statsAge[1]+'px'}, 1000,function(){
		vinAdulte.animate({'width':statsAge[2]+'px'}, 1000);
		biereAdulte.animate({'width':statsAge[3]+'px'}, 1000,function(){
			vinVieux.animate({'width':statsAge[4]+'px'}, 1000);
			biereVieux.animate({'width':statsAge[5]+'px'}, 1000);
		});
	});

}

function creerStatsParRevenus(){

	var hauteurMaxRevenus = 78;
	var statsRevenus=[51/51*78,16/51*78,33/51*78,38/51*78,30/51*78,43/51*78,];

	var jaugePauvresBiere = $("#pauvres .bierreRevenus .jaugeRevenus");
	var jaugePauvresVin = $("#pauvres .vinRevenus .jaugeRevenus");
	var jaugemoyensBiere = $("#moyens .bierreRevenus .jaugeRevenus");
	var jaugemoyensVin= $("#moyens .vinRevenus .jaugeRevenus");
	var jaugerichesBiere = $("#riches .bierreRevenus .jaugeRevenus");
	var jaugerichesVin = $("#riches .vinRevenus .jaugeRevenus");

	jaugePauvresBiere.animate({'height':statsRevenus[0]+'px'}, 3000);
	jaugePauvresVin.animate({'height':statsRevenus[1]+'px'}, 3000);
	jaugemoyensBiere.animate({'height':statsRevenus[2]+'px'}, 3000);
	jaugemoyensVin.animate({'height':statsRevenus[3]+'px'}, 3000);
	jaugerichesBiere.animate({'height':statsRevenus[4]+'px'}, 3000);
	jaugerichesVin.animate({'height':statsRevenus[5]+'px'}, 3000);

}

/*,function(){
						var rectangleFemmeAutres = statsParSexe.rect(0,0,115,hauteurFemmeAutres);
						rectangleFemmeAutres.toBack();
						rectangleFemmeAutres.attr({
							'fill': "#d2d2d2" ,
							stroke: "none",
							y: hauteurOffset + hauteurHomme - hauteurFemmeVin - hauteurFemmeBiere
						});
						rectangleFemmeAutres.animate({y:hauteurOffset + hauteurHomme - hauteurFemmeVin - hauteurFemmeBiere - hauteurFemmeAutres}, 1000);
					}*/



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
	/*var data_beer_more_consum = new Array(45,42,46,42,36,40,40,36),
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
			"stroke":"#FCD014",
			"fill":"#FCD014"
		});
		circle_wine.attr({
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
	/*
	//ORDRE DÉCROISSANT
	var data_beer_best_consum = new Array(161.5,157,141.2,110.6,101.6,101.5,96.2,96.2,91.5,88.4),
	data_wine_best_consum = new Array(62.2,60.13,55.85,52.70,48.16,46.67,43.77,42.27,39.87,34.66),
	
	//MELANGÉ
	// var data_beer_best_consum = new Array(161.5,110.6,157,88.4,141.2,96.2,101.6,91.5,101.5,96.2),
	// data_wine_best_consum = new Array(62.2,39.87,60.13,48.16,55.85,46.67,34.66,43.77,52.70,42.27),
	angle = 360/10,
	paper_best_consom_width = 700,
	paper_best_consom_height = 700,
	paper_best_consom = Raphael(document.getElementById("best_consom"), paper_best_consom_width, paper_best_consom_height),
	tab_fromage_beer = new Array(),
	tab_fromage_wine = new Array(),
	centre_fromage_beer = "200 200",
	centre_fromage_wine = "550 200",
	rayon = 100,
	size_beer = 150,
	size_wine = 45,
	L_cote_oppose_big = (Math.sin(angle/2*Math.PI/180)*rayon)*2,
	L_cote_oppose_little = Math.sin(angle/2*Math.PI/180)*rayon,
	L_cote_little = Math.sqrt((L_cote_oppose_big*L_cote_oppose_big)-(L_cote_oppose_little*L_cote_oppose_little));
	console.log("cote_oppose_big "+L_cote_oppose_big)
	console.log("cote_oppose_little "+L_cote_oppose_little)
	console.log("cote_little "+L_cote_little)
	for (var i=0;i<10;i++){
		var paper_best_consom_beer_path = paper_best_consom.path("M"+centre_fromage_beer+"l"+(rayon*size_beer)/data_beer_best_consum[i]+" "+(L_cote_oppose_little*size_beer)/data_beer_best_consum[i]+"l"+0+" "+(-L_cote_oppose_big*size_beer)/data_beer_best_consum[i]+"L"+centre_fromage_beer);
		var paper_best_consom_wine_path = paper_best_consom.path("M"+centre_fromage_wine+"l"+(rayon*size_wine)/data_wine_best_consum[i]+" "+(L_cote_oppose_little*size_wine)/data_wine_best_consum[i]+"l"+0+" "+(-L_cote_oppose_big*size_wine)/data_wine_best_consum[i]+"L"+centre_fromage_wine);
		console.log(paper_best_consom_beer_path)
		tab_fromage_beer.push(paper_best_consom_beer_path);
		tab_fromage_wine.push(paper_best_consom_wine_path);
		paper_best_consom_beer_path.attr({
			"stroke":"white",
			"stroke-width":"4px",
			"fill":"#FCD014"
		});
		paper_best_consom_wine_path.attr({
			"stroke":"white",
			"stroke-width":"3px",
			"fill":"#8F0F0B"
		});
	}
	for (var i=0;i<10;i++){
		var deg=i*35.8;
		tab_fromage_beer[i].animate({transform:"r"+deg+" 200 200"},1500, 'easeInCirc');
		tab_fromage_wine[i].animate({transform:"r"+deg+" 550 200"},1500, 'easeInCirc');
	}*/
}


//risques de mort
function risk_of_death(){
	var paper_risk_death_width = 500,
	paper_risk_death_height = 240, 
	paper_risk_death = Raphael(document.getElementById("death"), paper_risk_death_width, paper_risk_death_height),
	beer_risk_all = new Array(1,0.9,1,1.3),
	beer_risk_chd = new Array(1,0.8,0.6,0.8),
	beer_risk_cancer = new Array(1,1.1,1.3,1.5),
	wine_risk_all = new Array(1,0.8,0.7,0.9),
	wine_risk_chd = new Array(1,0.7,0.6,0.8),
	wine_risk_cancer = new Array(1,0.9,0.8,0.9);
	for (var i=1;i<=10;i++){
		var abscisse = paper_risk_death.path("M45"+" "+(200-i*20)+"L"+paper_risk_death_width*i+" "+(200-i*20));
		console.log(abscisse);
		abscisse.attr({
			"stroke":"1px"
		});
		//x y width height
		var beer_rect_all = paper_risk_death.rect(90, 100, 35, 100, 5),
		wine_rect_all = paper_risk_death.rect(130, 100, 35, 100, 5),
		beer_rect_chd = paper_risk_death.rect(240, 100, 35, 100, 5),
		wine_rect_chd = paper_risk_death.rect(280, 100, 35, 100, 5),
		beer_rect_cancer = paper_risk_death.rect(390, 100, 35, 100, 5),
		wine_rect_cancer = paper_risk_death.rect(430, 100, 35, 100, 5);
		wine_rect_all.attr({
			"stroke":"none",
			"fill":"#8F0F0B"
		});
		beer_rect_all.attr({
			"stroke":"none",
			"fill":"#FCD014"
		});
		wine_rect_chd.attr({
			"stroke":"none",
			"fill":"#8F0F0B"
		});
		beer_rect_chd.attr({
			"stroke":"none",
			"fill":"#FCD014"
		});
		wine_rect_cancer.attr({
			"stroke":"none",
			"fill":"#8F0F0B"
		});
		beer_rect_cancer.attr({
			"stroke":"none",
			"fill":"#FCD014"
		});
	}
	var max_ordonnee = paper_risk_death.text(15, 10, "1,8*");
	var middle_ordonnee = paper_risk_death.text(15, 90, "1*");
	var min_ordonnee = paper_risk_death.text(15, 190, "0,2*");
	max_ordonnee.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	middle_ordonnee.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	min_ordonnee.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	var all = paper_risk_death.text(126, 225, "Causes diverses");
	var chd = paper_risk_death.text(280, 225, "Problème cardiaque");
	var cancer = paper_risk_death.text(430, 225, "Cancer");
	all.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	chd.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	cancer.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	
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
function litre_eau(){
	$('#litreEau #raisin, #litreEau #cereales').animate({marginTop:0}, 500,function(){
		$('#litreEau ul').animate({bottom:0});
	});
	
	$('#litreEau li').not('.litreTxt').hover(function(){
		$(this).animate({'background-size':5});
	}, function(){
		$(this).animate({'background-size':18});
	});
}

