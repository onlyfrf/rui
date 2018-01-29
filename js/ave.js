//获取元素的属性
function getStyleAttr(obj, attr) {
	if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
	return getComputedStyle(obj, null)[attr];
	//var style = window.getComputedStyle("元素", "伪类");
	}else{
		return obj.currentStyle[attr]; //支持IE8-
    	}
}
//运速运动正方向
function ave(obj,attr,target,s,fn){
	clearInterval(obj.timer);
	var speed=0;
	obj.timer = setInterval(function(){
	target = target;
	var start = parseInt(getStyleAttr(obj,attr));
	console.log(start);
	
	speed+=(target-start)/5;
	speed*=0.7;
	if(start==target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
				obj.style[attr] = start+parseInt(speed)+"px";
			}
			
		
	},s)
}
//匀速运动反方向
function ave1(obj,attr,target,speed,s,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	var start = parseInt(getStyleAttr(obj,attr));
//	speed= speed>0?Math.ceil(speed):Math.floor(speed);
	console.log(start);
	if(start<=target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
				obj.style[attr] = start+(speed*-1)+"px";
			}
	},s)
}
//缓冲运动
function huanchong(obj,attr,target,s,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	var start = parseInt(getStyleAttr(obj,attr));
	//给一个越来越小的速度speed
	var speed = (target-start)/5;
	speed= speed>0?Math.ceil(speed):Math.floor(speed);
	console.log(start);
	if(start>=target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
				obj.style[attr] = start+speed+"px";
			}
	},s)
}