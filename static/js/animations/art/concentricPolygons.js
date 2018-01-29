import * as THREE from 'three';

import Animation from '../animation';

import { 

	colorNodes

} from '../../utils';

export default class ConcentricPolygons extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numPolygons, numFaces) {

    for (let i = numPolygons; i >= 1; i--) {
    
      let geometry = new THREE.CircleBufferGeometry((10/(numPolygons-i+1)), numFaces);
      let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
      let mesh = new THREE.Mesh(geometry, material);

      this.scene.add(mesh);

    }

  }

  update(t) {

    for (let i = 0; i < this.scene.children.length; ++i) {
      this.scene.children[i].rotation.z = 2*(this.scene.children.length-i)*Math.sin(t/4);
    }

  }
  
}