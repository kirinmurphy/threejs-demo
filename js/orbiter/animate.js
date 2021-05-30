import { cosmicCollection } from './create.js';

export function animateOrbiter (time) {
  cosmicCollection.forEach((body, index) => {
    body.rotation.z = time;
  });
}