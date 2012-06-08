
//#production_mondial
function production_mondiale(){

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hectolitreCalcule1 = 0 ;
var hectolitreCalcule2 = 0 ;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

var hauteurAnimation2 = 675;
var placementTirets21 = hauteurAnimation2 - hauteurVin - 30;
var placementTirets22 = hauteurAnimation2 - hauteurBiere - 30;

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
				hectolitreCalcule2+=7;
                  $('#nbBiere2').text(hectolitreCalcule2);
                  if(hectolitreCalcule2>hectolitreBiere-3){
                  		//hectolitreCalcule2 = hectolitreBiere;
	                  	clearInterval(t2);
                  		}
				}, 1);
	});
}




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

//#import_export
function data_production(){
	var data_production_wine= new Array(50.50,47.12,36.45,23.00,15.50,14.50,10.50,9.62,8.33,8.28);
	var data_production_beer= new Array(233.50,167.70,98.90,58.10,31,17.30,15.50,12.10,11.90,3.50);
	for (var i=0;i<10;i++){
		$("#production_vin li.diagram").eq(i).animate({
			width: data_production_wine[i]*2+"px"
		}, 1500, 'easeInOutQuint');
		$("#production_biere li.diagram").eq(i).animate({
			width: data_production_beer[i]*2+"px"
		}, 1500, 'easeInOutQuint');
	}
}
function import_export(){
	var data_import_beer= new Array(37,6.8,6.6,6.3,5.6,5.2,2.5,2.4,2.2,1.1);
	var data_import_wine= new Array(18,15.51,14.51,9.54,7.35,6.09,4.72,3.47,2.2,2.15);
	var data_export_wine= new Array(34.9,18.0,9.3,8.7,4.3,3.6,3.5,3.0,2.4,1.8);
	var data_export_beer= new Array(21,19,13,5,4.9,4,3.4,2.8,2.5,2.1);
	for (var i=0;i<10;i++){
		$("#vin_import li.diagram").eq(i).animate({
			width: data_import_wine[i]*13+"px"
		}, 1500, 'linear');
		$("#biere_import li.diagram").eq(i).animate({
			width: data_import_beer[i]*13+"px"
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
	paper_width = 600,
	paper_height = 400,
	paper = new Raphael(document.getElementById("plus_consom"), paper_width, paper_height),
	line_beer = "",
	line_beer_anim = "",
	line_wine = "",
	line_wine_anim = "",
	line_liqueur = "",
	line_liqueur_anim = "",
	tab_circle_beer = new Array(),
	tab_circle_wine = new Array(),
	tab_circle_liqueur = new Array(),
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
		circle_beer = paper.circle(i*(paper_width/8), paper_width-((45*paper_width)/50), 10),
		circle_wine = paper.circle(i*(paper_width/8), paper_width-((32*paper_width)/50), 10);
		circle_liqueur = paper.circle(i*(paper_width/8), paper_width-((18*paper_width)/50), 10);
		tab_circle_beer.push(circle_beer);
		tab_circle_wine.push(circle_wine);
		tab_circle_liqueur.push(circle_liqueur);
		circle_beer.attr({
			"stroke":"#FCD014",
			"fill":"#FCD014"
		});
		circle_wine.attr({
			"stroke":"#8F0F0B",
			"fill":"#8F0F0B"	
		});
		circle_liqueur.attr({
			"stroke":"#A2D4DD",
			"fill":"#A2D4DD"
		});
		line_beer += letter+i*(paper_width/8)+" "+(paper_width-((45*paper_width)/50));
		line_wine += letter+i*(paper_width/8)+" "+(paper_width-((32*paper_width)/50));
		line_liqueur += letter+i*(paper_width/8)+" "+(paper_width-((18*paper_width)/50));
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
		circle_liqueur_anim[i] = [i*(paper_width/8), paper_width-((data_liqueur_more_consum[i]*paper_width)/50)];
		tab_circle_beer[i-1].animate({cx: circle_beer_anim[i][0], cy: circle_beer_anim[i][1]},1000);
		tab_circle_wine[i-1].animate({cx: circle_wine_anim[i][0], cy: circle_wine_anim[i][1]},1000);
		tab_circle_liqueur[i-1].animate({cx: circle_liqueur_anim[i][0], cy: circle_liqueur_anim[i][1]},1000);
	}
	beer_path.animate({path:line_beer_anim},1000);
	wine_path.animate({path:line_wine_anim},1000);
	liqueur_path.animate({path:line_liqueur_anim},1000);
}

//les plus gros consommateur
function best_consom(){
	//ORDRE DÉCROISSANT
	var data_beer_best_consum = new Array(161.5,157,141.2,110.6,101.6,101.5,96.2,96.2,91.5,88.4),
	data_wine_best_consum = new Array(62.2,60.13,55.85,52.70,48.16,46.67,43.77,42.27,39.87,34.66),
	
	//MELANGÉ
	// var data_beer_best_consum = new Array(161.5,110.6,157,88.4,141.2,96.2,101.6,91.5,101.5,96.2),
	// data_wine_best_consum = new Array(62.2,39.87,60.13,48.16,55.85,46.67,34.66,43.77,52.70,42.27),
	angle = 360/10,
	paper_best_consom_width = 700,
	paper_best_consom_height = 700,
	paper_best_consom = new Raphael(document.getElementById("best_consom"), paper_best_consom_width, paper_best_consom_height),
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
		paper_best_consom_beer_path.id = i;
		paper_best_consom_wine_path.id = i+10;

		console.log(paper_best_consom_beer_path.id);
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
	}

	
}

function carbon(){
	
	$(".cloud1 img").animate({"width":"200px"}, 300, function(){
		$(".cloud2 img").animate({"width":"75px"}, 300, function(){
			$(".cloud3 img").animate({"width":"125px"}, 300, function(){
				$(".cloud4 img").animate({"width":"225px"}, 300, function(){
					
				});
			});
		});
	});

	var legend_wine_paper = new Raphael(document.getElementById("legend_wine"), 20, 100),
	circle_legend_wine1 = legend_wine_paper.circle(10, 10, 6),
	circle_legend_wine2 = legend_wine_paper.circle(10, 35, 6),
	circle_legend_wine3 = legend_wine_paper.circle(10, 60, 6);
	circle_legend_wine4 = legend_wine_paper.circle(10, 85, 6);
	circle_legend_wine1.attr({
		"stroke":"#b52f46",
		"fill":"#b52f46"
	});;
	circle_legend_wine2.attr({
		"stroke":"#952230",
		"fill":"#952230"
	});;
	circle_legend_wine3.attr({
		"stroke":"#901b20",
		"fill":"#901b20"
	});
	circle_legend_wine4.attr({
		"stroke":"#521013",
		"fill":"#521013"
	});
	var legend_beer_paper = new Raphael(document.getElementById("legend_beer_2"), 20, 150),
	circle_legend_beer1 = legend_beer_paper.circle(10, 10, 6),
	circle_legend_beer2 = legend_beer_paper.circle(10, 35, 6),
	circle_legend_beer3 = legend_beer_paper.circle(10, 60, 6);
	circle_legend_beer4 = legend_beer_paper.circle(10, 85, 6);
	circle_legend_beer5 = legend_beer_paper.circle(10, 110, 6);
	circle_legend_beer1.attr({
		"stroke":"#FFF000",
		"fill":"#FFF000"
	});;
	circle_legend_beer2.attr({
		"stroke":"#FFE100",
		"fill":"#FFE100"
	});;
	circle_legend_beer3.attr({
		"stroke":"#CCB400",
		"fill":"#CCB400"
	});
	circle_legend_beer4.attr({
		"stroke":"#ABA259",
		"fill":"#ABA259"
	});
	circle_legend_beer5.attr({
		"stroke":"#867f45",
		"fill":"#867f45"
	});
}


//risques de mort
function risk_of_death(){

		// var paper_risk_death = Raphael(document.getElementById("death"), paper_best_consom_width, paper_best_consom_height);

	var paper_risk_death_width = 550,
	paper_risk_death_height = 350, 
	paper_risk_death = new Raphael(document.getElementById("death"), paper_risk_death_width, paper_risk_death_height),
	beer_risk_all = new Array(1,0.9,1,1.3),
	beer_risk_chd = new Array(1,0.8,0.6,0.8),
	beer_risk_cancer = new Array(1,1.1,1.3,1.5),
	wine_risk_all = new Array(1,0.8,0.7,0.9),
	wine_risk_chd = new Array(1,0.7,0.6,0.8),
	wine_risk_cancer = new Array(1,0.9,0.8,0.9);
	for (var i=1;i<=10;i++){
		var abscisse = paper_risk_death.path("M45"+" "+(200-i*20)+"L"+(paper_risk_death_width-45)+" "+(200-i*20));
		abscisse.attr({
			"stroke":"1px"
		});
	}
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
	var max_ordonnee = paper_risk_death.text(15, 5, "1,8*");
	var middle_ordonnee = paper_risk_death.text(15, 100, "1*");
	var min_ordonnee = paper_risk_death.text(15, 195, "0,2*");
	max_ordonnee.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	middle_ordonnee.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	min_ordonnee.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	var all = paper_risk_death.text(126, 225, "Causes diverses"),
	chd = paper_risk_death.text(280, 225, "Problème cardiaque"),
	cancer = paper_risk_death.text(430, 225, "Cancer");
	all.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	chd.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	cancer.attr({
		"font-family":'NovecentowideBold',
		"font-size" : '12px'
	});
	var toolbar = paper_risk_death.path("M0"+" "+(paper_risk_death_height-10)+"L"+paper_risk_death_width+" "+(paper_risk_death_height-10));
	nbverre_0 = paper_risk_death.text(10, paper_risk_death_height-30, "0"),
	nbverre_1 = paper_risk_death.text((paper_risk_death_width/3), paper_risk_death_height-30, "1-7"),
	nbverre_8 = paper_risk_death.text((paper_risk_death_width/3)*2, paper_risk_death_height-30, "8-21"),
	nbverre_21 = paper_risk_death.text(paper_risk_death_width-10, paper_risk_death_height-30, ">21"),
	legend_nbverre = paper_risk_death.text(270, paper_risk_death_height-55, "Nombre de verres par semaine");
	nbverre_0.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	nbverre_1.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	nbverre_8.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	nbverre_21.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	legend_nbverre.attr({
		"font-family":"NovecentowideBookRegular",
		"font-size" : '12px'
	});
	var cursor_nbverre_0 = paper_risk_death.circle(10, paper_risk_death_height-10, 10),
	cursor_nbverre_1 = paper_risk_death.circle((paper_risk_death_width/3), paper_risk_death_height-10, 10),
	cursor_nbverre_8 = paper_risk_death.circle((paper_risk_death_width/3)*2, paper_risk_death_height-10, 10),
	cursor_nbverre_21 = paper_risk_death.circle((paper_risk_death_width-10), paper_risk_death_height-10, 10),
	cursor_nbverre = paper_risk_death.circle(10, paper_risk_death_height-10, 10);
	cursor_nbverre.attr({
		"stroke":"none",
		"fill":"black"
	});
	cursor_nbverre_0.attr({
		"stroke":"none",
		"fill":"#A2D4DD"
	});
	cursor_nbverre_1.attr({
		"stroke":"none",
		"fill":"#A2D4DD"
	});
	cursor_nbverre_8.attr({
		"stroke":"none",
		"fill":"#A2D4DD"
	});
	cursor_nbverre_21.attr({
		"stroke":"none",
		"fill":"#A2D4DD"
	});
	var click_nbverre_0 = function(){
		cursor_nbverre.animate({
			"cx":10,
			"cy":paper_risk_death_height-10
		},400);
		beer_rect_all.animate({
			"height": beer_risk_all[0]*100,
			"y": beer_risk_all[0]*100
		},400);
		wine_rect_all.animate({
			"height": wine_risk_all[0]*100,
			"y": wine_risk_all[0]*100
		},400);
		beer_rect_chd.animate({
			"height": beer_risk_chd[0]*100,
			"y": beer_risk_chd[0]*100
		},400);
		wine_rect_chd.animate({
			"height": wine_risk_chd[0]*100,
			"y": wine_risk_chd[0]*100
		},400);
		beer_rect_cancer.animate({
			"height": beer_risk_cancer[0]*100,
			"y": beer_risk_cancer[0]*100
		},400);
		wine_rect_cancer.animate({
			"height": wine_risk_cancer[0]*100,
			"y": wine_risk_cancer[0]*100
		},400);
		
	}
	cursor_nbverre_0.click(click_nbverre_0);
	var click_nbverre_1 = function(){
		cursor_nbverre.animate({
			"cx":paper_risk_death_width/3,
			"cy":paper_risk_death_height-10
		},400);
		beer_rect_all.animate({
			"height": beer_risk_all[1]*100,
			"y": 200-beer_risk_all[1]*100
		},400);
		
		wine_rect_all.animate({
			"height": wine_risk_all[1]*100,
			"y": 200-wine_risk_all[1]*100
		},400);
		beer_rect_chd.animate({
			"height": beer_risk_chd[1]*100,
			"y": 200-beer_risk_chd[1]*100
		},400);
		wine_rect_chd.animate({
			"height": wine_risk_chd[1]*100,
			"y": 200-wine_risk_chd[1]*100
		},400);
		beer_rect_cancer.animate({
			"height": beer_risk_cancer[1]*100,
			"y": 200-beer_risk_cancer[1]*100
		},400);
		wine_rect_cancer.animate({
			"height": wine_risk_cancer[1]*100,
			"y": 200-wine_risk_cancer[1]*100
		},400);
	}
	cursor_nbverre_1.click(click_nbverre_1);
	var click_nbverre_8 = function(){
		cursor_nbverre.animate({
			"cx":(paper_risk_death_width/3)*2,
			"cy":paper_risk_death_height-10
		},400);
		beer_rect_all.animate({
			"height": beer_risk_all[2]*100,
			"y": 200-beer_risk_all[2]*100
		},400);
		
		wine_rect_all.animate({
			"height": wine_risk_all[2]*100,
			"y": 200-wine_risk_all[2]*100
		},400);
		beer_rect_chd.animate({
			"height": beer_risk_chd[2]*100,
			"y": 200-beer_risk_chd[2]*100
		},400);
		wine_rect_chd.animate({
			"height": wine_risk_chd[2]*100,
			"y": 200-wine_risk_chd[2]*100
		},400);
		beer_rect_cancer.animate({
			"height": beer_risk_cancer[2]*100,
			"y": 200-beer_risk_cancer[2]*100
		},400);
		wine_rect_cancer.animate({
			"height": wine_risk_cancer[2]*100,
			"y": 200-wine_risk_cancer[2]*100
		},400);
	}
	cursor_nbverre_8.click(click_nbverre_8);
	var click_nbverre_21 = function(){
		cursor_nbverre.animate({
			"cx":paper_risk_death_width-10,
			"cy":paper_risk_death_height-10
		},400);
		beer_rect_all.animate({
			"height": beer_risk_all[3]*100,
			"y": 200-beer_risk_all[3]*100
		},400);
		
		wine_rect_all.animate({
			"height": wine_risk_all[3]*100,
			"y": 200-wine_risk_all[3]*100
		},400);
		beer_rect_chd.animate({
			"height": beer_risk_chd[3]*100,
			"y": 200-beer_risk_chd[3]*100
		},400);
		wine_rect_chd.animate({
			"height": wine_risk_chd[3]*100,
			"y": 200-wine_risk_chd[3]*100
		},400);
		beer_rect_cancer.animate({
			"height": beer_risk_cancer[3]*100,
			"y": 200-beer_risk_cancer[3]*100
		},400);
		wine_rect_cancer.animate({
			"height": wine_risk_cancer[3]*100,
			"y": 200-wine_risk_cancer[3]*100
		},400);
	}
	cursor_nbverre_21.click(click_nbverre_21);

}

//#sante
function nuage_tag(){
        var nuageTextVal= new Array(
 			'La consommation modérée de vin allonge l’espérence de vie</br>en réduisant les risques de certaines maladies.',
 			'Le vin rouge a un effet bénéfique sur le cerveau en augmentant le flux sanguin cérébral et en diminuant la perte de neurones.',
 			'La consommation de bière permet de maintenir une densité osseuse suffisante pour lutter contre l’ostéoporose.',
 			'La bière augmente le taux de vitamine B6, souvent administrée pour faciliter le développement des cheveux et des ongles.',
 			'Le vin rouge, consommé de manière modérée, a un effet protecteur</br>sur le coeur et protège du risque coronarien. ',
 			'Le vin rouge réduit le risque de cancer du poumon,</br>notamment chez les fumeurs.',
 			'La bière joue un rôle préventif</br>contre la formation de calculs rénaux.',
 			'Consommer de la bière permet de réduire certains risques de</br>maladies et donc de prolonger la durée de vie.',
 			'La consommation de vin rouge divise par deux le risque</br>de cancer de la prostate.',
 			'Le vin, connu pour ses vertus bénéfiques, permet également</br>de réduire la sensation de froid.',
 			'La bière a un effet protecteur qui fortifie le coeur et</br>qui diminue le risque de maladies cardio-vasculaires.',
 			'La bière, consommée occasionnellement, augmente le taux</br>d’insuline et permet de protéger du diabète.',
 			'Le vin rouge permet de lutter contre le cancer du sein lors d’une résistance à la thérapie hormonale.',
 			'Le vin rouge aide à réduire le mauvais cholesterol en diminuant</br>le taux de LDL-cholesterol.',
 			'La consommation de bière permet de réduire les risques liés</br>à Alzheimer et autres maladies mentales.',
 			'La bière permet de baisser la pression artérielle et de diminuer</br>le risque de crises cardiaques.',
 			'Le vin rouge permet de combattre l’inflammation qui joue un rôle</br>majeur notamment dans le diabète et l’arthrite.',
 			'La bière prévient des attaques cardio-vasculaires en limitant la</br>formation de caillots qui  obstruent les artères.',
 			'La consommation de bière, de manière modérée,</br>permet de réduire le risque de cancer.'
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

var listeGrape = $('#raisin ul li').not('.litreTxt');
var listeCereales =$('#cereales ul li').not('.litreTxt');




var litreGrape = $('#raisin ul .litreTxt');
var litreCereales = $('#cereales ul .litreTxt');

//listeGrape.css({'background-image':'none'});
//listeCereales.css({'background-image':'none'});
$('#litreEau #raisin, #litreEau #cereales').css({'margin-top':1000});

listeGrape.css({'background-size':0});
listeCereales.css({'background-size':0});

	$('#litreEau #raisin, #litreEau #cereales').animate({marginTop:0}, 500,function(){
		$('#litreEau ul').animate({bottom:0},function(){
		$('#litreEau #raisin ul').css("visibility","visible");
		$('#litreEau #cereales ul').css("visibility","visible");
		
		for (var i = 0; i<listeCereales.size(); i++){
			//listeCereales.css({'background-image':'url("img/12_goutte.png")'});
			listeCereales.eq(i).delay(40*i).animate({'background-size':18});
		}

		for (var j = 0; j<listeGrape.size(); j++){
			//listeGrape.css({'background-image':'url("img/12_goutte.png")'});
			listeGrape.eq(j).delay(40*j).animate({'background-size':18});
		}
				
		});
	});


	
	listeGrape.hover(function(){
		$(this).stop(true,true).animate({'background-size':5});
	}, function(){
		$(this).stop(true,true).animate({'background-size':18});
	});

		listeCereales.hover(function(){
		$(this).stop(true,true).animate({'background-size':5});
	}, function(){
		$(this).stop(true,true).animate({'background-size':18});
	});

}
function internet(){
	$('#internet').animate({'background-size':'960'}, 1000, 'easeOutExpo');
	
	var twitterVin = 137 ;
	var twitterBiere = 106;
	
	var googleVin = 442 ;
	var googleBiere = 27;
	
	var facebookLikeVin = 1137000 ;
	var facebookSpeakVin = 16000;
	
	var facebookLikeBiere = 2254000 ;
	var facebookSpeakBiere = 44000;

	var twitterVinOrigin = 0 ;
	var twitterBiereOrigin = 0 ;
	var googleVinOrigin = 0 ;
	var googleBiereOrigin = 0 ;
	var facebookLikeVinOrigin = 0 ;
	var facebookSpeakVinOrigin = 0;
	var facebookLikeBiereOrigin = 0 ;
	var facebookSpeakBiereOrigin = 0;
	
	$('#internet #twitter .vin p span').text(0);
	var timerInternet =setInterval(function(){
		twitterVinOrigin+=1;
        $('#internet #twitter .vin p span').text(twitterVinOrigin);
       	if(twitterVinOrigin==twitterVin){
	    	clearInterval(timerInternet);
        	twitterVinOrigin = twitterVin;
        }
	}, 1);
	
	$('#internet #twitter .biere p span').text(0);
	var timerInternet2 =setInterval(function(){
		twitterBiereOrigin+=1;
        $('#internet #twitter .biere p span').text(twitterBiereOrigin);
       	if(twitterBiereOrigin==twitterBiere){
	    	clearInterval(timerInternet2);
        	twitterBiereOrigin = twitterBiere;
        }
	}, 1);
	
	$('#google .vin p span').text(0);
	var timerInternet3 =setInterval(function(){
		googleVinOrigin+=1;
        $('#google .vin p span').text(googleVinOrigin);
       	if(googleVinOrigin==googleVin){
	    	clearInterval(timerInternet3);
        	googleVinOrigin = googleVin;
        }
	}, 1);
	
	$('#google .biere p span').text(0);
	var timerInternet4 =setInterval(function(){
		googleBiereOrigin+=1;
        $('#google .biere p span').text(googleBiereOrigin);
       	if(googleBiereOrigin==googleBiere){
	    	clearInterval(timerInternet4);
        	googleBiereOrigin = googleBiere;
        }
	}, 1);
	
	$('#facebook .vin p .likeCount').text(0);
	var timerInternet5 =setInterval(function(){
		facebookLikeVinOrigin+=1000;
        $('#facebook .vin p .likeCount').text(facebookLikeVinOrigin);
       	if(facebookLikeVinOrigin==facebookLikeVin){
	    	clearInterval(timerInternet5);
        	facebookLikeVinOrigin = facebookLikeVin;
        }
	}, 1);
	
	$('#facebook .vin p .speakCount').text(0);
	var timerInternet6 =setInterval(function(){
		facebookSpeakVinOrigin+=100;
        $('#facebook .vin p .speakCount').text(facebookSpeakVinOrigin);
       	if(facebookSpeakVinOrigin==facebookSpeakVin){
	    	clearInterval(timerInternet6);
        	facebookSpeakVinOrigin = facebookSpeakVin;
        }
	}, 1);
	
	$('#facebook .biere p .likeCount').text(0);
	var timerInternet7 =setInterval(function(){
		facebookLikeBiereOrigin+=1000;
        $('#facebook .biere p .likeCount').text(facebookLikeBiereOrigin);
       	if(facebookLikeBiereOrigin==facebookLikeBiere){
	    	clearInterval(timerInternet7);
        	facebookLikeBiereOrigin = facebookLikeBiere;
        }
	}, 1);
	
	$('#facebook .biere p .speakCount').text(0);
	var timerInternet8 =setInterval(function(){
		facebookSpeakBiereOrigin+=100;
        $('#facebook .biere p .speakCount').text(facebookSpeakBiereOrigin);
       	if(facebookSpeakBiereOrigin==facebookSpeakBiere){
	    	clearInterval(timerInternet8);
        	facebookSpeakBiereOrigin = facebookSpeakBiere;
        }
	}, 1);
}



function lesPlus(){	
	var lesPlusText= new Array(224000,625,16,55,1650,200);
	//var lesPlusZero= new Array(0,0,0,0,0,0);

	var plus11=224000;
	var plus10=0;
	var plus21=625;
	var plus20=5;
	var plus31=16;
	var plus30=0;
	var plus41=55;
	var plus40=0;
	var plus51=1650;
	var plus50=0;
	var plus61=200;
	var plus60=0;
	
	$('#plusChereLeftProgress').animate({width:lesPlusText[0]/1000}, 2000);
	$('#plusChereRightProgress').animate({width:10}, 2000);
	$('#plusAlcoolLeftProgress').animate({width:lesPlusText[2]*4}, 2000);
	$('#plusAlcoolRightProgress').animate({width:lesPlusText[3]*4},2000);
	$('#plusVieuxLeftProgress').animate({width:lesPlusText[4]/7}, 2000);
	$('#plusVieuxRightProgress').animate({width:lesPlusText[5]/7},2000);
	$('#plusChereLeft, #plusChereRight, #plusAlcoolLeft, #plusAlcoolRight, #plusVieuxLeft, #plusVieuxRight,').text(0);
	var timerPlus1 =setInterval(function(){
		plus10+=800;
		plus20+=10;
		plus30+=1;
		plus40+=1;
		plus50+=15;
		plus60+=5;
		if (plus20<=plus21) {
			$('#plusChereRight').text(plus20);
		}
		if (plus30<=plus31) {
			$('#plusAlcoolLeft').text(plus30);
		}
		if (plus40<=plus41) {
			$('#plusAlcoolRight').text(plus40);
		}
		if (plus50<=plus51) {
			$('#plusVieuxLeft').text(plus50);
		}
		if (plus60<=plus61) {
			$('#plusVieuxRight').text(plus60);
		}
        $('#plusChereLeft').text(plus10);
       	if(plus10==plus11){
	    	clearInterval(timerPlus1);
        	plus10 = plus11;
        }
	}, 10);

}


function calorie() {
	var calorieIndex=0;
	var calorieSportIcon= new Array('arc','baby','natation','golf','musculation');
	var calorieSportText= new Array("de tir à l'arc","de baby-sitting","de natation","de golf","de musculation");
	
	calorieVinRouge=315;
	calorieVinRougeOrigin=0;
	
	calorieVinBlanc=324;
	calorieVinBlancOrigin=0;
	
	calorieBiere1=200;
	calorieBiere1Origin=0;
	
	calorieBiere2=187;
	calorieBiere2Origin=0;
	
	calorieBiere3=210;
	calorieBiere3Origin=0;
	

	$('#calorieBiere .calorieLiquide').stop(true,false).animate({'margin-top':'-86px'},1000);
	$('#calorieVin .calorieLiquide').stop(true,false).animate({'margin-top':'-56px'},1000);
	
	$('#calorieRouge').hover(function(){
		/*calorieVinRougeOrigin=0;
		calorieVinBlancOrigin=0;
		calorieBiere1Origin=0;
		calorieBiere2Origin=0;
		calorieBiere3Origin=0;*/
		$('#calorieBottom').css({'background-image':'url("img/9_round90.png")'});
		$('#calorieIcon').html('');
		$('#calorieVin #calorieRouge #calorieRouge1').stop(true,false).animate({'margin-top':'-16px'},300,function(){
			$('#calorieVin #calorieRouge #calorieRouge2').stop(true,false).animate({'margin-top':'-16px'},300,function(){
				$('#calorieVin #calorieRouge #calorieRouge3').stop(true,false).animate({'margin-top':'-16px'},300);
			});
		});
		if (calorieVinRougeOrigin==0) {
			$('#calorieText p span').text(0);
			timerRouge =setInterval(function(){
				calorieVinRougeOrigin+=1;
        		$('#calorieText p span').text(calorieVinRougeOrigin);
       			if(calorieVinRougeOrigin==calorieVinRouge){
	    			clearInterval(timerRouge);
        			calorieVinRougeOrigin = calorieVinRouge;
        			//compteurRouge=false;
        			$('#calorieIcon').html('<img src="img/9_'+calorieSportIcon[0]+'.png" /><p>'+calorieSportText[0]+'</p>');
        		}
			}, 1);
		}
	}, function(){
		clearInterval(timerRouge);
		$('#calorieBottom').css({'background-image':'url("img/9_round.png")'});
		$('#calorieIcon').html('');
		$('#calorieText p span').text(0);
		calorieVinRougeOrigin = 0;
		$('#calorieVin #calorieRouge .calorieLiquide').stop(true,false).animate({'margin-top':'-56px'},1000);
	});
	
	
	$('#calorieBlanc').hover(function(){
		/*calorieVinRougeOrigin=0;
		calorieVinBlancOrigin=0;
		calorieBiere1Origin=0;
		calorieBiere2Origin=0;
		calorieBiere3Origin=0;*/
		$('#calorieBottom').css({'background-image':'url("img/9_round90.png")'});
		$('#calorieIcon').html('');
		$('#calorieVin #calorieBlanc #calorieBlanc1').stop(true,false).animate({'margin-top':'-16px'},300,function(){
			$('#calorieVin #calorieBlanc #calorieBlanc2').stop(true,false).animate({'margin-top':'-16px'},300,function(){
				$('#calorieVin #calorieBlanc #calorieBlanc3').stop(true,false).animate({'margin-top':'-16px'},300);
			});
		});
		if (calorieVinBlancOrigin==0) {
			$('#calorieText p span').text(0);
			timerBlanc =setInterval(function(){
				calorieVinBlancOrigin+=1;
        		$('#calorieText p span').text(calorieVinBlancOrigin);
       			if(calorieVinBlancOrigin==calorieVinBlanc){
	    			clearInterval(timerBlanc);
        			calorieVinBlancOrigin = calorieVinBlanc;
        			
        			$('#calorieIcon').html('<img src="img/9_'+calorieSportIcon[1]+'.png" /><p>'+calorieSportText[1]+'</p>');
        		}
			}, 1);
		}	
	}, function(){
		clearInterval(timerBlanc);
		$('#calorieBottom').css({'background-image':'url("img/9_round.png")'});
		$('#calorieIcon').html('');
		$('#calorieText p span').text(0);
		calorieVinBlancOrigin = 0;
		$('#calorieVin #calorieBlanc .calorieLiquide').stop(true,false).animate({'margin-top':'-56px'},1000);
	});
	
	
	$('#calorieBiereGlasses1').hover(function(){
		/*calorieVinRougeOrigin=0;
		calorieVinBlancOrigin=0;
		calorieBiere1Origin=0;
		calorieBiere2Origin=0;
		calorieBiere3Origin=0;*/
		$('#calorieIcon').html('');
		$('#calorieBottom').css({'background-image':'url("img/9_round30.png")'});
		$('.calorieLiquide#calorieBiere1').stop(true,false).animate({'margin-top':'-0px'}, 500);
		if (calorieBiere1Origin==0) {
			$('#calorieText p span').text(0);
			timerBiere1 =setInterval(function(){
				calorieBiere1Origin+=1;
        		$('#calorieText p span').text(calorieBiere1Origin);
       			if(calorieBiere1Origin==calorieBiere1){
	    			clearInterval(timerBiere1);
        			calorieBiere1Origin = calorieBiere1;
        			
        			$('#calorieIcon').html('<img src="img/9_'+calorieSportIcon[2]+'.png" /><p>'+calorieSportText[2]+'</p>');
        		}
			}, 1);
		}
	}, function(){
		clearInterval(timerBiere1);
		$('#calorieBottom').css({'background-image':'url("img/9_round.png")'});
		$('#calorieIcon').html('');
		$('#calorieText p span').text(0);
		calorieBiere1Origin = 0;
		$('.calorieLiquide#calorieBiere1').stop(true,false).animate({'margin-top':'-86px'}, 500);
	});
	
	
	$('#calorieBiereGlasses2').hover(function(){
		/*calorieVinRougeOrigin=0;
		calorieVinBlancOrigin=0;
		calorieBiere1Origin=0;
		calorieBiere2Origin=0;
		calorieBiere3Origin=0;*/
		$('#calorieIcon').html('');
		$('#calorieBottom').css({'background-image':'url("img/9_round30.png")'});
		$('.calorieLiquide#calorieBiere2').stop(true,false).animate({'margin-top':'-0px'}, 500);
		if (calorieBiere2Origin==0) {
			$('#calorieText p span').text(0);
			timerBiere2 =setInterval(function(){
				calorieBiere2Origin+=1;
        		$('#calorieText p span').text(calorieBiere2Origin);
       			if(calorieBiere2Origin==calorieBiere2){
	    			clearInterval(timerBiere2);
        			calorieBiere2Origin = calorieBiere2;
        			
        			$('#calorieIcon').html('<img src="img/9_'+calorieSportIcon[3]+'.png" /><p>'+calorieSportText[3]+'</p>');
        		}
			}, 1);
		}
	}, function(){
		clearInterval(timerBiere2);
		$('#calorieBottom').css({'background-image':'url("img/9_round.png")'});
		$('#calorieIcon').html('');
		$('#calorieText p span').text(0);
		calorieBiere2Origin = 0;
		$('.calorieLiquide#calorieBiere2').stop(true,false).animate({'margin-top':'-86px'}, 500);
	});
	
	
	$('#calorieBiereGlasses3').hover(function(){
		/*calorieVinRougeOrigin=0;
		calorieVinBlancOrigin=0;
		calorieBiere1Origin=0;
		calorieBiere2Origin=0;
		calorieBiere3Origin=0;*/
		$('#calorieIcon').html('');
		$('#calorieBottom').css({'background-image':'url("img/9_round30.png")'});
		$('.calorieLiquide#calorieBiere3').stop(true,false).animate({'margin-top':'-0px'}, 500);
		if (calorieBiere3Origin==0) {
			$('#calorieText p span').text(0);
			timerBiere3 =setInterval(function(){
				calorieBiere3Origin+=1;
        		$('#calorieText p span').text(calorieBiere3Origin);
       			if(calorieBiere3Origin==calorieBiere3){
	    			clearInterval(timerBiere3);
        			calorieBiere3Origin = calorieBiere3;
        			
        			$('#calorieIcon').html('<img src="img/9_'+calorieSportIcon[4]+'.png" /><p>'+calorieSportText[4]+'</p>');
        		}
			}, 1);
		}
	}, function(){
		clearInterval(timerBiere3);
		$('#calorieBottom').css({'background-image':'url("img/9_round.png")'});
		$('#calorieIcon').html('');
		$('#calorieText p span').text(0);
		calorieBiere3Origin = 0;
		$('.calorieLiquide#calorieBiere3').stop(true,false).animate({'margin-top':'-86px'}, 500);
	});
}
