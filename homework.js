function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
window.onload=function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if (st>180) {
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}
	var lect = document.getElementById("lect");
	var rmb = document.getElementById("rmb");
	lect.onchange=function(){
		if(lect.value=="0"){
			rmb.innerHTML="¥10";
		}
		else if(lect.value=="1"){
			rmb.innerHTML="¥30";
		}
		else if(lect.value=="2"){
			rmb.innerHTML="¥60";
		}
		else{
			rmb.innerHTML="¥100";
		}
	}
	var side1 =document.getElementById("side1");
	var side2 =document.getElementById("side2");
	var side3 =document.getElementById("side3");
	var side4 =document.getElementById("side4");
	side1.onmouseover=function(){
		animate(side1,{right:0});
	}
	side1.onmouseout=function(){
		animate(side1,{right:-88});
	}
	side2.onmouseover=function(){
		animate(side2,{right:0});
	}
	side2.onmouseout=function(){
		animate(side2,{right:-88});
	}
	side3.onmouseover=function(){
		animate(side3,{right:0});
	}
	side3.onmouseout=function(){
		animate(side3,{right:-88});
	}
	side4.onmouseover=function(){
		animate(side4,{right:0});
	}
	side4.onmouseout=function(){
		animate(side4,{right:-88});
	}
}