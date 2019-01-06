window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if (st>180) {
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}
}