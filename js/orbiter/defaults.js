export const orbitUniverseDefaults = {
  cameraProps: {
    fov: 50,
    nearStart: 0.1,
    farStart: 1000
  },
  lightProps: {
    color: 0xFFFFFF,
    intensity: 3
  },
  accelerator: 3
};

export const moonProps = {
  color: 0x226688,
  emissive: 0x112244,
  radius: 1.5,
  offsetFromParent: 4
};

export const earthProps = {
  color: 0x2233FF,
  emissive: 0x112244,
  radius: 4,
  offsetFromParent: 60,
  orbiters: [moonProps],
  segments: 20
};

export const sunProps = {
  color: null,
  emissive: 0xFFFF99,
  radius: 7,
  orbiters: [earthProps],
  segments: 50
};
