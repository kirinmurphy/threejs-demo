import { addPlanetarySystem } from "./create.js";


export function setupOrbiter ({ scene, camera }) {
  camera.position.set(0, 150, 0);
  camera.up.set(-.25, 0, 1);
  camera.lookAt(0, 0, 0);
  
  addPlanetarySystem(scene);
}