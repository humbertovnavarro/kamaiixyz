import ThreeCanvas from 'components/ThreeCanvas';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const cameraOffSet = new Vector3(0, 1, 6);
const modelOffSet = new Vector3(0, -1, 0);
const model = 'heroic_voxels_art_contest';
let width = 0.3;
let height = 0.3;

const home = (canvas: HTMLCanvasElement, reactCanvas: ThreeCanvas) => {
  const scene = new THREE.Scene();
  scene.background = null;
  if(innerWidth < 600) {
    width = 0.6;
    height = 0.2;
  }
  const camera = new THREE.PerspectiveCamera(45,(width * innerWidth) / (height * innerHeight), 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width * innerWidth, height * innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(0, 1, 0);
  light.castShadow = true;
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);
  scene.add(ambientLight);
  let modelScene: THREE.Object3D<THREE.Event> | THREE.Group | undefined;
  const easterEgg = "sus";
  let easterEggIndex = 0;
  const easterEggListener = (e: KeyboardEvent) => {
    if (easterEgg[easterEggIndex] === e.key) {
      easterEggIndex++;
    } else {
      easterEggIndex = 0;
    }
    if (easterEggIndex >= easterEgg.length) {
      easterEggIndex = 0;
      window.open(`https://www.youtube.com/watch?v=obmlZH3X9gs&t=7s`);
      window.removeEventListener("keydown", easterEggListener);
    }
    console.log(easterEggIndex);
  }
  window.addEventListener("keydown", easterEggListener);
  window.addEventListener("resize", () => {
    renderer.setSize(width * innerWidth, height * innerHeight);
    camera.aspect = (width * innerWidth) / (height * innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  });
  const loader = new GLTFLoader();
  loader.load(`/models/${model}/scene.gltf`, function (gltf) {
    modelScene = gltf.scene;
    scene.add(modelScene);
    modelScene.position.set(modelOffSet.x, modelOffSet.y, modelOffSet.z);
    modelScene.rotateX(0.5);
  }, undefined, function (error) {
    console.error(error);
  });
  const controls = new OrbitControls(camera, canvas);
  camera.position.set(cameraOffSet.x, cameraOffSet.y, cameraOffSet.z);
  reactCanvas.update = () => {
    renderer.render(scene, camera);
    controls.update();
  }
  reactCanvas.tearDown = () => {
    controls.dispose();
  }
}
export default home;
