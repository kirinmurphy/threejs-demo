export const cosmicCollection = [];

const moonProps = {
  color: 0x226688,
  emissive: 0x112244,
  radius: 1,
  offsetFromParent: 4
}

const earthProps = {
  color: 0x2233FF,
  emissive: 0x112244,
  radius: 4,
  offsetFromParent: 14,
  orbiters: [moonProps]
};

export const sunProps = {
  color: null,
  emissive: 0xDDDD00,
  radius: 8,
  orbiters: [earthProps],
  segments: 20
};
