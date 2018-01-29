import * as THREE from 'three';

import Animation from '../animation';

import { 

	colorNodes

} from '../../utils';

export default class Collide0scope extends Animation {

  constructor(scene, animation) {

    super(scene, animation);

  }

  draw(numCircles) {

    for (let i = 0; i < numCircles; ++i) {
      
      let geometry = new THREE.CircleBufferGeometry(1+(i/(10*numCircles)), 10);
      let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: true});
      let mesh = new THREE.Mesh(geometry, material);

      this.scene.add(mesh);

    }

  }

  update(t) {

    for (let i = 0; i < this.scene.children.length; ++i) {

      let r = 1+(i/5);

      if (i%2 == 0) {

        this.scene.children[i].position.z += (0.005 + (i/1000))*Math.cos(t);
        this.scene.children[i].rotation.z -= 0.01*Math.cos(t);

      }
      else {

        this.scene.children[i].position.z -= (0.005 + (i/1000))*Math.cos(t);
        this.scene.children[i].rotation.z += 0.01*Math.sin(t);

      }

    }

  }

}