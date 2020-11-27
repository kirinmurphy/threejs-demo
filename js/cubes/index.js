import { buildUniverse } from '../utils/universe/buildUniverse.js';

import { cubesUniverseDefaults } from './defaults.js';
import { setupCubes } from './setup.js';
import { animateCubes } from './animate.js';

buildUniverse({ 
  selector: '#cubes-explosion', 
  config: cubesUniverseDefaults,
  setupUniverse: setupCubes,
  animateUniverse: animateCubes
});
