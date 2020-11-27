import * as THREE from '../utils/lib/three.module.js';

import { cosmicCollection, sunProps } from './cosmic-bodies.js';

export function addPlanetarySystem (universe) {
  addCosmicBodyToCosmicParent(sunProps, universe, cosmicCollection);
}

export function addCosmicBodyToCosmicParent (cosmicBodyProps, cosmicParent, collection, cosmicParentRadius = 0) {
  const { offsetFromParent, radius } = cosmicBodyProps;
  const cosmicBody = getSphere(cosmicBodyProps);

  if ( !!offsetFromParent || offsetFromParent === 0 ) {
    cosmicBody.position.x = offsetFromParent + radius + cosmicParentRadius; 
  }
  cosmicParent.add(cosmicBody);
  collection.push(cosmicBody);  
  cosmicBodyProps.orbiters && cosmicBodyProps.orbiters.map(orbiterProps => {
    addCosmicBodyToCosmicParent(orbiterProps, cosmicBody, collection, cosmicBodyProps.radius);
  });
}

function getSphere (props) {
  const { radius, segments = 6, color, emissive } = props;
  const widthSegments = segments;
  const heightSegments = segments;
  const sphereGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);  
  const material = new THREE.MeshPhongMaterial({ color, emissive });
  return new THREE.Mesh(sphereGeometry, material);
}
