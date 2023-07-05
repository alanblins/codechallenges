/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an action using console.log()
// To debug: console.error('Debug messages...');

var asciiConcat = 0;
for(var i=0;i<MESSAGE.length;i++){
	var ascii = MESSAGE.charCodeAt(i);
	asciiConcat = (asciiConcat<<ascii.toString(2).length) | ascii;	
}

console.log(printLetter(asciiConcat).trim());

 
 function printLetter(ascii){
		var printResult = '';
		 var countintOnes = 0;
		 var countintZeros = 0;
		 function printOnes(quantity){
			 var printing = '0 ';
			 for(var i=0;i<quantity;i++){
				 printing+='0';
			 }
			 printResult+=printing+' ';
		 }
		  
		 function printZeros(quantity){
			 var printing = '00 ';
			 for(var i=0;i<quantity;i++){
				 printing+='0';
			 }
			 printResult+=printing+' ';
		 }
		 var lenghtBinary = ascii.toString(2).length;
		 for(var i=lenghtBinary-1;i>=0;i--){
				var numberResult = ascii>>i&1;
				if(numberResult>0){
					countintOnes++;
					if(countintZeros>0){
						printZeros(countintZeros);
					}
					countintZeros = 0;
				}else{
					countintZeros++;
					if(countintOnes>0){
						printOnes(countintOnes);
					}
					countintOnes =0;
				}
				
		 }
		 if(countintZeros>0){
			 printZeros(countintZeros);
			 return printResult;
		 }
		 if(countintOnes>0){
			 printOnes(countintOnes);
			 return printResult;
		 }
 }
 
 
 
 