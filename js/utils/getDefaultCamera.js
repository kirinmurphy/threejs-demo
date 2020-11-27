import * as THREE from '../utils/lib/three.module.js';

import { getScreenAspectRatio } from '../utils/getScreenAspectRatio.js'

export function getDefaultCamera ({ canvas, fov, nearStart, farStart }) {
  const camera = new THREE.PerspectiveCamera(
    fov, 
    getScreenAspectRatio(canvas), 
    nearStart, 
    farStart
  );
  camera.updateProjectionMatrix();
  return camera;
}
