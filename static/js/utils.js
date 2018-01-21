import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

////////////////////////////////Event Listeners//////////////////////////////

export function onWindowResize(canvasWidth, canvasHeight, renderer, camera) {

  canvasWidth = 3*window.innerWidth/4;
  canvasHeight = window.innerHeight;

  renderer.setSize(canvasWidth, canvasHeight);
  camera.aspect = canvasWidth/canvasHeight;
  camera.updateProjectionMatrix();

};

export function withControls(camera, renderer) {
  return new OrbitControls(camera, renderer.domElement);
}

///////////////////////////////Initializers//////////////////////////////////

export function setRenderer(id, backgroundColor, width, height) {

  const renderer = new THREE.WebGLRenderer({canvas: document.getElementById(id), antialias: true});
  renderer.setClearColor(backgroundColor);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  return renderer;
}

export function setCamera(width, height, offset) {

  const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
  camera.position.z = offset;

  return camera;
}

/////////////////////////////Styling//////////////////////////////////////

export function colorNodes(n) {

  var mod = n%7;

  var color = [];

  switch(mod) {

  case 0:

    color = 0xff0000;
    break;

  case 1:

    color = 0xff7200;
    break;

  case 2:

    color = 0xf2ff00;
    break;

  case 3:

    color = 0x5dff00;
    break;

  case 4:

    color = 0x1000ff;
    break;

  case 5:

    color = 0xff00e1;
    break;

  case 6:

    color = 0xffffff;
    break;

  }

  return color;

}

/////////////////////////////WebGL Helper Functions//////////////////////////////////////

export function phi(t, n) {
  
  var p = 2*Math.PI*t/n;

  return p;

}

export function polygon(center, radius, numVertices, theta, color) {

  let vertices = new Float32Array(numVertices*3);

  for (var i = 0; i < numVertices; ++i) {

    vertices[3*i + 0] = radius*Math.sin(phi(i, numVertices) + theta) + center[0];
    vertices[3*i + 1] = radius*Math.cos(phi(i, numVertices) + theta) + center[1];
    vertices[3*i + 2] = 0;
    
  }

  this.vertices = vertices;
  this.center = center;
  this.radius = radius;
  this.numVertices = numVertices;
  this.theta = theta;

  let geometry = new THREE.BufferGeometry();

  geometry.addAttribute(
    'position',
    new THREE.BufferAttribute(vertices, 3)
  );

  let material = new THREE.LineBasicMaterial( 
    {
      color: color
    } 
  );
  
  this.line = new THREE.LineLoop(geometry, material);

}

export function offsetStar(numVertices, center, radius, theta, offset, color) {

  let vertices = new Float32Array(numVertices*3);

  for (var i = 0; i < numVertices; ++i) {

    vertices[3*i + 0] = radius*Math.sin(phi((i*(1 + offset))%numVertices, numVertices) + theta) + center[0];
    vertices[3*i + 1] = radius*Math.cos(phi((i*(1 + offset))%numVertices, numVertices) + theta) + center[1];
    vertices[3*i + 2] = 0;

  }

  this.vertices = vertices;
  this.center = center;
  this.radius = radius;
  this.numVertices = numVertices;
  this.theta = theta;

  let geometry = new THREE.BufferGeometry();

  geometry.addAttribute(
    'position',
    new THREE.BufferAttribute(vertices, 3)
  );

  let material = new THREE.LineBasicMaterial( 
    {
      color: color
    } 
  );
  
  this.line = new THREE.LineLoop(geometry, material);

}