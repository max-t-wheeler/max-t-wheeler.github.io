import * as THREE from 'three';

import Animation from '../animation';

import { 

	colorNodes

} from '../../utils';

export default class Blanket extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numPolygons, numFaces) {

    for (let i = 2*numPolygons; i >= 1; i--) {
      
      let geometry = new THREE.CircleBufferGeometry((10/(2*numPolygons-i+1)), numFaces);
      let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
      let mesh = new THREE.Mesh(geometry, material);

      mesh.rotateZ(Math.PI*i/4);

      this.scene.add(mesh);

    }

  }
  
}