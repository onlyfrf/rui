//onload = function(){
//	var nav2 = document.getElementsByName("nav2");
//	var list = document.getElementsByName("list");
//	for(var i=0;i<nav2.length;i++){
//		nav2[i].index = i;
//		nav2[i].onmouseover = function(){
//			for(var j=0;j<list.length;j++){	
//				if(j==this.index){
//					nav2[j].style.background = "white";
//					list[j].style.display = "block";
//				}
//			}
//		}
//		nav2[i].onmouseout = function(){
//			for(var j=0;j<list.length;j++){	
//				if(j==this.index){
//					nav2[j].style.background = "#F5F5F5";
//					list[j].style.display = "none";
//				}
//			}
//		}
//	}
//}

$(function(){
	//导航栏
	var $nav2_1 = $(".nav2_1");
	var $list = $(".nav2_1 > .list");
	for(var i=0;i<$nav2_1.length;i++){
		$nav2_1[i].index = i;
		$nav2_1.eq(i).on("mouseenter",function(){
			for(var j=0;j<$list.length;j++){
				if(j==this.index){
					$nav2_1.eq(j).css("background","white");
					$list.eq(j).css("display","block");
					setInterval(function(){
						$(".hot,.new").animate({"top":"-10px"},40,function(){
							$(".hot,.new").animate({"top":"-14px"},40)
						});
					},500)
					
				}
			}
		})
		$nav2_1.eq(i).on("mouseleave",function(){
			for(var j=0;j<$list.length;j++){
				if(j==this.index){
					$nav2_1.eq(j).css("background","#f5f5f5");
					$list.eq(j).css("display","none");
				}
			}
		})
	}
	//搜索框上面那个
	$baobei = $("#baobei > a");
	$list1 = $(".header1 > ul");
	$baobei.eq(0).css({"border-top-left-radius":"5px","border-top-right-radius":"5px","background":"#FF8B00","color":"white"});
	for(var i=0;i<$baobei.length;i++){
		$baobei[i].index = i;
		$baobei.eq(i).on("click",function(){
			for(var j=0;j<$list1.length;j++){
				if(j==this.index){
					$baobei.eq(j).css({"border-top-left-radius":"5px","border-top-right-radius":"5px","background":"#FF8B00","color":"white"});
					$list1.eq(j).css("display","block");
				}else{
					$baobei.eq(j).css({"border-top-left-radius":"0px","border-top-right-radius":"0px","background":"white","color":"#ff5e00"});
					$list1.eq(j).css("display","none");
				}
			}
		});
	}
	//搜索框
	$(".sousuo > input").on("focus",function(){
		$(window).on("keyup",function(){
			if($(".sousuo > input").val().length>0){
				$("#fdj").css("display","none");
			}else{
				$("#fdj").css("display","block");
				}
		})
	})
	$("#cuo1").on("click",function(){
		$("#cuo1,.header2").css("display","none");
	})
	//header部分
	var $col1 = $("#col1 > li");
	var $ww = $("#col1 >li > i");
	$col1.on("mousemove",function(){
		for(var i=0;i<$ww.length;i++){
			if($(this).index()==i){	
				$ww.eq(i).css("color","red");
			}
		}
	})
	$col1.on("mouseout",function(){
		for(var i=0;i<$ww.length;i++){
			if($(this).index()==i){	
				$ww.eq(i).css("color","white");
			}
		}
	});
	//主体市场
	$oli1 = $(".ul1 > li");
	$cont1_1 = $(".cont1_1");
	$oli1.on("mouseenter",function(){
		for(var i=0;i<$cont1_1.length;i++){
			if($(this).index()==i){
				$cont1_1.eq(i).css("display","block");
			}else{
				$cont1_1.eq(i).css("display","none");
			}
		}
	});
	$oli1.on("mouseleave",function(){
		$cont1_1.css("display","none");
	});
	
	//轮播图
	var width = $(".cont3_1 > img").width();
	var i=0;
	var o=0;
	var timer = setInterval(fn,4000);
	var timer1 = setInterval(fn2,3000);
	function fn1(){
		for(var k=0;k<$("#ul2>li").length;k++){
			if(k==i){
				$("#ul2>li").eq(k).css("background","orangered");
			}
			else{
				$("#ul2>li").eq(k).css("background","white");
			}
		}
	}
	function fn3(){
		for(var k=0;k<$("#ul3>li").length;k++){
			if(k==o){
				$("#ul3>li").eq(k).css("background","black");
				$(".cont4_2>span").eq(k).css("display","block");
			}
			else{
				$("#ul3>li").eq(k).css("background","red");
				$(".cont4_2>span").eq(k).css("display","none");
			}
		}
	}
	function fn(){
		i++;
		$(".cont3_1").animate({"left":(-width*i)+"px"},500,function(){
			if(i==$(".cont3_1 > img").length-1){
				$("#ul2>li").eq(0).css("background","orangered");
				$(".cont3_1").css("left","0px");
				i=0;
			}
		});
		fn1();
	}
	
	function fn2(){
		o++;
		$(".cont4_1").animate({"left":(-width*o)+"px"},500,function(){
			if(o==$(".cont4_1 > img").length-1){
				$(".cont4_2>span").eq(0).css("display","block");
				$("#ul3>li").eq(0).css("background","black");
				$(".cont4_1").css("left","0px");
				o=0;
			}
		});
		fn3();
	}
	
	$(".cont3").on("mouseenter",function(){
		clearInterval(timer);
		$("#zuo,#you").css("display","block");
	});
	$(".cont4").on("mouseenter",function(){
		clearInterval(timer1);
		$("#zuo1,#you1").css("display","block");
	});
	$(".cont3").on("mouseleave",function(){
		timer = setInterval(fn,4000);
		$("#zuo,#you").css("display","none");
	});
	$(".cont4").on("mouseleave",function(){
		timer1 = setInterval(fn2,3000);
		$("#zuo1,#you1").css("display","none");
	});
	$(window).on("blur",function(){
		clearInterval(timer);
		clearInterval(timer1);
	})
	$(window).on("focus",function(){
		timer = setInterval(fn,4000);
		timer1 = setInterval(fn2,3000);
	})
	$("#you").on("click",function(){
		clearInterval(timer);
		i++;
		if(i==$(".cont3_1 > img").length-1){
			$("#ul2>li").eq(0).css("background","orangered");
			$(".cont3_1").css("left","0px");
			i=0;
		}
		$(".cont3_1").animate({"left":(-width*i)+"px"},500);
		fn1();
	})
	$("#you1").on("click",function(){
		clearInterval(timer1);
		o++;
		if(o==$(".cont4_1 > img").length-1){
			$(".cont4_2>span").eq(0).css("display","block");
			$("#ul3>li").eq(0).css("background","black");
			$(".cont4_1").css("left","0px");
			o=0;
		}
		$(".cont4_1").animate({"left":(-width*o)+"px"},500);
		fn3();
	})
	
	$("#zuo").on("click",function(){
		clearInterval(timer);
		if(i==0){
			$(".cont3_1").css("left","-2600px");
			i=5;
		}
		i--;
		$(".cont3_1").animate({"left":(-width*i)+"px"},500);
		fn1();
	})
	$("#zuo1").on("click",function(){
		clearInterval(timer1);
		if(o==0){
			$(".cont4_1").css("left","-3120px");
			o=6;
		}
		o--;
		$(".cont4_1").animate({"left":(-width*o)+"px"},500);
		fn3();
	})
	$("#ul2 >li").on("click",function(){
		clearInterval(timer);
		$(this).css("background","orangered");
		$(this).siblings().css("background","white");
		for(var k=0;k<$(".cont3_1>img").length;k++){
			if(k==$(this).index()){
				$(".cont3_1").animate({"left":(-width*k)+"px"},500);	
			}
		}
	})
	$("#ul3 >li").on("click",function(){
		clearInterval(timer1);
		$(this).css("background","black");
		$(this).siblings().css("background","red");
		for(var k=0;k<$(".cont4_1>img").length;k++){
			if(k==$(this).index()){
				$(".cont4_1").animate({"left":(-width*k)+"px"},500);	
			}
		}
		for(var p=0;p<$(".cont4_2>span").length;p++){
			if(p==$(this).index()){
				$(".cont4_2>span").eq(p).css("display","block");
				$(".cont4_2>span").eq(p).siblings().css("display","none");
			}
		}
	})
	var height = $(".cont6_2>div").height();
	var timer2 = setInterval(fn4,3000);
	var u=0;
	function fn4(){
		u++;
		$(".cont6_2").animate({"top":(-height*u)+"px"},500,function(){
			if(u==$(".cont6_2>div").length-1){
				$(".cont6_2").css("top","0px");
				u=0;
			}
		});
	}
	$("#ul4>li").on("mouseenter",function(){
		for(var j=0;j<$(".li1>div").length;j++){
			if(j==$(this).index()){
				$(".li1>div").eq(j).css("display","block");
			}else{
				$(".li1>div").eq(j).css("display","none");
			}
		}
	})
	$(".ul3>li").on("mouseover",function(){
		for(var j=0;j<$(".sys").length;j++){
			if(j==$(this).index()){
				$(".sys").eq(j).css("display","block");
			}
		}
	})
	$(".ul3>li").on("mouseout",function(){
		for(var j=0;j<$(".sys").length;j++){
			if(j==$(this).index()){
				$(".sys").eq(j).css("display","none");
			}
		}
	})
	$("#ewm1").on("mouseover",function(){
		$("#ewm2").css("display","block");
	})
	$("#ewm1").on("mouseout",function(){
		$("#ewm2").css("display","none");
	})
	
	var k=0;
	var l=0;
	var h=0
	var timer3 = setInterval(function(){
		k+=2;
		l+=3;
		h+=10;
		$(".spa12").css("width",l+"px");
		$(".spa13").html(k);
		$(".spa14").html(h);
		if(k==100){
			clearInterval(timer3)
		}
	},4000)
	
	var s=10;
	var f=59;
	var m=60;
	var	timer4 = setInterval(function(){
		if(s<10){
			$("#shi").html("0"+s);
		}else{
			$("#shi").html(s);
		}
		if(f<10){
			$("#fen").html("0"+f);
		}else{
			$("#fen").html(f);
		}
		if(m<10){
			$("#miao").html("0"+m);
		}else{
			$("#miao").html(m);
		}
		m-=1;
		if(m<=0){
			f-=1;
			m=60;
		}
		if(f<=0){
			s-=1;
			f=60;
		}if(s<=0){
			s=0;
		}
	},1000);
	
	function ajax(){
		$.ajax({
			url:"js/shouye.json",
			dataType:"json",
			success:function(res){
				$(res).each(function(idx,item){
					var $li = $("<li></li>");
					var $img =$("<img />");
					var $p1 = $("<p></p>");
					var $span1  = $("<span></span>");
					var $span2  = $("<span></span>");
					var $div = $("<div></div>");
					var $p2 = $("<p></p>");
					var $a = $("<a></a>");
					console.log($img.html(item.src));
					$img.attr("src",item.src).appendTo($li);
					$p2.html(item.p2).appendTo($div);
					$a.html(item.a).appendTo($div);
					$div.appendTo($li);
					$img.html(item.src).appendTo($li);
					$p1.html(item.name).appendTo($li);
					$span1.html(item.prize).appendTo($li);
					$span2.html(item.xiao).appendTo($li);
					$li.appendTo($("#ul5"));
					$li.on("mouseover",function(){
						$div.css("display","block");
						$li.css("border-color","red");
					})
					$li.on("mouseout",function(){
						$div.css("display","none");
						$li.css("border-color","#CCCCCC");
					})
				})
			}
		})
		
	}
	ajax();
})

