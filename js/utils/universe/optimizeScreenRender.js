import { getScreenAspectRatio } from "./getScreenAspectRatio.js";

export function optimizeScreenRender (renderer, camera) {
  if ( !needsToResize(renderer) ) { return; }
  const { width, height } = getScreenWidth(renderer);
  renderer.setSize(width, height, false);
  const canvas = renderer.domElement;
  camera.aspect = getScreenAspectRatio(canvas);
  camera.updateProjectionMatrix();
}

function needsToResize (renderer) {
  const canvas = renderer.domElement;
  const { width, height } = getScreenWidth(renderer);
  const needResize = canvas.width !== width || canvas.height !==height;
  return needResize;
}

function getScreenWidth (renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  return { width, height };
}
