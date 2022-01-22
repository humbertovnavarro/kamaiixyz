import ThreeCanvas from 'components/ThreeCanvas';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const cameraOffSet = new Vector3(0, 0, 5);
const modelOffSet = new Vector3(0, -2, 0);
const model = 'heroic_voxels_art_contest';

const scene = (canvas: HTMLCanvasElement, reactCanvas: ThreeCanvas) => {
  const scene = new THREE.Scene();
  scene.background = null;
  const width = reactCanvas.width;
  const height = reactCanvas.height
  const camera = new THREE.PerspectiveCamera(45,width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(0, 1, 0);
  light.castShadow = true;
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);
  scene.add(ambientLight);
  let modelScene: THREE.Object3D<THREE.Event> | THREE.Group | undefined;
  const loader = new GLTFLoader();
  loader.load(`/models/${model}/scene.gltf`, function (gltf) {
    modelScene = gltf.scene;
    scene.add(modelScene);
    modelScene.position.set(modelOffSet.x, modelOffSet.y, modelOffSet.z);
  }, undefined, function (error) {
    console.error(error);
  });
  const controls = new OrbitControls(camera, canvas);
  controls.autoRotate = true;
  camera.position.set(cameraOffSet.x, cameraOffSet.y, cameraOffSet.z);
  reactCanvas.update = () => {
    renderer.render(scene, camera);
    controls.update();
    const width = canvas.parentElement?.clientWidth || 640;
    const height = canvas.parentElement?.clientHeight || 480;
    renderer.setSize(width, height);
  }
  reactCanvas.tearDown = () => {
    controls.dispose();
  }
}

export default scene;
