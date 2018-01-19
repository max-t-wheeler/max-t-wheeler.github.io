//////////////////////////////////////////WebGL Initializer/////////////////////////////////////////////
var animationObject;

var camera, renderer, scene;

var controls;

var canvasWidth = 3*window.innerWidth/4;
var canvasHeight = window.innerHeight;

var dt = 0;
var id = null;

function init(animation) {

  animationObject = animation;

  //reset animation//

  if (id !== null) {
    dt = 0;
    controls = null;
    cancelAnimationFrame(id);
  }

  //initalize canvas//

  scene = new THREE.Scene();
  
  setCamera(canvasWidth, canvasHeight, 3);

  setRenderer("animation-canvas", 0x000000, canvasWidth, canvasHeight);

  //resize canvas on window resize//

  window.addEventListener('resize', onWindowResize);

  //add controls to compatible animations//

  if (animation.controllable) {
    withControls();
  }

  //select animation//

  switch(animation.name) {

    case "triangle":
      generateTriangle();
      break;
    case "rectangle":
      generateRectangle();
      break;
    case "cube":
      generateCube();
      break;
    case "circle":
      generateCircle(1, 5);
      break;
    case "clam":
      generateClam(200, 1);
      break;
    case "pearl":
      generatePearl(200, 1);
      break;
    case "polystarter":
      generatePolygon();
      break;
    case "sacred circles":
      generateSacredCircles(16, 1, colorNodes(0));
      break;
    case "star":
      generateOffsetStar(10, 1, 2, colorNodes(0));
      break;
    case "collide":
      generateCollide0scope(20);
      break;
    case "gyro":
      generateGyr0scope(20);
      break;
    case "sine wave":
      generateSineWave(1500);
      break;
    case "concentric polygons":
      generateConcentricPolygons(10, 5);
      break;
    case "concentric polygons 2":
      generateConcentricPolygons2(20, 5);
      break;
    case "pinwheel":
      generatePinwheel(10, 4);
      break;
    case "blanket":
      generateBlanket(10, 4);
      break;
    case "bounce ripple":
      generateBounceRipple(10, 3);
      break;
    case "slosh ripple":
      generateSloshRipple(200, 3);
      break;
    case "wriggling donut":
      generateWrigglingDonut(40, 20, 1);
      break;
    default:
      alert("Please enter a valid animation");
      return;
      break;

  }

};

//update animation//

function update(animation) {

  //select animation//

  switch(animation.name) {

    case "collide":
      updateCollide0scope(dt);
      break;
    case "gyro":
      updateGyr0scope(dt);
      break;      
    case "sine wave":
      break;
    case "concentric polygons":
      updateConcentricPolygons(dt);
      break;
    case "concentric polygons 2":
      updateConcentricPolygons2(dt);
      break;
    case "pinwheel":
      updatePinwheel(10, dt);
      break;
    case "polystarter":
      updatePolygon(1);
      break;
    case "bounce ripple":
      updateBounceRipple(dt);
      break;
    case "slosh ripple":
      updateSloshRipple(dt);
      break;
    case "wriggling donut":
      updateWrigglingDonut(dt);
      break;
    default:
      break;

  }

};

function render() {

  renderer.render(scene, camera);

};

function animate() {

  //update ticker//

  if (animationObject.dynamic) {

    dt += 1e-2;

    if (dt > 2*Math.PI*1e6) {
      dt -= 2*Math.PI*1e6;
    }
    
  }

  id = requestAnimationFrame(animate);

  render();
  update(animationObject);

};

////////////////////////////////////////////////Vue/////////////////////////////////////////////////////

Vue.component('navpane-item', {
  delimiters: ["[[", "]]"],
  props: ["animation"],
  template: '<li v-on:click="activate(animation)">[[ animation.text ]]</li>',
  methods: {
    activate: function(animation) {
      for (var i = 0; i < app.animations.length; ++i) {
        app.animations[i].active = false;
      }
      animation.active = true;
      app.display = true;
      init(animation);
      animate(animation);
    }
  }
})


var app = new Vue({
  el: '#app',
  delimiters: ["[[", "]]"],
  data: {
    display: false,
    animations: [

      {
        text: 'shapes / triangle',
        name: 'triangle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_triangle',
        active: false
      },

      {
        text: 'shapes / rectangle',
        name: 'rectangle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_rectangle',
        active: false
      },

      {
        text: 'shapes / cube',
        name: 'cube',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_cube',
        active: false
      },

      {
        text: 'shapes / circle',
        name: 'circle',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_circle',
        active: false
      },

      {
        text: 'shapes / clam',
        name: 'clam',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_clam',
        active: false
      },

      {
        text: 'shapes / pearl',
        name: 'pearl',
        dynamic: false,
        controllable: true,
        address: '/opengl_webgl_conversion#shapes_pearl',
        active: false
      },

      {
        text: 'shapes / polystarter',
        name: 'polystarter',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#polystarter',
        active: false
      },

      {
        text: 'shapes / sacred circles',
        name: 'sacred circles',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#sacred_circles',
        active: false
      },

      {
        text: 'shapes / star',
        name: 'star',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#star',
        active: false
      },

      {
        text: 'art / collide0scope',
        name: 'collide',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#art_collide0scope',
        active: false
      },

      {
        text: 'art / gyr0scope',
        name: 'gyro',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#art_gyr0scope',
        active: false
      },

      {
        text: 'physics / sine wave',
        name: 'sine wave',
        dynamic: true,
        controllable: true,
        address: '/opengl_webgl_conversion#physics_sine_wave',
        active: false
      },

      {
        text: 'art / concentric polygons',
        name: 'concentric polygons',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons',
        active: false
      },

      {
        text: 'art / concentric polygons 2',
        name: 'concentric polygons 2',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_concentric_polygons2',
        active: false
      },

      {
        text: 'art / pinwheel',
        name: 'pinwheel',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_pinwheel',
        active: false
      },

      {

        text: 'art / blanket',
        name: 'blanket',
        dynamic: false,
        controllable: false,
        address: '/opengl_webgl_conversion#art_blanket',
        active: false
      },

      {

        text: 'art / bounce ripple',
        name: 'bounce ripple',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_bounce_ripple',
        active: false
      },

      {

        text: 'art / slosh ripple',
        name: 'slosh ripple',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_slosh_ripple',
        active: false
      },

      {

        text: 'art / wriggling donut',
        name: 'wriggling donut',
        dynamic: true,
        controllable: false,
        address: '/opengl_webgl_conversion#art_wriggling_donut',
        active: false
      }

    ]
  },
  methods: {
  },
  computed: {
  }
});