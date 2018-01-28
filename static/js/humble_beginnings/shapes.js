import * as THREE from 'three';

import {

  phi,
  offsetStar,
  polygon

} from '../utils'

export function generateTriangle(scene) {

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

  scene.add(mesh);

}

export function generateRectangle(scene) {

  let geometry = new THREE.BufferGeometry();

  let vertices = new Float32Array([
    -0.5, -0.5, 0.0,
     0.5, -0.5, 0.0,
     0.5,  0.5, 0.0,
    -0.5,  0.5, 0.0,
    -0.5, -0.5, 0.0,
     0.5,  0.5, 0.0
  ]);

  let colors = new Float32Array([
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 
    0.0, 0.0, 1.0,
    0.0, 1.0, 1.0,
    1.0, 0.0, 0.0, 
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

  let material = new THREE.MeshBasicMaterial(
    {
      vertexColors: THREE.VertexColors, 
      wireframe: false
    }
  );

  let mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

export function generateCube(scene) {
  
  let geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe: false});
  let mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

export function generateCircle(scene, radius, numSpokes) {
  
  let geometry = new THREE.CircleBufferGeometry(radius, numSpokes);
  let material = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe: true});
  let mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

export function generateClam(scene, numRidges, radius) {

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

  scene.add(line);

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

    scene.add(line);

  }

}

export function generatePearl(scene, numRidges, radius) {

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

  scene.add(line);

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

    scene.add(line);

  }

  let pearlGeometry = new THREE.CircleBufferGeometry(radius/10, 32);

  let pearlMaterial = new THREE.MeshBasicMaterial(
    {
      color: 0xffffff
    }
  );

  let pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);

  scene.add(pearl);

}

export function generatePolygon(scene) {

  let x = [0, 0];
  let r = 0.5;
  let n = 6;
  let t = 0;
  let col = 0xf00a00;

  let poly = new polygon(x, r, n, t, col);

  scene.add(poly.line);

}

export function generateSacredCircles(scene, numCircles, numLayers, circleRadius, globalRadius, color) {

  let center = [0, 0];

  for (let i = 0; i < numCircles; ++i) {

    for (let j = 0; j < numLayers; ++j) {

      let x = center;

      x[0] = globalRadius*(Math.cos(phi(i, numCircles)) + Math.sin(phi(j, numLayers)));
      x[1] = globalRadius*(Math.sin(phi(i, numCircles)) + Math.cos(phi(j, numLayers)));

      let poly = new polygon(x, circleRadius, 100, 0, color);

      scene.add(poly.line);

    }

  }

}

export function generateOffsetStar(scene, numVertices, radius, offset, color) {

  let x = [0, 0];
  let star = new offsetStar(numVertices, x, radius, 0, offset, color);
  
  scene.add(star.line);

}

export function updatePolygon(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z += t;
  }

}
