
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
});


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

function more_consume(){
	var data_beer_more_consum = new Array(45,42,46,42,39,40,40,36);
	var data_wine_more_consum = new Array(32,34,31,33,36,34,34,35);
	var data_liqueur_more_consum = new Array(18,19,18,22,21,22,21,23);
	// Creates canvas 320 × 200 at 10, 50
	var paper_width = 500;
	var paper_height = 700;
	var paper = Raphael("plus_consom", paper_width, paper_height);
	var line_beer = "";
	var letter;
	for (var i=0;i<=7;i++){
		if (i==0){letter="M"}else{letter="L"};
		line_beer += letter+i*70+" "+(500-((data_beer_more_consum[i]*500)/50));
		console.log(line_beer);
	}
	var c = paper.path(line_beer);
	// Creates circle at x = 50, y = 40, with radius 10
	//var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	//circle.attr("fill", "#f00");

	// Sets the stroke attribute of the circle to white
	//circle.attr("stroke", "#fff");
	
	//var trace_beer = paper.path('M0 0L90 90L100 110L130 210')
	// Raphael(function () {
	// 	                var r = Raphael("plus_consom", 620, 250),
	// 	                    e = [],
	// 	                    clr = [],
	// 	                    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	// 	                    values = [],
	// 	                    now = 0,
	// 	                    month = r.text(310, 27, months[now]).attr({fill: "#fff", stroke: "none", "font": '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif'}),
	// 	                    rightc = r.circle(364, 27, 10).attr({fill: "#fff", stroke: "none"}),
	// 	                    right = r.path("M360,22l10,5 -10,5z").attr({fill: "#000"}),
	// 	                    leftc = r.circle(256, 27, 10).attr({fill: "#fff", stroke: "none"}),
	// 	                    left = r.path("M260,22l-10,5 10,5z").attr({fill: "#000"}),
	// 	                    c = r.path("M0,0").attr({fill: "none", "stroke-width": 4, "stroke-linecap": "round"}),
	// 	                    bg = r.path("M0,0").attr({stroke: "none", opacity: .3}),
	// 	                    dotsy = [];
	// 	                function randomPath(length, j) {
	// 	                    var path = "",
	// 	                        x = 10,
	// 	                        y = 0;
	// 	                    dotsy[j] = dotsy[j] || [];
	// 	                    for (var i = 0; i < length; i++) {
	// 	                        dotsy[j][i] = Math.round(Math.random() * 200);
	// 	                        if (i) {
	// 	                        	     path += "C" + [x + 10, y, (x += 20) - 10, (y = 240 - dotsy[j][i]), x, y];
	// 	                        	   } else {
	// 	                        	                            path += "M" + [10, (y = 240 - dotsy[j][i])];
	// 	                        	                        }
	// 	                        if (i) {
	// 	                            x += 20;
	// 	                            y = 240 - dotsy[j][i];
	// 	                            path += "," + [x, y];
	// 	                        } else {
	// 	                            path += "M" + [10, (y = 240 - dotsy[j][i])] + "R";
	// 	                        }
	// 	                    }
	// 	                    return path;
	// 	                }
	// 	                for (var i = 0; i < 12; i++) {
	// 	                    values[i] = randomPath(30, i);
	// 	                    clr[i] = Raphael.getColor(1);
	// 	                }
	// 	                c.attr({path: values[0], stroke: clr[0]});
	// 	                bg.attr({path: values[0] + "L590,250 10,250z", fill: clr[0]});
	// 	                var animation = function () {
	// 	                    var time = 500;
	// 	                    if (now == 12) {
	// 	                        now = 0;
	// 	                    }
	// 	                    if (now == -1) {
	// 	                        now = 11;
	// 	                    }
	// 	                    var anim = Raphael.animation({path: values[now], stroke: clr[now]}, time, "<>");
	// 	                    c.animate(anim);
	// 	                    bg.animateWith(c, anim, {path: values[now] + "L590,250 10,250z", fill: clr[now]}, time, "<>");
	// 	                    month.attr({text: months[now]});
	// 	                };
	// 	                var next = function () {
	// 	                        now++;
	// 	                        animation();
	// 	                    },
	// 	                    prev = function () {
	// 	                        now--;
	// 	                        animation();
	// 	                    };
	// 	                rightc.click(next);
	// 	                right.click(next);
	// 	                leftc.click(prev);
	// 	                left.click(prev);
	// 	            });
}

//#production_pays


