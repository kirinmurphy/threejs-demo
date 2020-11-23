import * as THREE from '../utils/three.module.js';

import { 
  CAMERA_FAR_START, 
  CAMERA_FOV, 
  CAMERA_NEAR_START, 
  CAMERA_Z_POSITION 
} from './defaults.js';

export function getCamera (canvas) {
  const camera = new THREE.PerspectiveCamera(
    CAMERA_FOV, 
    getScreenAspectRatio(canvas), 
    CAMERA_NEAR_START, 
    CAMERA_FAR_START
  );
  camera.updateProjectionMatrix();
  camera.position.z = CAMERA_Z_POSITION;
  return camera;
}

export function optimizeScreenRender (renderer, camera) {
  if ( !needsToResize(renderer) ) { return; }
  const { width, height } = getScreenWidth(renderer);
  renderer.setSize(width, height, false);
  const canvas = renderer.domElement;
  camera.aspect = getScreenAspectRatio(canvas);
  camera.updateProjectionMatrix();
}

function getScreenAspectRatio (canvas) {
  return canvas.clientWidth / canvas.clientHeight;
}

function needsToResize (renderer) {
  const canvas = renderer.domElement;
  const { width, height } = getScreenWidth(renderer);
  const needResize = canvas.width !== width || canvas.height !==height;
  return needResize;
}

function getScreenWidth (renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  return { width, height };
}
