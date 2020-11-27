import { addCubesToScene } from './create.js';

export function setupCubes ({ scene, camera, config }) {
  camera.position.z = config.cameraProps.position?.z;
  addCubesToScene(scene);
}