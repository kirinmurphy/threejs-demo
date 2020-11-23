import * as THREE from '../utils/three.module.js';

import { getCamera, optimizeScreenRender } from './universe.js';
import { getMainLight } from './lights.js';
import { addCubesToScene } from './cubes-create.js';
import { animateCubes } from './cubes-animate.js';

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});
const camera = getCamera(canvas);
const scene = new THREE.Scene();
const light = getMainLight();
const cubes = [];

scene.add(light);

addCubesToScene(scene, cubes);

window.requestAnimationFrame(render);

function render (time) {
  time *= 0.001;
  optimizeScreenRender(renderer, camera);
  animateCubes(cubes, time);
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
}  
