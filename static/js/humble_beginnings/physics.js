import * as THREE from 'three';

export function renderSineWave(scene, numPoints) {

  let node_x = [];
  let node_y = [];

  for (let i = -numPoints; i <= numPoints; ++i) {
      node_x.push(i/1000);
      node_y.push(Math.sin(10*node_x[i+numPoints])/2);
  }

  let vertices = new Float32Array(node_x.length*3);

  for (let i = 0; i < vertices.length; ++i) {
    if (i%3 === 0) {
      vertices[i] = node_x[i];
    }
    else if (i%3 === 1) {
      vertices[i] = node_y[i];
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

  scene.add(line);

}

export function generateSineWave(scene, numPoints) {

  let node_x = [];
  let node_y = [];

  for (let i = -numPoints; i <= numPoints; ++i) {
      node_x.push(i/1000);
      node_y.push(Math.sin(10*node_x[i+numPoints])/2);
  }

  let vertices = new Float32Array(node_x.length*3);

  for (let i = 0; i < vertices.length; ++i) {
    if (i%3 === 0) {
      vertices[i] = node_x[i];
    }
    else if (i%3 === 1) {
      vertices[i] = node_y[i];
    }
    else if (i%3 === 2) {
      vertices[i] = 0;
    }
  }
 
  for (let i = 0; i < node_x.length-1; ++i) {
    let endpoints = new Float32Array(6);
    endpoints[0] = vertices[(3*i) + 0];
    endpoints[1] = vertices[(3*i) + 1];
    endpoints[2] = vertices[(3*i) + 2];
    endpoints[3] = vertices[(3*(i+1)) + 0];
    endpoints[4] = vertices[(3*(i+1)) + 1];
    endpoints[5] = vertices[(3*(i+1)) + 2];

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

    scene.add(line);
  }

}

export function updateSineWave(scene, numPoints, t) {

  //console.log(Math.sin(t));

  for (let i = 0; i < numPoints; ++i) {

    //console.log(scene.children[i].geometry.attributes.position.array[1]);
    //amplitude mod

    //console.log(scene.children[i].matrixWorld);
    //scene.children[i].position.x += 0.01*Math.cos(t);
      
    //scene.children[i].matrixWorld.scale(Math.sin(t));
    //scene.children[i].matrixWorld.makeRotationZ(t);
    //scene.children[i].updateMatrix();
    
    node_y[i] *= 0.001*Math.sin(i*t/numPoints);
    scene.children[i].updateMatrix();
    //scene.children[i].position.y += 0.001*Math.sin(i*t/numPoints)*Math.cos(2*i*t/numPoints);
    
    //scene.children[i].geometry.attributes.position.array[1] *= 0.0001*Math.sin(t);
    //scene.children[i].geometry.attributes.position.array[4] *= 0.0001*Math.sin(t);

  }

}