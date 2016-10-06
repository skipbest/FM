(function () {
	var time=1; 
	var tim=1; 
	var t=1; 
	var kid; 
	var jsq;
	var js;
			
	function tuqieHua(){
		var arr= document.getElementsByClassName("datu");
		arr[0].style.display="none";
		arr[1].style.display="none";
		arr[2].style.display="none";
		arr[3].style.display="none";
		arr[4].style.display="none";
		arr[5].style.display="none";
		arr[time].style.display="block";
		time=(time+1)%6;	
	}	
	function wenziqieHua(){
		var arr= document.getElementsByClassName("lie");
		arr[0].style.display="none";
		arr[1].style.display="none";
		arr[2].style.display="none";
		arr[3].style.display="none";
		arr[4].style.display="none";
		arr[5].style.display="none";
		arr[tim].style.display="block";
		tim=(tim+1)%6;	
	}
	function numqieHua(){
		var arr= document.getElementsByClassName("num");
		arr[0].style.backgroundColor="#D4E1DC";
		arr[1].style.backgroundColor="#D4E1DC";
		arr[2].style.backgroundColor="#D4E1DC";
		arr[3].style.backgroundColor="#D4E1DC";
		arr[4].style.backgroundColor="#D4E1DC";
		arr[5].style.backgroundColor="#D4E1DC";
		arr[t].style.backgroundColor="#9dd6c5";
		t=(t+1)%6;	
	}	

	onload=function(){				 
		kid= window.setInterval(tuqieHua,2000);
		jsq= window.setInterval(wenziqieHua,2000);
		js= window.setInterval(numqieHua,2000);
		if (true) {} else {}
	}
	var tu=document.getElementById('tu');
	tu.onmouseover=function over(){
		window.clearInterval(kid);
		window.clearInterval(jsq);
		window.clearInterval(js);
	}
	tu.onmouseout=function out(){
		kid = window.setInterval(tuqieHua,2000);
		jsq = window.setInterval(wenziqieHua,2000);
		js = window.setInterval(numqieHua,2000);
	}

	var zhankai =  document.getElementById("zhankai");
	var quanbu =  document.getElementById("quanbu");
	var banquan=  document.getElementById("banquan");
	zhankai.onclick=function (){
		quanbu.style.display="none";
		banquan.style.display="block";
		//quanbu.transition="display 10s";
	}
	var zhankai1 =  document.getElementById("zhankai1");
	zhankai1.onclick=function (){
		quanbu.style.display="block";
		banquan.style.display="none";
		quanbu.style.transitionProperty="display";
		quanbu.style.transitionDuration="6s";
	}
	var same=document.getElementById("same");
	var yinfu=document.getElementById("yinfu");
	same.onmouseover=function(){
		yinfu.src="jpg/35.jpg";
	}
	same.onmouseout=function(){
		yinfu.src="jpg/7.jpg";
	}


	var share=document.getElementById("share");
	var fenxiang=document.getElementById("fenxiang");
	var duan=document.getElementById("duan");
	fenxiang.style.left='1039px';
	duan.style.left='1104px';
	share.onmouseover=function(){
		fenxiang.style.left='960px';
		duan.style.left='1034px';
		duan.style.display="block";
	}
	share.onmouseout=function(){
		fenxiang.style.left='1039px';
		duan.style.left='1104px';
		duan.style.display="none";
	}
	

	var poster=document.getElementById("poster");
	var album=document.getElementById("album");
	var chakan=document.getElementById("chakan");
	poster.onmouseover=function(){
		chakan.style.display="block";
		album.style.display="block";
	}
	album.onmouseout=function(){
		chakan.style.display="none";
		album.style.display="none";
	}

	var audio =document.getElementById('audio');
	var xstime=document.getElementById('xstime');
	audio.onloadedmetadata = function() {
      	var ztime=audio.duration;
        var zmiao = (parseInt(ztime)) % 60;
        var zfen = (parseInt(ztime / 60));
        xstime.innerHTML ='-'+ zfen + ':' + zmiao;
    }

    var dice =document.getElementById('dice');
	var jice=document.getElementById('jice');
    audio.ontimeupdate = function() {
        var ztime = audio.duration;
        var bshiJian = audio.currentTime;
        var zmiao = (parseInt(ztime)) % 60;
        var zfen = (parseInt(ztime / 60));
        var bmiao = (parseInt(bshiJian)) % 60;
        var bfen = (parseInt(bshiJian / 60));
        var fen=zfen-bfen;
        var miao=zmiao-bmiao;
        xstime.innerHTML = '-'+fen + ':' + miao ;

        var t = (bshiJian / ztime);
        jice.style.width = t * (dice.offsetWidth) + "px";
    }

	var ting1=document.getElementById("ting1");
	var ting2=document.getElementById("ting2");
	var jixu=document.getElementById("jixu");
	var contin=document.getElementById("continue")
	ting1.onmouseover=function(){
		ting2.style.display='block';
		ting1.style.display='none';
	}
	ting2.onmouseout=function(){
		ting1.style.display='block';
		ting2.style.display='none';
	}
	ting2.onclick=function(){
		ting1.style.display='none';
		ting2.style.display='none';
		jixu.style.display='block';
		contin.style.display='block';
		audio.pause();
	}
	contin.onclick=function(){
		ting1.style.display='block';
		ting2.style.display='none';
		jixu.style.display='none';
		contin.style.display='none';
		audio.play();
	}


	var heixin=document.getElementById("heixin");
	var huixin=document.getElementById("huixin");
	var hongxin1=document.getElementById("hongxin1");
	var hongxin2=document.getElementById("hongxin2");
	heixin.onmouseover=function(){
		huixin.style.display='block';
		hongxin1.style.display='none';
		hongxin2.style.display='none';
		heixin.style.display='none';
	}
	huixin.onmouseout=function(){
		heixin.style.display='block';
		hongxin1.style.display='none';
		hongxin2.style.display='none';
		huixin.style.display='none';
	}
	huixin.onclick=function(){
		hongxin1.style.display='block';	
		heixin.style.display='none';
		huixin.style.display='none';
		hongxin2.style.display='none';
	}
	hongxin1.onmouseover=function(){
		hongxin2.style.display='block';	
		hongxin1.style.display='none';	
		heixin.style.display='none';
		huixin.style.display='none';
	}
	hongxin2.onmouseout=function(){
		hongxin1.style.display='block';	
		hongxin2.style.display='none';	
		heixin.style.display='none';
		huixin.style.display='none';
	}
	hongxin2.onclick=function(){
		heixin.style.display='block';
		huixin.style.display='none';
		hongxin1.style.display='none';
		hongxin2.style.display='none';
	}

	var tong1=document.getElementById("tong1");
	var tong2=document.getElementById("tong2");
	tong1.onmouseover=function(){
		tong2.style.display='block';
		tong1.style.display='none';
	}
	tong2.onmouseout=function(){
		tong1.style.display='block';
		tong2.style.display='none';
	}

	var xiayi1=document.getElementById("xiayi1");
	var xiayi2=document.getElementById("xiayi2");
	xiayi1.onmouseover=function(){
		xiayi2.style.display='block';
		xiayi1.style.display='none';
	}
	xiayi2.onmouseout=function(){
		xiayi1.style.display='block';
		xiayi2.style.display='none';
	}
	// xiayi2.onclick=function(){

	// }


}(window))