import { addPlanetarySystem } from "./create.js";


export function setupOrbiter ({ scene, camera }) {
  camera.position.set(120, 0, 0);
  camera.up.set(-.5, -.5, 2);
  camera.lookAt(0, 0, 5);
  
  addPlanetarySystem(scene);
}
