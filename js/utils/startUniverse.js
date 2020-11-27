import { optimizeScreenRender } from './optimizeScreenRender.js';

export function startUniverse (props) {
  const { 
    renderer, 
    camera, 
    universe, 
    timeMultiplier, 
    animateAction 
  } = props;
  
  window.requestAnimationFrame(render);

  function render(time) {
    time *= timeMultiplier;
    optimizeScreenRender(renderer, camera);
    animateAction(time);
    renderer.render(universe, camera);
    window.requestAnimationFrame(render);
  }  
}
