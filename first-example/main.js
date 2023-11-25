import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//scene
const scene = new THREE.Scene();

//sphere
const geometry = new THREE.SphereGeometry(3, 64,64 );
const material = new THREE.MeshStandardMaterial({color:"#00ff83"});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//light
const light = new THREE.PointLight(0xffffff,90,100);
// light.position.set( 2, 8, 3 );
light.position.set( 0, 10, 10 );
scene.add(light);

//camera
const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1, 100);
camera.position.z = 20; // to show it as scene and camera overlayed
scene.add(camera);

//renderer
const canvas = document.getElementById("webGl");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);

//controls
const controls = new OrbitControls( camera, canvas);

// window.addEventListener('mousemove',(e)=>{
//   light.position.set(0,10,10);
// })

//resize
window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});

//loop
const loop = ()=>{
   renderer.render(scene,camera);
   window.requestAnimationFrame(loop);
}

loop();

