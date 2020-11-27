import { getUniverse } from '../utils/getUniverse.js';
import { startUniverse } from '../utils/startUniverse.js';

import { ANIMATE_MULTIPLIER, ORBIT_CAMERA_PROPS, ORBIT_LIGHT_PROPS } from './defaults.js';
import { addPlanetarySystem } from './cosmic-bodies-create.js';
import { animateElements } from './cosmic-bodies-animate.js';

const universeProps = getUniverse('#canvas', ORBIT_LIGHT_PROPS, ORBIT_CAMERA_PROPS);
const { renderer, universe, camera } = universeProps;

camera.position.set(0, 150, 0);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

addPlanetarySystem(universe);

startUniverse({
  renderer,
  camera,
  universe,
  timeMultiplier: ANIMATE_MULTIPLIER,
  animateAction: animateElements
});
