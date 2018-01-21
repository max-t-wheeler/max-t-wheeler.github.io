import * as THREE from 'three';

var geometry, material, mesh;

var vertices;

export function generateSineWave(scene, numPoints) {

  var node_x = [];
  var node_y = [];


  for (var i = -numPoints; i <= numPoints; ++i) {
      node_x.push(i/1000);
      node_y.push(Math.sin(10*node_x[i+numPoints])/2);
  }

  vertices = new Float32Array(node_x.length*3);

  for (var i = 0; i < vertices.length; ++i) {
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

  geometry = new THREE.BufferGeometry();

  geometry.addAttribute(
    'position',
    new THREE.BufferAttribute(vertices, 3)
  );

  material = new THREE.LineBasicMaterial(
    {
      color: 0x00ffff
    }
  );

  let line = new THREE.Line(geometry, material);

  scene.add(line);

}