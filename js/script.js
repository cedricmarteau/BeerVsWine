
//#production_mondial

var hectolitreVin = 260 ;
var hectolitreBiere = 1400;

var hauteurBiere = 605;
var hauteurVin = hauteurBiere*260/1400;

var hauteurAnimation2 = 675;
var placementTirets21 = hauteurAnimation2 - hauteurVin - 30;
var placementTirets22 = hauteurAnimation2 - hauteurBiere - 30;

$(document).ready(function(){

	$('#biere_2 img').height(0);
	$('#tiret21').css({"marginTop":""+hauteurAnimation2+"px"});
	$('#tiret22').css({"marginTop":""+(hauteurAnimation2-25)+"px"});

	$('#tiret21').animate({"marginTop": ""+placementTirets21+"px"},2000,'easeInOutExpo');
	$('#vin_2 img').height(0).animate({'height':'+='+hauteurVin+'px'}, 2000, 'easeInOutExpo', function(){
		$('#biere_2 img').animate({'height':'+='+hauteurBiere+'px'}, 3000,'easeInOutExpo');
		$('#tiret22').animate({"marginTop": ""+placementTirets22+"px"},3000,'easeInOutExpo');
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
	Raphael(function () {
	                var r = Raphael("plus_consom", 620, 250),
	                    e = [],
	                    clr = [],
	                    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	                    values = [],
	                    now = 0,
	                    month = r.text(310, 27, months[now]).attr({fill: "#fff", stroke: "none", "font": '100 18px "Helvetica Neue", Helvetica, "Arial Unicode MS", Arial, sans-serif'}),
	                    rightc = r.circle(364, 27, 10).attr({fill: "#fff", stroke: "none"}),
	                    right = r.path("M360,22l10,5 -10,5z").attr({fill: "#000"}),
	                    leftc = r.circle(256, 27, 10).attr({fill: "#fff", stroke: "none"}),
	                    left = r.path("M260,22l-10,5 10,5z").attr({fill: "#000"}),
	                    c = r.path("M0,0").attr({fill: "none", "stroke-width": 4, "stroke-linecap": "round"}),
	                    bg = r.path("M0,0").attr({stroke: "none", opacity: .3}),
	                    dotsy = [];
	                function randomPath(length, j) {
	                    var path = "",
	                        x = 10,
	                        y = 0;
	                    dotsy[j] = dotsy[j] || [];
	                    for (var i = 0; i < length; i++) {
	                        dotsy[j][i] = Math.round(Math.random() * 200);
	                        if (i) {
	                        	     path += "C" + [x + 10, y, (x += 20) - 10, (y = 240 - dotsy[j][i]), x, y];
	                        	   } else {
	                        	                            path += "M" + [10, (y = 240 - dotsy[j][i])];
	                        	                        }
	                        if (i) {
	                            x += 20;
	                            y = 240 - dotsy[j][i];
	                            path += "," + [x, y];
	                        } else {
	                            path += "M" + [10, (y = 240 - dotsy[j][i])] + "R";
	                        }
	                    }
	                    return path;
	                }
	                for (var i = 0; i < 12; i++) {
	                    values[i] = randomPath(30, i);
	                    clr[i] = Raphael.getColor(1);
	                }
	                c.attr({path: values[0], stroke: clr[0]});
	                bg.attr({path: values[0] + "L590,250 10,250z", fill: clr[0]});
	                var animation = function () {
	                    var time = 500;
	                    if (now == 12) {
	                        now = 0;
	                    }
	                    if (now == -1) {
	                        now = 11;
	                    }
	                    var anim = Raphael.animation({path: values[now], stroke: clr[now]}, time, "<>");
	                    c.animate(anim);
	                    bg.animateWith(c, anim, {path: values[now] + "L590,250 10,250z", fill: clr[now]}, time, "<>");
	                    month.attr({text: months[now]});
	                };
	                var next = function () {
	                        now++;
	                        animation();
	                    },
	                    prev = function () {
	                        now--;
	                        animation();
	                    };
	                rightc.click(next);
	                right.click(next);
	                leftc.click(prev);
	                left.click(prev);
	            });
}

//#production_pays



