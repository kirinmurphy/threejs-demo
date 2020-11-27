export const cubesUniverseDefaults = {
  lightProps: {
    color: 0xFFFFFF,
    intensity: 1.5,
    position: [-1, 2, 4]
  },
  cameraProps: {
    fov: 160,
    nearStart: 0.1,
    farStart: 5,
    position: { z: 2 }
  },
  accelerator: 7
};

export const CUBES_MAX_COUNT = 500;
export const CUBE_CREATION_INTERVAL = 1000;
export const CUBE_WIDTH = .5;
export const CUBE_HEIGHT = .5;
export const CUBE_DEPTH = .5;
export const CUBE_STARTING_POSITION = [0, 0];

export const CUBE_MOVE_X = .03;
export const CUBE_MOVE_Y = .015;
export const CUBE_MOVE_Z = .01;
export const CUBE_X_THRESHOLD_BEFORE_Z_MOVE = 1.5;
