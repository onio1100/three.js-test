import * as THREE from 'three';
import WebGL from "three/addons/capabilities/WebGL.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000);

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 2 );
camera.lookAt( 0, 0, 0 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

// CUBE
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff});
const cube = new THREE.Mesh( geometry, material);
// scene.add(cube);

// LINES
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

const loader = new GLTFLoader();

loader.load("public/piesek/scene.gltf", function(gltf){
    scene.add(gltf.scene);
}, undefined, function (error){
  console.log(error);
});


let x = 0,
    y = 2

function animate() {
    requestAnimationFrame(animate);
    // scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;
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
  if (e.keyCode === 87 /* up  w */ ){
    y = y - 0.5
  }
  if (e.keyCode === 68 /* right d */){
    x = x + 0.5
  }
  if (e.keyCode === 83 /* down s */ ){
    y = y + 0.5
  }
  if (e.keyCode === 65 /* left a */){
    x = x - 0.5
  }
}