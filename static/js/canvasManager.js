import * as THREE from 'three';

import { colorNodes } from './utils' 

import { generateAnimation } from './animations/index'

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

    this.scene = new THREE.Scene();

    this.animation = generateAnimation(this.scene, animation);

    if (this.animation.controllable) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    this.dt = 0;

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
        this.animation.draw();
        break;
      case "rectangle":
        this.animation.draw();
        break;
      case "cube":
        this.animation.draw();
        break;
      case "circle":
        this.animation.draw(5, 1);
        break;
      case "clam":
        this.animation.draw(200, 1);
        break;
      case "pearl":
        this.animation.draw(200, 1);
        break;
      case "polystarter":
        this.animation.draw();
        break;
      case "sacred circles":
        this.animation.draw(16, 5, 1, 1, colorNodes(0));
        break;
      case "star":
        this.animation.draw(10, 1, 2, colorNodes(0));
        break;
      case "collide":
        this.animation.draw(20);
        break;
      case "gyro":
        this.animation.draw(20);
        break;
      case "sine wave":
        this.animation.draw(1500);
        break;
      case "concentric polygons":
        this.animation.draw(10, 5);
        break;
      case "concentric polygons 2":
        this.animation.draw(20, 5);
        break;
      case "pinwheel":
        this.animation.draw(10, 4);
        break;
      case "blanket":
        this.animation.draw(10, 4);
        break;
      case "bounce ripple":
        this.animation.draw(10, 3);
        break;
      case "slosh ripple":
        this.animation.draw(200, 3);
        break;
      case "wriggling donut":
        this.animation.draw(40, 10, 1, 0.2);
        break;
      case "apollo":
        this.animation.draw(8, 10, 1, 2);
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

      this.animation.update(this.dt);
      
    }

  }

}