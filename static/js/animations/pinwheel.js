import * as THREE from 'three';

import Animation from './animation';
import { colorNodes } from '../utils';

const NUM_POLYGONS = 10;
const NUM_FACES = 4;

export default class Pinwheel extends Animation {
  constructor(scene, numPolygons, numFaces) {
    super('pinwheel', true, scene);
    this.numPolygons = numPolygons || NUM_POLYGONS;
    this.numFaces = numFaces || NUM_FACES
  }

  draw() {
    for (var i = 2 * NUM_POLYGONS; i >= 1; i--) {
      const geometry = new THREE.CircleBufferGeometry((20 / (2 * this.numPolygons - (i / 2) + 1)), this.numFaces);
      const material = new THREE.MeshBasicMaterial({ color: colorNodes(i + 1), wireframe: false});
      const mesh = new THREE.Mesh(geometry, material);

      this.scene.add(mesh);
    }
  }

  update(dt) {
    const noChildren = this.scene.children.length;

    for (var i = 0; i < noChildren; ++i) {
      this.scene.children[i].rotation.z = 2 * dt* ((noChildren / 2) - i) * Math.PI * i / 160;
    }
  }
}