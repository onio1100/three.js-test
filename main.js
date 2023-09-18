import * as THREE from 'three';
import WebGL from "three/addons/capabilities/WebGL.js";

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000);

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff});
const cube = new THREE.Mesh( geometry, material);
// scene.add(cube);

const LineMaterial =new THREE.LineBasicMaterial({color: 0x0000ff});
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(0, -10, 0));
const LineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line( LineGeometry, LineMaterial);

scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

if(WebGL.isWebGLAvailable()){
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("error").appendChild(warning);
}