var rover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog :[]
}

function turnLeft(rover){

    switch (rover.direction) {
      case "N":
      rover.direction = "W";
      break;
  
      case "W":
      rover.direction = "S";
      break;
  
      case "S":
      rover.direction = "E";
      break;
  
      case "E":
      rover.direction = "N";
      break;
    }
    console.log("Direction:" + rover.direction);
}

function turnRight(rover){

  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    
    case "W":
    rover.direction = "N";
    break;

    case "S":
    rover.direction = "W";
    break;

    case "E":
    rover.direction = "S";
    break;
  }
  console.log("Direction:" + rover.direction);
}

function moveForward(rover){
  switch(rover.direction){
    case "N":
    if(rover.y === 0){ break; }
    rover.y --;
    break;

    case "W":
    if(rover.x === 0){ break; }
    rover.x --;
    break;

    case "S":
    if(rover.y === 9){ break; }
    rover.y ++;
    break;

    case "E":
    if(rover.x === 9){ break; }
    rover.x ++;
    break;
  }
  console.log("Coordinates: (" + rover.x + ", " + rover.y + ")")
}
function moveBackward(rover){
  switch(rover.direction){
    case "N":
    if(rover.y === 9){ break; }
    rover.y ++;
    break;

    case "W":
    if(rover.x === 9){ break; }
    rover.x ++;
    break;

    case "S":
    if(rover.y === 0){ break; }
    rover.y --;
    break;

    case "E":
    if(rover.x === 0){ break; }
    rover.x --;
    break;
  }
  console.log("Coordinates: (" + rover.x + ", " + rover.y + ")")
}
function commandsList(rover, commands){
  for (var i = 0; i < commands.length; i++) {
    var letters = commands[i];

    switch (letters) {
      case 'l':
      turnLeft(rover);
      break;

      case 'r':
      turnRight(rover);
      break;

      case 'f':
      moveForward(rover);
      rover.travelLog.push("Coordinates: (" + rover.x + ", " + rover.y + ")");
      break;

      case 'b':
      moveBackward(rover);
      rover.travelLog.push("Coordinates: (" + rover.x + ", " + rover.y + ")");
      break;
    }
  }
}

