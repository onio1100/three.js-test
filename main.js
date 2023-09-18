import * as THREE from 'three';
import WebGL from "three/addons/capabilities/WebGL.js";

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000);

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 2 );
camera.lookAt( 0, 0, 0 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff});
const cube = new THREE.Mesh( geometry, material);
scene.add(cube);

// const LineMaterial =new THREE.LineBasicMaterial({color: 0x0000ff});
// const points = [];
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(0, -10, 0));
// const LineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line( LineGeometry, LineMaterial);

// scene.add(line);

let x = 0,
    y = 2,
    x2 =0,
    y2 = 0

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.position.set( x, 0, y );
    renderer.render(scene, camera);
}

if(WebGL.isWebGLAvailable()){
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("error").appendChild(warning);
}



document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    y = y - 0.5
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    x = x + 0.5
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    y = y + 0.5
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    x = x - 0.5
  }
}
// document.addEventListener('keyup',release)
// function release(e){
//   if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
//     up = false
//   }
//   if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
//     right = false
//   }
//   if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
//     down = false
//   }
//   if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
//     left = false
//   }
// }

// function gameLoop(){
//   if (up){
    
//   }
//   if (right){
    
//   }
//   if (down){
    
//   }
//   if (left){
    
//   }
// }