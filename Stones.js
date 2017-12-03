	"use strict"
	var loxSchetchik=0;
	var lox = false;
	var begin,end;
	var wins = 1;
	var checkSbros = true;
	var close = false;
	var k,j;
	var choose = 1;
	var indextypika = 0;
	var check, proverka;
	var firtsclick = true;
	var typik;
    var kvRight, right;
    var kvLeft, left;
    var kvTop, top;
    var kvDown, down;
    var shurina = document.getElementById('myCanvas');
    var intervalID;
    //shurina.width = screen.width/2;
    //shurina.height = screen.height/2;
    //alert(screen.height);
    //alert(screen.width);
    var checkmas = [];
    var down = new Image(); 
	down.src = "arrows/down.png";
	var up = new Image(); 
	up.src = "arrows/up.png";
	var left = new Image(); 
	left.src = "arrows/left.png";
	var right = new Image(); 
	right.src = "arrows/right.png";
	var stop = new Image(); 
	stop.src = "mainStones/StoneStop.png";
	var block = new Image(); 
	block.src = "mainStones/Stone.png";
	var complete = new Image();
	complete.src = "mainStones/StoneActive.png";
	var zamok = new Image();
	zamok.src = "close/close.png";


	var kv1 = {number:1, xmin:0, ymin:0,xmax:100,ymax:100, mark:true, image: block}
	var kv2 = {number:2, xmin:100, ymin:0, xmax:200,ymax:100,mark:true, image: block}
	var kv3 = {number:3, xmin:200, ymin:0,xmax:300,ymax:100, mark:true, image: block}
	var kv4 = {number:4, xmin:300, ymin:0,xmax:400,ymax:100, mark:true, image: block}
	var kv5 = {number:5, xmin:400, ymin:0,xmax:500,ymax:100, mark:true, image: block}
	var kv6 = {number:6, xmin:0, ymin:100,xmax:100,ymax:200, mark:true, image: block}
	var kv7 = {number:7, xmin:100, ymin:100,xmax:200,ymax:200, mark:true, image: block}
	var kv8 = {number:8, xmin:200, ymin:100,xmax:300,ymax:200, mark:true, image: block}
	var kv9 = {number:9, xmin:300, ymin:100, xmax:400,ymax:200, mark:true, image: block}
	var kv10 = {number:10, xmin:400, ymin:100,xmax:500,ymax:200, mark:true, image: block}
	var kv11 = {number:11, xmin:0, ymin:200,xmax:100,ymax:300, mark:true, image: block}
	var kv12 = {number:12, xmin:100, ymin:200,xmax:200,ymax:300, mark:true, image: block}
	var kv13 = {number:13, xmin:200, ymin:200,xmax:300,ymax:300, mark:true, image: block}
	var kv14 = {number:14, xmin:300, ymin:200,xmax:400,ymax:300, mark:true, image: block}
	var kv15 = {number:15, xmin:400, ymin:200,xmax:500,ymax:300, mark:true, rock:false, image: block }
	var kv16 = {number:16, xmin:0, ymin:300,xmax:100,ymax:400, mark:true, image: block}
	var kv17 = {number:17, xmin:100, ymin:300,xmax:200,ymax:400, mark:true, image: block}
	var kv18 = {number:18, xmin:200, ymin:300,xmax:300,ymax:400, mark:true, image: block}
	var kv19 = {number:19, xmin:300, ymin:300,xmax:400,ymax:400, mark:true, image: block}
	var kv20 = {number:20, xmin:400, ymin:300,xmax:500,ymax:400, mark:true, rock :false, image: block}
	var kv21 = {number:21, xmin:0, ymin:400,xmax:100,ymax:500, mark:true, image: block}
	var kv22 = {number:22, xmin:100, ymin:400,xmax:200,ymax:500, mark:true, image: block}
	var kv23 = {number:23, xmin:200, ymin:400,xmax:300,ymax:500, mark:true, image: block}
	var kv24 = {number:24, xmin:300, ymin:400,xmax:400,ymax:500, mark:true, image: block}
	var kv25 = {number:25, xmin:400, ymin:400,xmax:500,ymax:500, mark:true, image: block}
	var mas = [kv1,kv2,kv3,kv4,kv5,kv6,kv7,kv8,kv9,kv10,kv11,kv12,kv13,kv14,kv15,kv16,kv17,kv18,kv19,kv20,kv21,kv22,kv23,kv24,kv25];
	var masObratno = [];
	window.onload = function() {
		paintTyr();
	}
	var i = 0;
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var map = document.getElementById("karta");
	ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.stroke();

function hitpath(context, event){ if(checkSbros) {
		if (wins === 1) begin = new Date();
		var canvas = context.canvas;
		var bb = canvas.getBoundingClientRect();
		var x = (event.clientX-bb.left)*(canvas.width/bb.width);
		var y = (event.clientY-bb.top)*(canvas.height/bb.height);
		for ( i = 0; i<25; i++) {
			 k = mas[i];
			if( x > k.xmin && x < k.xmax && y > k.ymin && y < k.ymax) 
				break;
		}
		if (k.mark) {
			if (firtsclick) {
				ctx.drawImage(complete,k.xmin,k.ymin,100,100);
				ctx.stroke();
				k.mark = false;
				masObratno = [];
				masObratno.push(k);

				kvRight = mas[i+1];
				kvDown = mas[i+5];
				kvLeft = mas[i-1];
				kvTop = mas[i-5]; 
				if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
				if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
				if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
				if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
				ctx.stroke();
				firtsclick = false;
				checkmas = [];
				checkmas.push(kvDown,kvTop,kvLeft,kvRight);
				return context.isPointInPath(x,y);
			}	

			else { 
				check =  false;
					for(var j=0; j < 4; j++) {
						proverka = checkmas[j];
						if(proverka && k.number===proverka.number)  check = true; 
					}	
				if(check) {
			 	if (kvRight && k.number !== kvRight.number && kvRight.mark ) {
			 		ctx.drawImage(block,kvRight.xmin,kvRight.ymin,100,100);
			 		kvRight = false;
					ctx.stroke();
				}	
				else { if(kvRight && k.number === kvRight.number && kvRight.mark) 
					intervalID= setInterval(paintright,120);
					checkSbros = false;
			 	}
			 	if (kvLeft && k.number !== kvLeft.number && kvLeft.mark) {
			 		ctx.drawImage(block,kvLeft.xmin,kvLeft.ymin,100,100);
			 		kvLeft = false;
					ctx.stroke();
			 	}
			 	else { if(kvLeft && k.number === kvLeft.number && kvLeft.mark) 
					intervalID= setInterval(paintleft,120);
					checkSbros = false;
				}	
			 	if (kvTop && k.number !== kvTop.number && kvTop.mark) {
			 		ctx.drawImage(block,kvTop.xmin,kvTop.ymin,100,100);
			 		kvTop = false;
					ctx.stroke();
			 	}
			 	else { if(kvTop && k.number === kvTop.number && kvTop.mark) 
					intervalID= setInterval(paintverx,120);
					checkSbros = false;
				}
			 	if (kvDown && k.number !== kvDown.number && kvDown.mark) {
			 		ctx.drawImage(block,kvDown.xmin,kvDown.ymin,100,100);
			 		kvDown = false;
					ctx.stroke();
			 	}
			 	else { if(kvDown && k.number === kvDown.number && kvDown.mark) 
					intervalID= setInterval(paintdown,120);
					checkSbros = false;
				}				
			 	} 
			 	else { 
			 		//alert("Ты чё?! Стрелки не видишь?!");
			 	}
			}
				

		}
}
}
	canvas.onclick = function(event) {
		hitpath (this.getContext("2d"), event);
	};

	function paintright(){
		ctx.drawImage(complete,kvRight.xmin,kvRight.ymin,100,100);
		ctx.stroke();
		kvRight.mark = false;
		masObratno.push(kvRight);
		i++;
		kvRight = mas[i];  
			if (kvRight && kvRight.xmin !==0 ) {
				if (kvRight && kvRight.mark === false) {
					i-=1;
					kvDown = mas[i+5];
					kvTop = mas[i-5]; 
					if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
					if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
					kvLeft = false;
					ctx.stroke();
						clearInterval(intervalID);
						checkSbros = true; 
						setTimeout(debik,100);
				}
				if (kvRight.xmin===400 && kvRight.mark===true) {
					kvRight.mark = false;
					ctx.drawImage(complete,kvRight.xmin,kvRight.ymin,100,100);
					ctx.stroke();
					masObratno.push(kvRight);
				kvDown = mas[i+5];
				kvTop = mas[i-5]; 
				if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
				if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
				kvLeft = false;
				ctx.stroke();
					clearInterval(intervalID);
					checkSbros = true;
					setTimeout(debik,100);
				}
		}
		else {
			i-=1;
			kvDown = mas[i+5];
			kvTop = mas[i-5]; 
			if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
			if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
			kvLeft = false;
			ctx.stroke();
			clearInterval(intervalID); 
			checkSbros = true;
			setTimeout(debik,100);
		}
	}
	function paintverx(){
		ctx.drawImage(complete,kvTop.xmin,kvTop.ymin,100,100);
		ctx.stroke();
		kvTop.mark = false;
		masObratno.push(kvTop);
		i-=5;
		kvTop = mas[i];
		if (kvTop) {
			if (kvTop && kvTop.mark === false) {
				i+=5;
				kvRight = mas [i+1];
				kvLeft = mas[i-1];
				if(kvLeft && kvLeft.mark && kvLeft.xmax != 500)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
				if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
				kvDown = false;
				ctx.stroke();
					clearInterval(intervalID); 
					checkSbros = true;
					setTimeout(debik,100);
			}
			if (kvTop.ymin===0 && kvTop.mark===true) {
				kvTop.mark = false;
				ctx.drawImage(complete,kvTop.xmin,kvTop.ymin,100,100);
				ctx.stroke();
				masObratno.push(kvTop);
			kvRight = mas [i+1];
			kvLeft = mas[i-1];
			if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
			if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
			kvDown = false;
			ctx.stroke();
				clearInterval(intervalID);
				checkSbros = true;
				setTimeout(debik,100);
			}
		}
		else { 
			i+=5;
			kvLeft = mas[i-1];
			kvRight = mas [i+1];
			if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
			if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
			kvDown = false;
			ctx.stroke();
			clearInterval(intervalID);
			checkSbros = true;
			setTimeout(debik,100);
			 }
	}
	function paintdown(){
		ctx.drawImage(complete,kvDown.xmin,kvDown.ymin,100,100);
		ctx.stroke();
		kvDown.mark = false;
		masObratno.push(kvDown);
		i+=5;
		kvDown = mas[i];
		if(kvDown) {
			if (kvDown && kvDown.mark === false) {
				i-=5;
				kvRight = mas [i+1];
				kvLeft = mas[i-1];
				if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
				if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
				kvTop = false;
				ctx.stroke();
				clearInterval(intervalID); 
				checkSbros = true;
				setTimeout(debik,100);
			}
			if (kvDown.ymin===400 && kvDown.mark===true) {
				kvDown.mark = false;
				ctx.drawImage(complete,kvDown.xmin,kvDown.ymin,100,100);
				ctx.stroke();
				masObratno.push(kvDown);
			kvRight = mas [i+1];
			kvLeft = mas[i-1];
			kvTop = mas[i-5]; 
			if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
			if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
			kvTop = false;
			ctx.stroke();
				clearInterval(intervalID);
				checkSbros = true;
				setTimeout(debik,100);
			}
	    }
	    else {
	    		i-=5;
				kvRight = mas [i+1];
				kvLeft = mas[i-1];
				if(kvLeft && kvLeft.xmax != 500 && kvLeft.mark)ctx.drawImage(left,kvLeft.xmin,kvLeft.ymin,100,100);
				if(kvRight && kvRight.xmax != 100 && kvRight.mark)ctx.drawImage(right,kvRight.xmin,kvRight.ymin,100,100);
				kvTop = false;
				ctx.stroke();
				clearInterval(intervalID); 
				checkSbros = true;
				setTimeout(debik,100);
	    }
	}
	function paintleft(){
		ctx.drawImage(complete,kvLeft.xmin,kvLeft.ymin,100,100);
		ctx.stroke();
		kvLeft.mark = false;
		masObratno.push(kvLeft);
		i-=1;
		kvLeft = mas[i];
		if (kvLeft && kvLeft.xmin !== 400) {
			if (kvLeft && kvLeft.mark === false) {
				i+=1;
				kvDown = mas[i+5];
				kvTop = mas[i-5]; 
				if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
				if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
				kvRight = false;
				ctx.stroke();
				clearInterval(intervalID); 
				checkSbros = true;
				setTimeout(debik,100);
			}
			if (kvLeft.xmin===0 && kvLeft.mark===true) {
				kvLeft.mark = false;
				ctx.drawImage(complete,kvLeft.xmin,kvLeft.ymin,100,100);
				ctx.stroke();
				masObratno.push(kvLeft);
			kvDown = mas[i+5];
			kvTop = mas[i-5]; 
			if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
			if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
			kvRight = false;
			ctx.stroke();
				clearInterval(intervalID);
				checkSbros = true;
				setTimeout(debik,100);
			}
		}
		else {
				i+=1;
				kvDown = mas[i+5];
				kvTop = mas[i-5]; 
				if(kvDown && kvDown.mark)ctx.drawImage(down,kvDown.xmin,kvDown.ymin,100,100);
				if(kvTop && kvTop.mark) ctx.drawImage(up,kvTop.xmin,kvTop.ymin,100,100);
				kvRight = false;
				ctx.stroke();
				clearInterval(intervalID); 
				checkSbros = true;
				setTimeout(debik,100);
		}
	}
	function points() {
		var rechnen = 0;
		for ( var finish = 0; finish<25; finish++) {
			var congratulations = mas[finish];
			if(congratulations.mark === false) 
				rechnen+=1;
			} 
			return rechnen;
	}
	function debik() {
		if (kvRight && kvRight.xmin === 0) kvRight = false;
		if (kvLeft && kvLeft.xmin === 400) kvLeft = false;
		checkmas = [];
		checkmas.push(kvDown,kvTop,kvLeft,kvRight);
		for(var j=0; j < 4; j++) {
			proverka = checkmas[j];
			if(proverka) { checkmas.push(proverka); } 
		}	
		indextypika = 0;
		var length = checkmas.length;
		for (j = 4; j < length; j++) {
			typik = checkmas[j];
			if (typik.mark === false) indextypika +=1;
		}
		if ( indextypika === length-4 ) {  
			if (points() === 25)   { 
				if(wins == choose) {
					wins+=1; 
					if(wins!==16) map.src = "Map1active/"+choose+"_"+wins+".png"; 
				}
				if(wins!==16)  { capri("block"); setTimeout(endAnimation,3000); }
				if (wins == 16) { timer(); show("block"); wins-=1; lox = true;}
			}
			else { 
			//alert("Тупик");
			checkSbros = false;
			i = masObratno.length-1;
			intervalID= setInterval(beautifulSbros,100);
			}
		}
	}
	function sbros() {
		if(!close) {
				for ( i = 0; i<25; i++) {
					var k = mas[i];
					if (!k.rock)
					k.mark = true;
				}
				for (i=0;i<5;i++) {
					for(j=0;j<5;j++){
						var kybik = mas[5*i+j];
						if(kybik.mark === true)
						ctx.drawImage(kybik.image,kybik.xmin,kybik.ymin,100,100);
					}
				}
				ctx.stroke();
				firtsclick = true;
		}
    }
    function beautifulSbros(){
			var k = masObratno[i];
			k.mark = true;
			ctx.drawImage(k.image,k.xmin,k.ymin,100,100);
			ctx.stroke();
			i-=1;
			if (i===-1) { clearInterval(intervalID); checkSbros = true; firtsclick = true;}
    }
    function paintTyr(id) {
		if (id)  choose = id;
		ctx.clearRect(0,0,500,500);
		//document.getElementById('p').innerHTML = "Level    "+ choose+"/15";
		if(wins >= choose) {
			close = false;
			checkSbros = true;
			map.src = "Map1active/"+choose+"_"+wins+".png"
			for ( i = 0; i<25; i++) {
				var k = mas[i];
				k.mark = true;
				k.image = block;
				k.rock = false;
			}
		firtsclick = true;
		switch (choose){
				case '1': 
					break;
				case '2': 
					kv15.mark = false;
					kv15.image = stop;
					kv15.rock = true;

					kv20.mark = false;
					kv20.image = stop;
					kv20.rock = true;
					break;
				case '3':
					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv15.mark = false;
					kv15.image = stop;
					kv15.rock = true;
					break;
				case '4':
					kv9.mark = false;
					kv9.image = stop;
					kv9.rock = true;

					kv25.mark = false;
					kv25.image = stop;
					kv25.rock = true;
					break;
				case '5':
					kv9.mark = false;
					kv9.image = stop;
					kv9.rock = true;

					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv17.mark = false;
					kv17.image = stop;
					kv17.rock = true;

					kv18.mark = false;
					kv18.image = stop;
					kv18.rock = true;

					kv20.mark = false;
					kv20.image = stop;
					kv20.rock = true;

					kv25.mark = false;
					kv25.image = stop;
					kv25.rock = true;
					break;
				case '6' :
					kv1.mark = false;
					kv1.image = stop;
					kv1.rock = true;

					kv5.mark = false;
					kv5.image = stop;
					kv5.rock = true;

					kv8.mark = false;
					kv8.image = stop;
					kv8.rock = true;

					kv13.mark = false;
					kv13.image = stop;
					kv13.rock = true;			
					break;
				case '7' :
					kv5.mark = false;
					kv5.image = stop;
					kv5.rock = true;

					kv10.mark = false;
					kv10.image = stop;
					kv10.rock = true;	

					kv19.mark = false;
					kv19.image = stop;
					kv19.rock = true;		
					break;
				case '8' :
					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv17.mark = false;
					kv17.image = stop;
					kv17.rock = true;			
					break;
				case '9' :
					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv12.mark = false;
					kv12.image = stop;
					kv12.rock = true;		

					kv14.mark = false;
					kv14.image = stop;
					kv14.rock = true;

					kv15.mark = false;
					kv15.image = stop;
					kv15.rock = true;	
					break;
				case '10' :
					kv4.mark = false;
					kv4.image = stop;
					kv4.rock = true;

					kv5.mark = false;
					kv5.image = stop;
					kv5.rock = true;

					kv15.mark = false;
					kv15.image = stop;
					kv15.rock = true;
					break;
				case '11' :
					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv8.mark = false;
					kv8.image = stop;
					kv8.rock = true;

					kv16.mark = false;
					kv16.image = stop;
					kv16.rock = true;	

					kv23.mark = false;
					kv23.image = stop;
					kv23.rock = true;
					break;
				case '12' :
					kv7.mark = false;
					kv7.image = stop;
					kv7.rock = true;

					kv18.mark = false;
					kv18.image = stop;
					kv18.rock = true;
					break;
				case '13' :
					kv3.mark = false;
					kv3.image = stop;
					kv3.rock = true;

					kv4.mark = false;
					kv4.image = stop;
					kv4.rock = true;

					kv5.mark = false;
					kv5.image = stop;
					kv5.rock = true;

					kv21.mark = false;
					kv21.image = stop;
					kv21.rock = true;

					kv22.mark = false;
					kv22.image = stop;
					kv22.rock = true;
					break;
				case '14' :
					kv5.mark = false;
					kv5.image = stop;
					kv5.rock = true;

					kv14.mark = false;
					kv14.image = stop;
					kv14.rock = true;

					kv16.mark = false;
					kv16.image = stop;
					kv16.rock = true;

					kv23.mark = false;
					kv23.image = stop;
					kv23.rock = true;
					break;
				case '15' :
					kv20.mark = false;
					kv20.image = stop;
					kv20.rock = true;

					kv23.mark = false;
					kv23.image = stop;
					kv23.rock = true;
					break;		
		}
			for (i=0;i<5;i++) {
				for(j=0;j<5;j++){
					var kybik = mas[5*i+j];
					ctx.drawImage(kybik.image,kybik.xmin,kybik.ymin,100,100);
					ctx.rect(kybik.xmin,kybik.ymin,100,100);
				}
			}
		}
		else {
			ctx.drawImage(zamok,0,0,500,500);
			close = true;
			checkSbros = false;
			if(kvDown) kvDown = false;
			if(kvTop) kvTop = false;
			if(kvLeft) kvLeft = false;
			if(kvRight) kvRight = false;
		}
	};
function timer() {
	var txt = "";
	end = new Date();
	var timer = new Date();
	var rezult = end - begin;
	timer.setTime(rezult);
	var hours = timer.getHours()-2;
	var minutes = timer.getMinutes(); 
	var seconds = timer.getSeconds();
	txt = hours + "hours"+ minutes+"minutes"+seconds + "seconds";  
	//localStorage.clear();
	var time = localStorage.time;
	if(choose!=1) time = txt;
	localStorage.time = time;
	document.getElementById('win').innerHTML = "You killed this shit <br> Good work! <br> Your time is: "+hours+" h:"+minutes+" m:"+seconds+" s<br> New map is opened for you"
}
/*function level() {
	var name = localStorage.username;
	document.getElementById('p').innerHTML = localStorage.time;
	//if(!name) {
		if(choose!=1)name = wins - 1;
		localStorage.username = name;
	//}
				document.getElementById('test').innerHTML = localStorage.username;
}*/




function animation(){
	var chiksa = 400;
	var animation = document.getElementById('MOTHERFUCKINGANIMATION');
	//animation.style = " width:"+chiksa+"px;position:relative; height:100px;animation-name:example; animation-duration:5s; font-size:32px;";
	//setTimeout(endAnimation,5000);
  
    var start = Date.now(); // сохранить время начала
      var timer = setInterval(function() {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;
        animation.style = " width:"+chiksa+"px;position:relative; height:100px; font-size:26px; position:fixed;";
        animation.style.left = (screen.width-400)/2+'px';
        animation.style.top = screen.height/2-timePassed / 5 + 'px';
        if (timePassed > 3000) { clearInterval(timer);  
        	//endAnimation(); 
        }
      }, 20);
     
}
function endAnimation(){
	capri("none");

}
function show(state){

					document.getElementById('window').style.display = state;			
					document.getElementById('wrap').style.display = state; 			
}
function map2(){
	if(lox){
			if (loxSchetchik >= 199) { 
			document.location.href = "bro.html";  
		}
		 loxSchetchik+=1;
		document.getElementById("ebattulox").innerHTML = "200 CLICKED FOR OPEN MAP2, You click " + loxSchetchik +"/200";
		document.getElementById("ebattulox").style = "font-family: segoe print, sans-serif;color: orange;";
	
	}
}
function capri(state){

					document.getElementById('levelup').style.display = state;			
					document.getElementById('bg').style.display = state; 	
					document.getElementById('nextlevel').innerHTML = "Complete " + choose + "level";  
}