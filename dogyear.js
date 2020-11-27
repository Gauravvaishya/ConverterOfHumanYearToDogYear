function con(){
    var t=0;
    var val=0;
	val =document.getElementById("age").value;
	val=Number(val);
	val=val+t;
	if(val != 0){
		document.getElementById("print").innerHTML="";
	  if(val <= 21){
		year=parseFloat(val/10.5);
		age=parseInt(year);
        f = year;
        f=f-age;
        c = f * 12;
        d = parseInt(c);
        e = c - d;
        h = Math.ceil(e *30);

		
		document.getElementById("out").value=age+"-year "+d+"-month "+h+"-days";
	  }
	  else{
		r = val - 21;
		s = r / 4;
		year = s + 2;
		age=parseInt(year);
        f = year;
        f=f-age;
        c = f * 12;
        d = parseInt(c);
        e = c - d;
        h = Math.ceil(e *30);
		document.getElementById("out").value=age+"-year "+d+"-month "+h+"-days";
		if (age>35){
			document.getElementById("print").innerHTML="It seems you are a fairyland's dog...";
		}
		else{
			document.getElementById("print").innerHTML="";
		}
	  }
	}
	else{
		
       
		document.getElementById("print").innerHTML="Sorry!!!! My boy, currently you are in processing for coming in this world...";
		document.getElementById("out").value="No Input or 0 Given";
       
	} 


	  
}

function on(){
	document.getElementById("out").value="";
}