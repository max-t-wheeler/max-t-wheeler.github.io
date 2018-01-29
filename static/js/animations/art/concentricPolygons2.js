import * as THREE from 'three';

import Animation from '../animation';

import { 

	polygon

} from '../../utils';

export default class ConcentricPolygons2 extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numPolygons, radius) {

    let x = [0, 0];
    let t = 0;
    let col = 0xf00a00;

    for (let i = 1; i <= numPolygons; ++i) {

      let r = radius*i/numPolygons;
      let poly = new polygon(x, r, i+2, t, col);
      
      this.scene.add(poly.line);
    
    }

  }

  update(t) {

    for (let i = 0; i < this.scene.children.length; ++i) {

      if (i % 2 === 0) {
        this.scene.children[i].rotation.z = Math.sin(i)*t/2;
      }
      else {
        this.scene.children[i].rotation.z = Math.sin(-i)*t/2;
      }

    }

  }
  
}