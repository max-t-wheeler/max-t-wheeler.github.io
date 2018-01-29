import * as THREE from 'three';

import Animation from '../animation';

import { 

	phi,
	polygon

} from '../../utils';

export default class SacredCircles extends Animation {

	constructor(scene, animation) {
		super(scene, animation);
	}

	draw(numLayers, numCircles, circleRadius, globalRadius, color) {

	  let center = [0, 0];

	  for (let i = 0; i < numCircles; ++i) {

	    for (let j = 0; j < numLayers; ++j) {

	      let x = center;

	      x[0] = globalRadius*(Math.cos(phi(i, numCircles)) + Math.sin(phi(j, numLayers)));
	      x[1] = globalRadius*(Math.sin(phi(i, numCircles)) + Math.cos(phi(j, numLayers)));

	      let poly = new polygon(x, circleRadius, 100, 0, color);

	      this.scene.add(poly.line);

	    }

	  }

	}
	
}