import * as THREE from 'three';

import { 

colorNodes,
phi,
polygon 

} from '../utils'

export function generateCollide0scope(scene, numCircles) {

  for (let i = 0; i < numCircles; ++i) {
    
    let geometry = new THREE.CircleBufferGeometry(1+(i/(10*numCircles)), 10);
    let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: true});
    let mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

export function generateGyr0scope(scene, numCircles) {

  for (let i = 0; i < numCircles; ++i) {
    
    let geometry = new THREE.CircleBufferGeometry(1+(i/(10*numCircles)), 10);
    let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: true});
    let mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

export function generateBlanket(scene, numPolygons, numFaces) {

  for (let i = 2*numPolygons; i >= 1; i--) {
    
    let geometry = new THREE.CircleBufferGeometry((10/(2*numPolygons-i+1)), numFaces);
    let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
    let mesh = new THREE.Mesh(geometry, material);

    mesh.rotateZ(Math.PI*i/4);

    scene.add(mesh);

  }

}

export function generateConcentricPolygons(scene, numPolygons, numFaces) {

  for (let i = numPolygons; i >= 1; i--) {
  
    let geometry = new THREE.CircleBufferGeometry((10/(numPolygons-i+1)), numFaces);
    let material = new THREE.MeshBasicMaterial( {color: colorNodes(i), wireframe: false});
    let mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

export function generateConcentricPolygons2(scene, numPolygons, radius) {

  let x = [0, 0];
  let t = 0;
  let col = 0xf00a00;

  for (let i = 1; i <= numPolygons; ++i) {

    let r = radius*i/numPolygons;
    let poly = new polygon(x, r, i+2, t, col);
    
    scene.add(poly.line);
  
  }

}

export function generatePinwheel(scene, numPolygons, numFaces) {

  for (let i = 2*numPolygons; i >= 1; i--) {
    
    let geometry = new THREE.CircleBufferGeometry((20/(2*numPolygons-(i/2)+1)), numFaces);
    let material = new THREE.MeshBasicMaterial( {color: colorNodes(i+1), wireframe: false});
    let mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

  }

}

export function generateBounceRipple(scene, numPolygons, radius) {

  let x = [0, 0];
  let col = 0xf00a00;

  for (let i = 1; i <= numPolygons; ++i) {

    let r = radius*i/10;
    let poly = new polygon(x, r, 100, 0, col);
    
    scene.add(poly.line);
  
  }

}

export function generateSloshRipple(scene, numPolygons, radius) {

  let x = [0, 0];

  for (let i = 1; i <= numPolygons; ++i) {

    let r = radius*i/10;
    let poly = new polygon(x, r, 100, 0, colorNodes(i-1));
    
    scene.add(poly.line);
  
  }

}

export function generateWrigglingDonut(scene, numNodes, numPolygons, polyRadius, globalRadius) {

  let x = [0, 0];

  for (let i = 1; i < numNodes; ++i) {

      for (let j = 0; j < numNodes; ++j) {

        x[0] = globalRadius*(Math.cos(phi(i, numNodes)) + Math.cos(phi(j, numNodes))*Math.sin(phi(i, numPolygons)));
        x[1] = globalRadius*(Math.sin(phi(i, numNodes)) + Math.sin(phi(j, numNodes))*Math.cos(phi(i, numPolygons)));

        let poly = new polygon(x, polyRadius, numNodes, 0, colorNodes(1));
        scene.add(poly.line);

    }

  }

}

export function generateApollo(scene, numNodes, numPolygons, polyRadius, globalRadius) {

  let x = [0, 0];

  for (let i = 1; i < numNodes; ++i) {

      for (let j = 0; j < numNodes; ++j) {

        for (let k = 0; k < numPolygons; ++k) {

          x[0] = globalRadius*(Math.cos(phi(i, numNodes)) + Math.cos(phi(j, numNodes)))*Math.sin(phi(k, numPolygons));
          x[1] = globalRadius*(Math.sin(phi(i, numNodes)) + Math.sin(phi(j, numNodes)))*Math.cos(phi(k, numPolygons));

          let poly = new polygon(x, polyRadius, numNodes, 0, colorNodes(1));
          scene.add(poly.line);

        }

    }

  }

}

export function updateCollide0scope(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {

    let r = 1+(i/5);

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

export function updateGyr0scope(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {

    let r = 1;

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

export function updateConcentricPolygons(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z = 2*(scene.children.length-i)*Math.sin(t/4);
  }

}

export function updateConcentricPolygons2(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {

    if (i % 2 === 0) {
      scene.children[i].rotation.z = Math.sin(i)*t/2;
    }
    else {
      scene.children[i].rotation.z = Math.sin(-i)*t/2;
    }

  }

}

export function updatePinwheel(scene, numPolygons, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z = 2*t*((scene.children.length/2)-i)*Math.PI*i/160;
  }

}

export function updateBounceRipple(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].scale.set(Math.cos(t)*Math.sin(phi(i, 100) + 2*t), Math.cos(t)*Math.sin(phi(i, 100) + 2*t), 1);
  }

}

export function updateSloshRipple(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].scale.set(Math.cos(phi(i, 100) + t/100), Math.cos(phi(i, 100) + t/100), 1);
  }

}

export function updateWrigglingDonut(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {
    scene.children[i].rotation.z -= 10*t;
  }

}

export function updateApollo(scene, t) {

  for (let i = 0; i < scene.children.length; ++i) {

    if (i%2 === 0) {
      scene.children[i].rotation.z -= 1e-3;
      //scene.children[i].rotation.z -= Math.sin(t/1000)/10;
      //scene.children[i].scale.set(Math.cos(phi(i, 100) + t/10));
      //scene.children[i].scale.set(Math.cos(phi(i, 100) + t/10), -Math.sin(phi(i, 100) + t/10), Math.cos(t));
    }
    else {
      scene.children[i].rotation.z += 1e-3;
      //scene.children[i].rotation.z += Math.sin(t/1000)/5;
      //scene.children[i].scale.set(-Math.cos(phi(i, 100) + t/10));
      //scene.children[i].scale.set(-Math.sin(phi(i, 100) + t/10), Math.cos(phi(i, 100) + t/10), Math.sin(t));
    }

  }

}