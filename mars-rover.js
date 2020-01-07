// Rover Object Goes Here
let rover = {
  "direction": "E",
  "x": 0,
  "y": 0,
  "travelLog": ["0, 0"]
};
// ======================

rover = runCommands("rlrlfrflfrrff", rover);
console.log(rover.travelLog);

// ======================
function turnLeft(rover){
  let direction = rover.direction;
  switch (rover.direction) {
    case "N":
      direction = "W";
      break;
    case "W":
      direction = "S";
      break;
    case "S":
      direction = "E";
      break;
    case "E":
      direction = "N";
      break;
  }
  console.log("Facing " + direction);
  return direction;
}

function turnRight(rover){
  let direction = rover.direction;
  switch (rover.direction) {
    case "N":
      direction = "E";
      break;
    case "E":
      direction = "S";
      break;
    case "S":
      direction = "W";
      break;
    case "W":
      direction = "N";
      break;
  }
  console.log("Facing " + direction);
  return direction;
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
    case "S":
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
  }
  rover.travelLog.push(rover.x + ", " + rover.y);
  console.log("x: " + rover.x + ", y: " + rover.y)
  return rover;
}

function runCommands(commands, rover) {
  Array.from(commands).forEach(command => {
    switch (command) {
      case "f":
        rover = moveForward(rover);
        break;
      case "r":
        rover.direction = turnRight(rover);
        break;
      case "l":
        rover.direction = turnLeft(rover);
        break;
    }
  });
  return rover;
}