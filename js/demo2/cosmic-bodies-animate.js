import { cosmicCollection } from './cosmic-bodies.js';

export function animateElements (time) {
  cosmicCollection.forEach((obj) => {
    obj.rotation.y = time;
  });
}