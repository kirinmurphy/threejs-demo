import { getUniverse } from '../utils/getUniverse.js';
import { startUniverse } from '../utils/startUniverse.js';

import { CUBES_CAMERA_PROPS, CUBES_LIGHT_PROPS } from './defaults.js';
import { addCubesToScene } from './cubes-create.js';
import { animateCubes } from './cubes-animate.js';

const universeProps = getUniverse('#canvas', CUBES_LIGHT_PROPS, CUBES_CAMERA_PROPS);
const { renderer, universe, camera } = universeProps;

camera.position.z = CUBES_CAMERA_PROPS.position?.z;

const cubes = [];
addCubesToScene(universe, cubes);

startUniverse({
  renderer,
  camera,
  universe,
  timeMultiplier: 0.001,
  animateAction: time => animateCubes(cubes, time)
});
