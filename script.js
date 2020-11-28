function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function myFunction1() {
	m = document.getElementById("m").value;
	n = document.getElementById("n").value;
	var a = factorial(m);
	var b = factorial(n);
	var c = m-n;
	var d = factorial(c)
	var e = a/(b*d)
	document.getElementById("demo").innerHTML = e;
}
function factorial (y) {
	var total = 1; 
	for (i=1; i<=y; i++) {
		total = total * i; 
	}
	return total; 
}
function myFunction2() {
  document.getElementById("frm1").reset();
  document.getElementById("frm2").reset();
  document.getElementById("frm3").reset();
  document.getElementById("frm3").reset();
}
function digitos(){
	x = document.getElementById("d").value;
	var sum = 0;
	while (x > 0){
		var dig = x % 10;
		var sum = sum + dig;
		var x = parseInt(x / 10)
	}
	document.getElementById("sumaa").innerHTML = sum;
}
function NumPrim(){
	var cont = 0
	n= document.getElementById("p").value;
	for (i=1; i<=n; i++) {
		if (n%i==0){
			var cont = cont + 1;
		}
	}
	if (cont==2){
		document.getElementById("prim").innerHTML = "ES PRIM0";
	} else {
		document.getElementById("prim").innerHTML = "NO ES PRIMO";
	}
}
function raiz(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	var d = (Math.pow(b,2))-(4*a*c);
	if (d==0){
		var r = (-b)/(2*a);
		document.getElementById("ec").innerHTML = "Solo tiene una raíz, la cual es: "+r; 
	} else {
		if (d>0) {
			var r1 = (-b+(Math.sqrt(d)))/2*a;
			var r2 = (-b-(Math.sqrt(d)))/2*a;
			document.getElementById("ec").innerHTML = "Tiene 2 raices, las cuales son "+r1+" y "+r2;
		} else {
			document.getElementById("ec").innerHTML = "No existen raices reales";
		}
	}
}
