var geometry, material, mesh;

function generateCollide0scope(numCircles) {

  for (var i = 0; i < numCircles; ++i) {
    
    geometry = new THREE.CircleBufferGeometry(1+(i/(10*numCircles)), 10);
    material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: true});
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

function generateGyr0scope(numCircles) {

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

function generateBounceRipple(numPolygons, radius) {

  var x = [0, 0];
  var col = 0xf00a00;

  for (var i = 1; i <= numPolygons; ++i) {
    var r = radius*i/10;
    poly = new polygon(x, r, 100, 0, col);
    scene.add(poly.line);
  }

}

function generateSloshRipple(numPolygons, radius) {

  var x = [0, 0];

  for (var i = 1; i <= numPolygons; ++i) {
    var r = radius*i/10;
    poly = new polygon(x, r, 100, 0, colorNodes(i-1));
    scene.add(poly.line);
  }

}

function generateWrigglingDonut(numNodes, numPolygons, radius) {

  var x = [0, 0];

  for (i = 1; i < numNodes; ++i) {

      for (j = 0; j < numNodes; ++j) {

        x[0] = 0.2*Math.cos(phi(i, numNodes)) + 0.2*Math.cos(phi(j, numNodes))*Math.sin(phi(i, numPolygons));
        x[1] = 0.2*Math.sin(phi(i, numNodes)) + 0.2*Math.sin(phi(j, numNodes))*Math.cos(phi(i, numPolygons));



        poly = new polygon(x, radius, numNodes, 0, colorNodes(1));
        scene.add(poly.line);

    }

  }

}

function updateCollide0scope(t) {

  for (var i = 0; i < scene.children.length; ++i) {

    var r = 1+(i/5);

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

function updateGyr0scope(t) {

  for (var i = 0; i < scene.children.length; ++i) {

    var r = 1;

    if (i%2 == 0) {
      scene.children[i].scale.set(1, r*Math.cos(t/2), 2);
      scene.children[i].rotation.z -= 0.01*Math.cos(t);
    }
    else {
      scene.children[i].scale.set(1, r*Math.sin(t/2), 1);
      scene.children[i].rotation.z += 0.01*Math.sin(t);
    }
  }

}

function updateConcentricPolygons(t) {

  for (var i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z = 2*(scene.children.length-i)*Math.sin(t/4);
  }

}

function updateConcentricPolygons2(t) {

  for (var i = 0; i < scene.children.length; ++i) {
    if (i % 2 === 0) {
      scene.children[i].rotation.z = Math.sin(i)*t/2;
    }
    else {
      scene.children[i].rotation.z = Math.sin(-i)*t/2;
    }
  }

}

function updatePinwheel(numPolygons, t) {

  for (var i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z = 2*t*((scene.children.length/2)-i)*Math.PI*i/160;
  }

}

function updateBounceRipple(t) {

  for (var i = 0; i < scene.children.length; ++i) {

    scene.children[i].scale.set(Math.cos(t)*Math.sin(phi(i, 100) + 2*t), Math.cos(t)*Math.sin(phi(i, 100) + 2*t), 1);

  }

}

function updateSloshRipple(t) {

  for (var i = 0; i < scene.children.length; ++i) {

    scene.children[i].scale.set(Math.cos(phi(i, 100) + t/100), Math.cos(phi(i, 100) + t/100), 1);

  }

}

function updateWrigglingDonut(t) {

  for (var i = 0; i < scene.children.length; ++i) {

    scene.children[i].rotation.z -= 10*t;

  }

}