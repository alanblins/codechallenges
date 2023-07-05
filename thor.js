/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    var mapAngle = [
        "E",
        "NE",
        "N",
        "NW",
        "W",
        "SW",
        "S",
        "SE"
    ];
    
    
    // A single line providing the move to be made: N NE E SE S SW W or NW
    var angle = calcAngleDegrees(initialTX,initialTY, lightX,lightY);
    printErr(angle);
    var dir = getDir(angle);
    printErr(dir);
    print(dir);
}

function getDir(angle){
    
     var directions = [
        "E",
        "NE",
        "N",
        "NW",
        "W",
        "SW",
        "S",
        "SE"
    ];
    
    for(var i=0;i<directions.length;i++){
        var angleDirection = i*45;
        var angleNextDirection = angleDirection+45;
        var average = (angleDirection+angleNextDirection)/2;
        
        if(angle>=angleDirection && angle<angleNextDirection){
            if(i==7){
                return directions[i];
            }
            if(angle<=average){
                return directions[i];
            }else{
                return directions[i+1];
            }
        }
    }
}

function calcAngleDegrees(x1,y1, x2,y2) {
  var dx = x2-x1;
  var dy = -(y2-y1);
  var angle = Math.atan2(dy, dx)*180/Math.PI;
  if(angle<0){
    angle = angle+360;
  }
  return angle;
}