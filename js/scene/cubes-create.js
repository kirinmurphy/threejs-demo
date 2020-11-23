import * as THREE from '../utils/three.module.js';

import { getRandomRGB } from '../utils/getRandomRGB.js';

import { 
  CUBE_DEPTH, 
  CUBE_HEIGHT, 
  CUBE_CREATION_INTERVAL,
  CUBE_STARTING_POSITION, 
  CUBE_WIDTH 
} from './defaults.js';

const boxDimensions = [CUBE_WIDTH, CUBE_HEIGHT, CUBE_DEPTH];
const geometry = new THREE.BoxGeometry(...boxDimensions);  

export function addCubesToScene (scene, cubes) {
  const newCube = getCube(geometry, getRandomRGB(), CUBE_STARTING_POSITION);
  cubes.push(newCube);
  scene.add(newCube);
  setTimeout(() => addCubesToScene(scene, cubes), CUBE_CREATION_INTERVAL);
}

function getCube (geometry, color, position) {
  const material = new THREE.MeshPhongMaterial({color});
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = position[0];
  cube.position.y = position[1];
  return cube;
}
