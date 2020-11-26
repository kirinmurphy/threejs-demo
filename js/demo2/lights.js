import * as THREE from '../utils/three.module.js';

export function getMainLight () {
  const color = 0xFFFFFF;
  const intensity = 3;
  return new THREE.PointLight(color, intensity);
}
