import * as THREE from '../utils/lib/three.module.js';
import { getDefaultCamera } from './getDefaultCamera.js';
import { getDefaultLight } from './getDefaultLight.js';
 
export function getUniverse (querySelector, lightProps, cameraProps) {
  const canvas = document.querySelector(querySelector);
  const renderer = new THREE.WebGLRenderer({ canvas });
  const universe = new THREE.Scene();  
  const camera = getDefaultCamera({ canvas, ...cameraProps });
  const light = getDefaultLight(lightProps);
  universe.add(light);
  
  return { renderer, universe, light, camera };
}
