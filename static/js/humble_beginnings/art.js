var geometry, material, mesh;

function generateCollide0scope(numCircles) {

  for (var i = 0; i < numCircles; ++i) {
    
    geometry = new THREE.CircleBufferGeometry(1+(i/(10*numCircles)), 10);
    material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: true});
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

function generateBlanket(numPolygons, numFaces) {

  for (var i = 2*numPolygons; i >= 1; i--) {
    
    geometry = new THREE.CircleBufferGeometry((10/(2*numPolygons-i+1)), numFaces);
    material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
    mesh = new THREE.Mesh(geometry, material);

    mesh.rotateZ(Math.PI*i/4);

    scene.add(mesh);

  }

}

function generateConcentricPolygons(numPolygons, numFaces) {

  for (var i = numPolygons; i >= 1; i--) {
    
    geometry = new THREE.CircleBufferGeometry((10/(numPolygons-i+1)), numFaces);
    material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

function generateConcentricPolygons2(numPolygons, radius) {

  var x = [0, 0];
  var t = 0;
  var col = 0xf00a00;

  for (var i = 1; i <= numPolygons; ++i) {
    var r = radius*i/numPolygons;
    poly = new polygon(x, r, i+2, t, col);
    scene.add(poly.line);
  }

}

function generatePinwheel(numPolygons, numFaces) {

  for (var i = 2*numPolygons; i >= 1; i--) {
    
    geometry = new THREE.CircleBufferGeometry((20/(2*numPolygons-(i/2)+1)), numFaces);
    material = new THREE.MeshBasicMaterial( {color: colorNodes(i+1), wireframe: false});
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

function generatePolygon() {

  var x = [0, 0];
  var r = 0.5;
  var n = 6;
  var t = 0;
  var col = 0xf00a00;


  poly = new polygon(x, r, n, t, col);

  scene.add(poly.line);

}

function updateCollide0scope(t) {

  for (var i = 0; i < 20; ++i) {
    if (i%2 == 0) {
      scene.children[i].position.z += (0.005 + (i/1000))*Math.cos(t);
      scene.children[i].rotation.z -= 0.01*Math.cos(t);
    }
    else {
      scene.children[i].position.z -= (0.005 + (i/1000))*Math.cos(t);
      scene.children[i].rotation.z += 0.01*Math.sin(t);
    }
  }

}

function updateConcentricPolygons(numPolygons, t) {

  for (var i = 0; i < numPolygons; ++i) {
    scene.children[i].rotation.z = 2*(numPolygons-i)*Math.sin(t/4);
  }

}

function updateConcentricPolygons2(numPolygons, t) {

  for (var i = 0; i < numPolygons; ++i) {
    if (i % 2 === 0) {
      scene.children[i].rotation.z = Math.sin(i)*t/2;
    }
    else {
      scene.children[i].rotation.z = Math.sin(-i)*t/2;
    }
  }

}

function updatePinwheel(numPolygons, t) {

  for (var i = 0; i < 2*numPolygons; ++i) {
    scene.children[i].rotation.z = 2*t*(numPolygons-i)*Math.PI*i/160;
  }

}

function updatePolygon(numPolygons, t) {

  for (var i = 0; i < numPolygons; ++i) {
    scene.children[i].rotation.z += t;
  }

}