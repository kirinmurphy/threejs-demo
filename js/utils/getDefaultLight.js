import * as THREE from '../utils/lib/three.module.js';

export function getDefaultLight ({ color, intensity, position }) {
  const light = new THREE.PointLight(color, intensity);
  if ( position ) { light.position.set(...position); }
  return light;
};