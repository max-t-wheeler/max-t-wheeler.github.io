import * as THREE from 'three';

import Animation from '../animation';

export default class Clam extends Animation {

	constructor(scene, animation) {

		super(scene, animation);

	}

	draw(numRidges, radius) {

	  let phi = [];

	  for (let i = 0; i <= numRidges; ++i) {
	    phi.push(2*Math.PI*i/numRidges);
	  }

	  let vertices = new Float32Array(phi.length*3);

	  for (let i = 0; i < vertices.length; ++i) {

	    if (i%3 === 0) {
	      vertices[i] = radius*Math.sqrt(1 - Math.pow(Math.cos(phi[i]),2))*Math.cos(phi[i]);
	    }
	    else if (i%3 === 1) {
	      vertices[i] = radius*Math.sqrt(1 - Math.pow(Math.cos(phi[i]),2))*Math.sin(phi[i]);
	    }
	    else if (i%3 === 2) {
	      vertices[i] = 0;
	    }

	  }

	  let geometry = new THREE.BufferGeometry();

	  geometry.addAttribute(
	    'position', 
	    new THREE.BufferAttribute(vertices, 3)
	  );

	  let material = new THREE.LineBasicMaterial(
	    {
	      color: 0x00ffff
	    }
	  );

	  let line = new THREE.Line(geometry, material);

	  this.scene.add(line);

	  for (let i = 0; i < numRidges; ++i) {

	    let endpoints = new Float32Array(6);

	    endpoints[0] = 0;
	    endpoints[1] = 0;
	    endpoints[2] = 0;
	    endpoints[3] = vertices[(3*i) + 0];
	    endpoints[4] = vertices[(3*i) + 1];
	    endpoints[5] = vertices[(3*i) + 2];

	    let geometry = new THREE.BufferGeometry();

	    geometry.addAttribute(
	      'position',
	      new THREE.BufferAttribute(endpoints, 3)
	    );

	    let material = new THREE.LineBasicMaterial(
	      {
	        color: 0x00ffff
	      }
	    );

	    let line = new THREE.Line(geometry, material);

	    this.scene.add(line);

  		}

	}
	
}