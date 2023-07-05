/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
// Write an action using console.log()
// To debug: console.error('Debug messages...');

for(var i=0;i<H;i++){
  const ROW = readline();
  console.log(printRowLetter(ROW,T,L));	
}

function calcStartIndex(text,i,widthLetter){
    var letterIndex = text.toUpperCase().charCodeAt(i)-65;
	if(letterIndex < 0 || letterIndex > 25){
	    letterIndex = 26;
	}
	
	return letterIndex+(letterIndex*(widthLetter-1));
}

function printRowLetter(rowLetterInput,text,widthLetter){
	var rowPrint = '';
	for(var i=0;i<text.length;i++){
		var startIndex = calcStartIndex(text,i,widthLetter);
		rowPrint+=rowLetterInput.substr(startIndex,L);
	}
	return rowPrint;
}