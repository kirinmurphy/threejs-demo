import * as THREE from '../utils/lib/three.module.js';

import { getRandomRGB } from '../utils/getRandomRGB.js';

import { 
  CUBE_DEPTH, 
  CUBE_HEIGHT, 
  CUBE_CREATION_INTERVAL,
  CUBE_STARTING_POSITION, 
  CUBE_WIDTH,
  CUBES_MAX_COUNT
} from './defaults.js';

export const cubes = [];

export function addCubesToScene (scene) {
  if ( cubes.length === CUBES_MAX_COUNT ) { return; }
  const newCube = getCube(getRandomRGB(), CUBE_STARTING_POSITION);
  cubes.push(newCube);
  scene.add(newCube);
  setTimeout(() => addCubesToScene(scene, cubes), CUBE_CREATION_INTERVAL);
}

const boxDimensions = [CUBE_WIDTH, CUBE_HEIGHT, CUBE_DEPTH];
const geometry = new THREE.BoxGeometry(...boxDimensions);  

function getCube (color, position) {
  const material = new THREE.MeshPhongMaterial({color});
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = position[0];
  cube.position.y = position[1];
  return cube;
}
