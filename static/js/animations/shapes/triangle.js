import * as THREE from 'three';

import Animation from '../animation';

export default class Triangle extends Animation {

	constructor(scene, animation) {

		super(scene, animation);

	}

	draw() {

		  let geometry = new THREE.BufferGeometry();

		  let vertices = new Float32Array([
		    -0.5, -0.5, 0.0,
		     0.5, -0.5, 0.0,
		     0.0,  0.5, 0.0
		  ]);

		  let colors = new Float32Array([
		    1.0, 0.0, 0.0,
		    0.0, 1.0, 0.0, 
		    0.0, 0.0, 1.0
		  ]);

		  geometry.addAttribute(
		    'position', 
		    new THREE.BufferAttribute(vertices, 3)
		  );

		  geometry.addAttribute(
		    'color', 
		    new THREE.BufferAttribute(colors, 3)
		  );

		  let material = new THREE.LineBasicMaterial(
		    {
		      vertexColors: THREE.VertexColors
		    }
		  );

		  let mesh = new THREE.Mesh(geometry, material);

		  this.scene.add(mesh);

	}

}