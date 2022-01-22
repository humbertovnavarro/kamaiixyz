import ThreeCanvas from 'components/ThreeCanvas';
import * as THREE from 'three';
import { Clock, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const cameraOffSet = new Vector3(0, 0, 5);
const scene = (canvas: HTMLCanvasElement, reactCanvas: ThreeCanvas) => {
  const scene = new THREE.Scene();
  scene.background = null;
  const width = reactCanvas.width;
  const height = reactCanvas.height
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
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
  const skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
  const materialArray = createMaterialArray("/textures/skybox");
  const skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
  camera.position.set(cameraOffSet.x, cameraOffSet.y, cameraOffSet.z);
  let lastScrollY = window.scrollY;
  const Clock = new THREE.Clock();
  reactCanvas.update = () => {
    const delta = Clock.getDelta();
    const scrollDelta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    skybox.rotation.x += scrollDelta * delta * 0.1;
    skybox.rotation.y += 0.1 * delta;
    renderer.render(scene, camera);
  }
}

function createPathStrings(filename: string) {
  const fileType = ".png";
  const sides = ["left", "right", "up", "down", "front", "back"];
  const pathStrings = sides.map(side => {
    return filename + "_" + side + fileType;
  });
  return pathStrings;
}

function createMaterialArray(filename: string) {
  const skyboxImagepaths = createPathStrings(filename);
  const materialArray = skyboxImagepaths.map(image => {
    const texture = new THREE.TextureLoader().load(image);
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
  return materialArray;
}
export default scene;
