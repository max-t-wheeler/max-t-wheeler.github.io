import * as THREE from 'three';

import Animation from '../animation';

import { 

	polygon

} from '../../utils';

export default class Polygon extends Animation {

	constructor(scene, animation) {

		super(scene, animation);

	}

	draw() {

	  let x = [0, 0];
	  let r = 0.5;
	  let n = 6;
	  let t = 0;
	  let col = 0xf00a00;

	  let poly = new polygon(x, r, n, t, col);

	  this.scene.add(poly.line);

	}

	update(t) {

	  for (let i = 0; i < this.scene.children.length; ++i) {
	    this.scene.children[i].rotation.z += 1;
	  }

	}
	
}