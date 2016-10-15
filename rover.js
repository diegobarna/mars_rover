// It starts in southwest corner [0,0] facing east.

var myRover1 = {
  id: 1,
  name: "Rover 1",
  position: [0, 0],
  direction: 'E',
  sequence: "fffrfrbbb"
};

var myRover2 = {
  id: 2,
  name: "Rover 2",
  position: [2, 2],
  direction: 'S',
  sequence: "ffff"
};

// The grid is rotated 90º clockwise, north is left
// Obstacles are represented by 8

var myGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [0,0] to [0,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [1,0] to [1,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [2,0] to [2,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [3,0] to [3,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [4,0] to [4,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 8], // From [5,0] to [5,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [6,0] to [6,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [7,0] to [7,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [8,0] to [8,9]
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // From [9,0] to [9,9]
];

function showPosition(rover) {
  console.log(rover.name + "-> Position: [" + rover.position[0] + "," + rover.position[1] + "] - Direction: " + rover.direction);
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
  if (obstacle != 0) {
    console.log("Found obstacle at point: [" + x + "," + y + "]");
    return true
  } else {
    return false;
  }
}

function goForward(rover, grid) {
  var roverMove;
  grid[rover.position[0]][rover.position[1]] = 0;
  switch(rover.direction) {
    case 'N':
      roverMove = checkBorder(rover.position[1] + 1);
      if (checkObstacle(grid,[rover.position[0]],[roverMove])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[1] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'E':
      roverMove = checkBorder(rover.position[0] + 1);
      if (checkObstacle(grid,[roverMove],[rover.position[1]])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[0] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'S':
      roverMove = checkBorder(rover.position[1] - 1);
      if (checkObstacle(grid,[rover.position[0]],[roverMove])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[1] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'W':
      roverMove = checkBorder(rover.position[0] - 1);
      if (checkObstacle(grid,[roverMove],[rover.position[1]])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[0] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
  };
  showPosition(rover);
}

function goBack(rover, grid) {
  var roverMove;
  switch(rover.direction) {
    case 'N':
      roverMove = checkBorder(rover.position[1] - 1);
      if (checkObstacle(grid,[rover.position[0]],[roverMove])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[1] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'E':
      roverMove = checkBorder(rover.position[0] - 1);
      if (checkObstacle(grid,[roverMove],[rover.position[1]])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[0] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'S':
      roverMove = checkBorder(rover.position[1] + 1);
      if (checkObstacle(grid,[rover.position[0]],[roverMove])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[1] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
      }
      break;
    case 'W':
      roverMove = checkBorder(rover.position[0] + 1);
      if (checkObstacle(grid,[roverMove],[rover.position[1]])) {
        grid[rover.position[0]][rover.position[1]] = rover.id;
        console.log(rover.name + " stopped")
        rover.sequence = [];
      } else {
        rover.position[0] = roverMove;
        grid[rover.position[0]][rover.position[1]] = rover.id;
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

function checkArray(sequence) {
   return typeof sequence != "array" ? sequence.split("") : sequence;
}

function step(rover, i, grid) {
  var stop;
  switch(rover.sequence[i]) {
    case 'f':
      goForward(rover, grid);
      break;
    case 'b':
      goBack(rover, grid);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
  };
}

function move(rover1, rover2, grid) {
  grid[rover1.position[0]][rover1.position[0]] = 1;
  if (rover2.position != rover1.position) {
    grid[rover2.position[0]][rover2.position[0]] = 1;
  } else {
    console.log("Both Rovers cannot start at the same point.");
    return;
  }
  rover1.sequence = checkArray(rover1.sequence);
  rover2.sequence = checkArray(rover2.sequence);
  var steps = Math.max(rover1.sequence.length, rover2.sequence.length);
  for (var i = 0; i < steps; i++) {
    step(rover1, i, grid);
    step(rover2, i, grid);
  }
}

debugger;
move(myRover1, myRover2, myGrid);

