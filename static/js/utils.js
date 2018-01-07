
////////////////////////////////Event Listeners//////////////////////////////

function onWindowResize() {

  canvasWidth = 3*window.innerWidth/4;
  canvasHeight = window.innerHeight;

  renderer.setSize(canvasWidth, canvasHeight);
  camera.aspect = canvasWidth/canvasHeight;
  camera.updateProjectionMatrix();

};

function withControls() {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function indicateSelection(listId) {
  var list = document.getElementById(listId);
  for (var i = 0; i < list.length; ++i) {
    console.log(list.children[i].val());
  }
}

///////////////////////////////Initializers//////////////////////////////////

function setRenderer(id, backgroundColor, width, height) {

  renderer = new THREE.WebGLRenderer({canvas: document.getElementById(id), antialias: true});
  renderer.setClearColor(backgroundColor);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

}

function setCamera(width, height, offset) {

  camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
  camera.position.z = offset;

}

/////////////////////////////Styling//////////////////////////////////////

function colorNodes(n) {

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