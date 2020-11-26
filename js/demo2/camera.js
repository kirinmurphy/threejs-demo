import * as THREE from '../utils/three.module.js';

import { getScreenAspectRatio } from '../utils/getScreenAspectRatio.js'

export function getCamera (canvas) {
  const fov = 50;
  const aspect = getScreenAspectRatio(canvas)
  const near = 0.1;
  const far = 1000;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 150, 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);
  return camera;  
}