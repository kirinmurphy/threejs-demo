const RANDOM_COLOR_RANGE = 80;
const RANDOM_COLOR_START_OFFSET = 60;

export function getRandomRGB () {
  const randomR = getColorValue();
  const randomG = getColorValue();
  const randomB = getColorValue();
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
  
function getColorValue (
  range = RANDOM_COLOR_RANGE, 
  offset = RANDOM_COLOR_START_OFFSET) {
    
  // range + offset must be less than 255
  return Math.floor(Math.random() * range + offset);
}
