import { 
  CUBE_ANIMATE_MULTIPLIER, 
  CUBE_MOVE_X, 
  CUBE_MOVE_Y, 
  CUBE_MOVE_Z, 
  CUBE_X_THRESHOLD_BEFORE_Z_MOVE
} from './defaults.js';

export function animateCubes (cubes, time) {
  cubes.forEach((cube) => {
    setNewRotation(cube.rotation, time);
    setNewCubePosition(cube.position);
  });  
}

function setNewRotation (rotation, time) {
  const newRotation = time * CUBE_ANIMATE_MULTIPLIER;
  rotation.x = newRotation;
  rotation.y = newRotation;
}

function setNewCubePosition (position) {
  const { x, y, z } = position;
  const xThreshold = x > Math.abs(CUBE_X_THRESHOLD_BEFORE_Z_MOVE);
  position.x = x + getPositionChange(CUBE_MOVE_X);
  position.y = y + getPositionChange(CUBE_MOVE_Y);
  position.z = z + (xThreshold ? getPositionChange(CUBE_MOVE_Z) : 0);
}

function getPositionChange(distance) {
  return distance * getRandomSign();
}

function getRandomSign () {
  return Math.random() < .5 ? -1 : 1;
}
