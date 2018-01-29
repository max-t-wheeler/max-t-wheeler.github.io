import * as THREE from 'three';

import Animation from '../animation';

import { 

	colorNodes

} from '../../utils';

export default class Pinwheel extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numPolygons, numFaces) {

    for (let i = 2*numPolygons; i >= 1; i--) {
      
      let geometry = new THREE.CircleBufferGeometry((20/(2*numPolygons-(i/2)+1)), numFaces);
      let material = new THREE.MeshBasicMaterial( {color: colorNodes(i+1), wireframe: false});
      let mesh = new THREE.Mesh(geometry, material);

      this.scene.add(mesh);

    }

  }

  update(t) {

    for (let i = 0; i < this.scene.children.length; ++i) {
      this.scene.children[i].rotation.z = 2*t*((this.scene.children.length/2)-i)*Math.PI*i/160;
    }

  }
  
}