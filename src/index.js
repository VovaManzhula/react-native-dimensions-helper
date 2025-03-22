import { Dimensions } from 'react-native';

const createCachedFunction = (calculateFn) => {
  const cache = new Map();

  return (percent) => {
    if (percent < 0.1 || percent > 500) {
      throw new Error('Percent must be between 0.1 and 500');
    }

    if (cache.has(percent)) {
      return cache.get(percent);
    }

    const result = Math.round(calculateFn(percent));
    cache.set(percent, result);
    return result;
  };
};

let windowDimensions = Dimensions.get('window');
let screenDimensions = Dimensions.get('screen');

let windowHeight = windowDimensions.height;
let windowWidth = windowDimensions.width;
let screenHeight = screenDimensions.height;
let screenWidth = screenDimensions.width;

const updateDimensions = () => {
  const newWindowDimensions = Dimensions.get('window');
  const newScreenDimensions = Dimensions.get('screen');

  windowDimensions = newWindowDimensions;
  screenDimensions = newScreenDimensions;

  windowHeight = windowDimensions.height;
  windowWidth = windowDimensions.width;
  screenHeight = screenDimensions.height;
  screenWidth = screenDimensions.width;
};

Dimensions.addEventListener('change', updateDimensions);

const calculateWH = (percent) => (windowHeight * percent) / 100;
const calculateWW = (percent) => (windowWidth * percent) / 100;
const calculateSH = (percent) => (screenHeight * percent) / 100;
const calculateSW = (percent) => (screenWidth * percent) / 100;

export const wh = createCachedFunction(calculateWH);
export const ww = createCachedFunction(calculateWW);
export const sh = createCachedFunction(calculateSH);
export const sw = createCachedFunction(calculateSW);
