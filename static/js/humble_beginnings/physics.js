var geometry, material, mesh;

var vertices;

var node_x = [];
var node_y = [];

function generateSineWave(numPoints) {

  for (var i = -numPoints; i <= numPoints; ++i) {
      node_x.push(i/1000);
      node_y.push(Math.sin(10*node_x[i+numPoints])/2);
  }

  console.log(node_x)
  console.log(node_y)

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
 
  for (var i = 0; i < node_x.length-1; ++i) {
    var endpoints = new Float32Array(6);
    endpoints[0] = vertices[(3*i) + 0];
    endpoints[1] = vertices[(3*i) + 1];
    endpoints[2] = vertices[(3*i) + 2];
    endpoints[3] = vertices[(3*(i+1)) + 0];
    endpoints[4] = vertices[(3*(i+1)) + 1];
    endpoints[5] = vertices[(3*(i+1)) + 2];

    geometry = new THREE.BufferGeometry();

    geometry.addAttribute(
      'position',
      new THREE.BufferAttribute(endpoints, 3)
    );

    material = new THREE.LineBasicMaterial(
      {
        color: 0x00ffff
      }
    );

    line = new THREE.Line(geometry, material);

    scene.add(line);
  }

}

function updateSineWave(numPoints, t) {

  for (var i = 0; i < numPoints; ++i) {
    
    node_y[i] *= 0.001*Math.sin(i*t/numPoints);
    scene.children[i].updateMatrix();

  }

}