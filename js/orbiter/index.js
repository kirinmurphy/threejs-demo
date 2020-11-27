import { buildUniverse } from '../utils/universe/buildUniverse.js';

import { orbitUniverseDefaults } from './defaults.js';
import { setupOrbiter } from './setup.js';
import { animateOrbiter } from './animate.js';

buildUniverse({ 
  selector: '#orbiter', 
  config: orbitUniverseDefaults,
  setupUniverse: setupOrbiter,
  animateUniverse: animateOrbiter
});
