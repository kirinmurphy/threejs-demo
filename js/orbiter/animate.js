import { cosmicCollection } from './create.js';

export function animateOrbiter (time) {
  cosmicCollection.forEach((obj) => {
    obj.rotation.z = time;
  });
}