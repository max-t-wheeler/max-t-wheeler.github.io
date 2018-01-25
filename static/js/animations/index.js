import Pinwheel from './pinwheel';

const ANIMATION_MAP = {
  'pinwheel': Pinwheel
}

export function createAnimation(animationName, scene) {
  if (ANIMATION_MAP[animationName]) {
    console.log(animationName);
    return new ANIMATION_MAP[animationName](scene);
  }
}
