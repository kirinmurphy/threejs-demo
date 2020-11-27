import * as THREE from '../lib/three.module.js';

import { getDefaultCamera } from './getDefaultCamera.js';
import { getDefaultLight } from './getDefaultLight.js';

export function getUniverse (querySelector, config) {
  const { lightProps, cameraProps } = config;
  const canvas = document.querySelector(querySelector);
  const renderer = new THREE.WebGLRenderer({ canvas });
  const scene = new THREE.Scene();  
  const camera = getDefaultCamera({ canvas, ...cameraProps });
  const light = getDefaultLight(lightProps);
  scene.add(light);
  return { config, renderer, scene, camera, light };
}
