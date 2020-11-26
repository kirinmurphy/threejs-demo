import * as THREE from '../utils/three.module.js';

import { optimizeScreenRender } from '../scene/universe.js';

import { getCamera } from './camera.js';
import { getMainLight } from './lights.js';

import { animateElements } from './cosmic-bodies-animate.js';
import { addPlanetarySystem } from './cosmic-bodies-create.js';

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
const camera = getCamera(canvas);
const universe = new THREE.Scene();
const light = getMainLight();

universe.add(light);
addPlanetarySystem(universe);

window.requestAnimationFrame(render);

function render(time) {
  time *= 0.002;
  optimizeScreenRender(renderer, camera);
  animateElements(time);
  renderer.render(universe, camera);
  window.requestAnimationFrame(render);
}
