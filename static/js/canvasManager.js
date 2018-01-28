import * as THREE from 'three';

import { colorNodes } from './utils'

import {

  generateTriangle,
  generateRectangle,
  generateCube,
  generateCircle,
  generateClam,
  generatePearl,
  generatePolygon,
  generateSacredCircles,
  generateOffsetStar,
  updatePolygon

} from './humble_beginnings/shapes'

import {

  renderSineWave,
  generateSineWave,
  updateSineWave

} from './humble_beginnings/physics'

import {

  generateCollide0scope,
  generateGyr0scope,
  generateBlanket,
  generateConcentricPolygons,
  generateConcentricPolygons2,
  generatePinwheel,
  generateBounceRipple,
  generateSloshRipple,
  generateWrigglingDonut,
  generateApollo,
  updateCollide0scope,
  updateGyr0scope,
  updateConcentricPolygons,
  updateConcentricPolygons2,
  updatePinwheel,
  updateBounceRipple,
  updateSloshRipple,
  updateWrigglingDonut,
  updateApollo

} from './humble_beginnings/art'

let OrbitControls = require('three-orbit-controls')(THREE)

export default class CanvasManager {

  constructor(canvas, animation) {

    // initialize canvas

    this.canvas = canvas;

    this.checkCanvasSize();

    this.setCamera(3);
    this.setRenderer(0x000000);

    this.checkCanvasSize();

    window.addEventListener('resize', () => this.checkCanvasSize());

    // initialize animation

    this.animation = animation;

    if (this.animation.controllable) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    this.dt = 0;

    this.scene = new THREE.Scene();

    this.draw();

    this.tick = this.tick.bind(this);

    //run animation

    this.tick();

  }

  setRenderer(backgroundColor) {

    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
    this.renderer.setClearColor(backgroundColor);
    this.renderer.setPixelRatio(window.devicePixelRatio);

  }

  setCamera(offset) {

    this.camera = new THREE.PerspectiveCamera(75, this.canvasWidth / this.canvasHeight, 0.1, 1000);
    this.camera.position.z = offset;
  
  }

  checkCanvasSize() {

    let app = document.getElementById("app");
    let navpane = document.getElementById("navpane");

    this.canvasWidth = app.offsetWidth - navpane.offsetWidth - 1;
    this.canvasHeight = window.innerHeight;

    if (this.renderer) this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    
    if (this.camera) {
      
      this.camera.aspect = this.canvasWidth / this.canvasHeight;
      this.camera.updateProjectionMatrix();
      
    }

  }

  draw() {

    switch(this.animation.name) {

      case "triangle":
        generateTriangle(this.scene);
        break;
      case "rectangle":
        generateRectangle(this.scene);
        break;
      case "cube":
        generateCube(this.scene);
        break;
      case "circle":
        generateCircle(this.scene, 1, 5);
        break;
      case "clam":
        generateClam(this.scene, 200, 1);
        break;
      case "pearl":
        generatePearl(this.scene, 200, 1);
        break;
      case "polystarter":
        generatePolygon(this.scene);
        break;
      case "sacred circles":
        generateSacredCircles(this.scene, 16, 5, 1, 1, colorNodes(0));
        break;
      case "star":
        generateOffsetStar(this.scene, 10, 1, 2, colorNodes(0));
        break;
      case "collide":
        generateCollide0scope(this.scene, 20);
        break;
      case "gyro":
        generateGyr0scope(this.scene, 20);
        break;
      case "sine wave":
        generateSineWave(this.scene, 1500);
        break;
      case "concentric polygons":
        generateConcentricPolygons(this.scene, 10, 5);
        break;
      case "concentric polygons 2":
        generateConcentricPolygons2(this.scene, 20, 5);
        break;
      case "pinwheel":
        generatePinwheel(this.scene, 10, 4);
        break;
      case "blanket":
        generateBlanket(this.scene, 10, 4);
        break;
      case "bounce ripple":
        generateBounceRipple(this.scene, 10, 3);
        break;
      case "slosh ripple":
        generateSloshRipple(this.scene, 200, 3);
        break;
      case "wriggling donut":
        generateWrigglingDonut(this.scene, 40, 10, 1, 0.2);
        break;
      case "apollo":
        generateApollo(this.scene, 8, 10, 1, 2);
        break;
      default:
        alert("Please enter a valid animation");
        return;
        break;

    }

  }

  tick() {
    
    this.animationId = requestAnimationFrame(this.tick);

    this.renderer.render(this.scene, this.camera);

    if (this.animation.dynamic) {

      this.dt += 1e-2;

      if (this.dt > 2 * Math.PI * 1e6) {
        this.dt -= 2 * Math.PI * 1e6;
      }

      this.update();
      
    }

  }

  update() {

    switch(this.animation.name) {

      case "collide":
        updateCollide0scope(this.scene, this.dt);
        break;
      case "gyro":
        updateGyr0scope(this.scene, this.dt);
        break;      
      case "sine wave":
        break;
      case "concentric polygons":
        updateConcentricPolygons(this.scene, this.dt);
        break;
      case "concentric polygons 2":
        updateConcentricPolygons2(this.scene, this.dt);
        break;
      case "pinwheel":
        updatePinwheel(this.scene, 10, this.dt);
        break;
      case "polystarter":
        updatePolygon(this.scene, 1);
        break;
      case "bounce ripple":
        updateBounceRipple(this.scene, this.dt);
        break;
      case "slosh ripple":
        updateSloshRipple(this.scene, this.dt);
        break;
      case "wriggling donut":
        updateWrigglingDonut(this.scene, this.dt);
        break;
      case "apollo":
        updateApollo(this.scene, this.dt);
        break;
      default:
        break;

    }

  }

}