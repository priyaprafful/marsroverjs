// Rover Object Goes Here
// ======================

// ======================
var rover = {
  direction: "W",
  x: 0, y: 0,
  history:"start."

}

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      rover.history = rover.history+" Direction is changed from north to west through turn left.";
      console.log("rover is now facing West");
      break;
    case "W":
      rover.direction = "S";
      rover.history = rover.history+" Direction is changed from west to south through turn left.";
      console.log("rover is now facing South");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      rover.history = rover.history+" Direction is changed  from north to East through turn right.";
      console.log("rover is now facing East");
      break;

  }
}

function moveForward(rover) {
  console.log("moveForward was called");
  var oldPosition;
  switch (rover.direction) {
    case "W":
      oldPosition=rover.x;
      rover.x = rover.x - 1;
      rover.history=rover.history+ "current position is changed in west on x axis from  "+oldPosition+" to "+rover.x;
      console.log("current position of rover is", rover.x, ",", rover.y);
      break;
    case "N":
     oldPosition=rover.y;
      rover.y = rover.y - 1;
      rover.history=rover.history+"current position is changed in north on y axis from"+oldPosition+" to " +rover.y;
      console.log("current position of rover is", rover.x, ",", rover.y);
      break;
    case "S":
    oldPosition=rover.y;
      rover.y = rover.y + 1;
      rover.history=rover.history+"current position is changed in south on y axis from"+oldPosition+" to " +rover.y;
      console.log("current position of rover is", rover.x, ",", rover.y);
      break;

  }
}

function command(commandsToBeExecuted){
  console.log("command function is called for ",commandsToBeExecuted);

  for(var i=0; i<commandsToBeExecuted.length; i++){
    var character = commandsToBeExecuted.charAt(i);
      console.log(i,"=",character);

      if(character=="r"){
        turnRight(rover);
      }
      else if(character=="l"){
        turnLeft(rover);
      }
      else if(character=="f"){
        moveForward(rover);
      }
      else{
        console.log("The character ",character,"is not correct ");
      }
  }

}
function showHistory(){
  console.log(rover.history);

}


