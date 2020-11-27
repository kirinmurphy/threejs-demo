const RANDOM_COLOR_RANGE = 80;
const RANDOM_COLOR_START_OFFSET = 60;

export function getRandomRGB () {
  const randomR = getColorValue();
  const randomG = getColorValue();
  const randomB = getColorValue();
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
  
// range + offset must be <= than 255
function getColorValue (
  range = RANDOM_COLOR_RANGE, 
  offset = RANDOM_COLOR_START_OFFSET) {    
  return Math.floor(Math.random() * range + offset);
}
