var geometry, material, mesh;

function generateTriangle() {

  geometry = new THREE.BufferGeometry();

  var vertices = new Float32Array([
    -0.5, -0.5, 0.0,
     0.5, -0.5, 0.0,
     0.0,  0.5, 0.0
  ]);

  var colors = new Float32Array([
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

  material = new THREE.LineBasicMaterial(
    {
      vertexColors: THREE.VertexColors
    }
  );

  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

function generateRectangle() {

  geometry = new THREE.BufferGeometry();

  var vertices = new Float32Array([
    -0.5, -0.5, 0.0,
     0.5, -0.5, 0.0,
     0.5,  0.5, 0.0,
    -0.5,  0.5, 0.0,
    -0.5, -0.5, 0.0,
     0.5,  0.5, 0.0
  ]);

  var colors = new Float32Array([
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

  material = new THREE.MeshBasicMaterial(
    {
      vertexColors: THREE.VertexColors, 
      wireframe: false
    }
  );

  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

function generateCube() {
  
  geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe: false});
  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

function generateCircle(radius, numSpokes) {
  
  geometry = new THREE.CircleBufferGeometry(radius, numSpokes);
  material = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe: true});
  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

}

function generateClam(numRidges, radius) {

  var phi = [];

  for (var i = 0; i <= numRidges; ++i) {
    phi.push(2*Math.PI*i/numRidges);
  }

  var vertices = new Float32Array(phi.length*3);

  for (var i = 0; i < vertices.length; ++i) {
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

  line = new THREE.Line(geometry, material);

  scene.add(line);

  for (var i = 0; i < numRidges; ++i) {
    var endpoints = new Float32Array(6);
    endpoints[0] = 0;
    endpoints[1] = 0;
    endpoints[2] = 0;
    endpoints[3] = vertices[(3*i) + 0];
    endpoints[4] = vertices[(3*i) + 1];
    endpoints[5] = vertices[(3*i) + 2];

    var geometry = new THREE.BufferGeometry();

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

function generatePearl(numRidges, radius) {

  var phi = [];

  for (var i = 0; i <= numRidges; ++i) {
    phi.push(2*Math.PI*i/numRidges);
  }

  var vertices = new Float32Array(phi.length*3);

  for (var i = 0; i < vertices.length; ++i) {
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

  line = new THREE.Line(geometry, material);

  scene.add(line);

  for (var i = 0; i < numRidges; ++i) {
    var endpoints = new Float32Array(6);
    endpoints[0] = 0;
    endpoints[1] = 0;
    endpoints[2] = 0;
    endpoints[3] = vertices[(3*i) + 0];
    endpoints[4] = vertices[(3*i) + 1];
    endpoints[5] = vertices[(3*i) + 2];

    var geometry = new THREE.BufferGeometry();

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

  var pearlGeometry = new THREE.CircleBufferGeometry(radius/10, 32);

  var pearlMaterial = new THREE.MeshBasicMaterial(
    {
      color: 0xffffff
    }
  );

  var pearl = new THREE.Mesh(pearlGeometry, pearlMaterial);

  scene.add(pearl);

}

function generatePolygon() {

  var x = [0, 0];
  var r = 0.5;
  var n = 6;
  var t = 0;
  var col = 0xf00a00;


  var poly = new polygon(x, r, n, t, col);

  scene.add(poly.line);

}

function generateSacredCircles(numCircles, radius, color) {

  var center = [0, 0];

  for (var i = 0; i < numCircles; ++i) {

    var x = center;

    x[0] = radius*Math.cos(phi(i, numCircles));
    x[1] = radius*Math.sin(phi(i, numCircles));

    poly = new polygon(x, radius, 100, 0, color);

    scene.add(poly.line);

  }

}

function generateOffsetStar(numVertices, radius, offset, color) {

  var x = [0, 0];

  var star = new offsetStar(numVertices, x, radius, 0, offset, color);
  scene.add(star.line);


}

function updatePolygon(t) {

  for (var i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z += t;
  }

}
