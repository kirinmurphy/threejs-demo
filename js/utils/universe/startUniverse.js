import { optimizeScreenRender } from './optimizeScreenRender.js';

export function startUniverse (props) {
  const { 
    config,
    renderer, 
    camera, 
    scene, 
    animateUniverse 
  } = props;
  
  window.requestAnimationFrame(render);

  function render(time) {
    console.log('time', time);
    const animateSpeed = time * 0.001 * config.accelerator;
    optimizeScreenRender(renderer, camera);
    animateUniverse(animateSpeed);
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  }  
}
