import * as THREE from 'three';

import Animation from '../animation';

export default class Cube extends Animation { 

	constructor(scene, animation) {

		super(scene, animation);

	}

	draw() {

	  let geometry = new THREE.BoxBufferGeometry(1, 1, 1);
	  let material = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe: false});
	  let mesh = new THREE.Mesh(geometry, material);

	  this.scene.add(mesh);

	}

}
