import { startUniverse } from './startUniverse.js';
import { getUniverse } from './getUniverse.js';

export function buildUniverse (props) {
  const { selector, config, setupUniverse, animateUniverse } = props;
  const universe = getUniverse(selector, config);
  setupUniverse(universe);
  startUniverse({ ...universe, animateUniverse });
}
