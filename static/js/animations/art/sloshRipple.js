import * as THREE from 'three';

import Animation from '../animation';

import { 

	colorNodes,
	phi,
	polygon

} from '../../utils';

export default class SloshRipple extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numPolygons, radius) {

    let x = [0, 0];

    for (let i = 1; i <= numPolygons; ++i) {

      let r = radius*i/10;
      let poly = new polygon(x, r, 100, 0, colorNodes(i-1));
      
      this.scene.add(poly.line);
    
    }

  }

  update(t) {

    for (let i = 0; i < this.scene.children.length; ++i) {
      this.scene.children[i].scale.set(Math.cos(phi(i, 100) + t/100), Math.cos(phi(i, 100) + t/100), 1);
    }

  }
  
}