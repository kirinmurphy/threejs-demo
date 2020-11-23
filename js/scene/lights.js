import * as THREE from '../utils/three.module.js';
import { LIGHT_COLOR, LIGHT_INTENSITY, LIGHT_POSITION } from './defaults.js';

export function getMainLight () {
  const light = new THREE.DirectionalLight(LIGHT_COLOR, LIGHT_INTENSITY);
  light.position.set(...LIGHT_POSITION);
  return light;  
}
