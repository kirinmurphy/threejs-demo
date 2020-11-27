import * as THREE from '../lib/three.module.js';

import { getScreenAspectRatio } from './getScreenAspectRatio.js'

export function getDefaultCamera ({ canvas, fov, nearStart, farStart }) {
  const cameraProps = [fov, getScreenAspectRatio(canvas), nearStart, farStart];
  const camera = new THREE.PerspectiveCamera(...cameraProps);
  camera.updateProjectionMatrix();
  return camera;
}
