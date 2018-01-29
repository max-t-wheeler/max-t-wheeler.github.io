import * as THREE from 'three';

import Animation from '../animation';

import { 

	offsetStar

} from '../../utils';

export default class OffsetStar extends Animation {

	constructor(scene, animation) {

		super(scene, animation);

	}

	draw(numVertices, radius, offset, color) {

	  let x = [0, 0];
	  let star = new offsetStar(numVertices, x, radius, 0, offset, color);
	  
	  this.scene.add(star.line);

	}
	
}