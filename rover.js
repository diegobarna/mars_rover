// It starts in southwest corner [0,0] facing east.

var myRover = {
  position: [0, 0], 
  direction: 'E'
};

// The grid is rotated 90º clockwise, north is left
// Obstacles are represented by 1

var myGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [0,0] to [0,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [1,0] to [1,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [2,0] to [2,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [3,0] to [3,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [4,0] to [4,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // From [5,0] to [5,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [6,0] to [6,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [7,0] to [7,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [8,0] to [8,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [9,0] to [9,9]
];

function showPosition(rover) {
  console.log("Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] - Direction: " + rover.direction);
}

function checkBorder(position) {
  if (position < 0) {
    return 9;
  } else if (position > 9) {
    return 0;
  } else {
    return position;
  }
}

function checkObstacle(grid,x,y) {
  var obstacle = grid[x][y];
  if (obstacle === 1) {
    console.log("Found obstacle at point: [" + x + "," + y + "]");
    return true
  } else {
    return false;
  }
}

function goForward(rover, grid) {
  var move;
  switch(rover.direction) {
    case 'N':
      move = checkBorder(++rover.position[1]);
      if (checkObstacle(grid,[rover.position[0]],[move])) {
        return 'Stop';
      }
      break;
    case 'E':
      move = checkBorder(++rover.position[0]);
      if (checkObstacle(grid,[move],[rover.position[1]])) {
        return 'Stop';
      }
      break;
    case 'S':
      move = checkBorder(--rover.position[1]);
      if (checkObstacle(grid,[rover.position[0]],[move])) {
        return 'Stop';
      }
      break;
    case 'W':
      move = checkBorder(--rover.position[0]);
      if (checkObstacle(grid,[move],[rover.position[1]])) {
        return 'Stop';
      }
      break;
  };
  showPosition(rover);
}

function goBack(rover, grid) {
  switch(rover.direction) {
    case 'N':
      move = checkBorder(--rover.position[1]);
      if (checkObstacle(grid,[rover.position[0]],[move])) {
        return 'Stop';
      }
      break;
    case 'E':
      move = checkBorder(--rover.position[0]);
      if (checkObstacle(grid,[move],[rover.position[1]])) {
        return 'Stop';
      }
      break;
    case 'S':
      move = checkBorder(++rover.position[1]);
      if (checkObstacle(grid,[rover.position[0]],[move])) {
        return 'Stop';
      }
      break;
    case 'W':
      move = checkBorder(++rover.position[0]);
      if (checkObstacle(grid,[move],[rover.position[1]])) {
        return 'Stop';
      }
      break;
  };
  showPosition(rover);
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
  showPosition(rover);
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
  showPosition(rover);
} 

function moveSequence(sequence, rover, grid) {
  sequence = typeof sequence != "array" ? sequence.split("") : sequence;
  for (var i = 0; i < sequence.length; i++) {
    var stop;
    switch(sequence[i]) {
      case 'f':
        stop = goForward(rover, grid);
        if (stop === "Stop") {
          return;
        }
        break;
      case 'b':
        stop = goBack(rover, grid);
        if (stop === "Stop") {
          return;
        } 
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    };
  }
  showPosition(rover);
}

debugger;
moveSequence("ffflflfrblbbblflfffff", myRover, myGrid);

