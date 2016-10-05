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

	
}(window))