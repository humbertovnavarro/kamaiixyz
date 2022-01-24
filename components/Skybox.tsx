import { PerspectiveCamera, Stars } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Object3D, Euler, MathUtils } from 'three';
import { useDetectGPU } from '@react-three/drei';

interface SkyBoxProps {
  rotation: Euler;
}
function SkyBox(props: SkyBoxProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  return (
    <>
      <div className="w-screen h-screen absolute top-0">
      </div>
      <div className="w-screen h-screen absolute bottom-0">
        <Canvas ref={canvas}>
          <StarField rotation={props.rotation} />
        </Canvas>
      </div>
    </>
  )
}
const StarField: React.FC<SkyBoxProps> = (props: SkyBoxProps) => {
  const skybox = useRef<Object3D>();
  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0, 0));
  const settled = useRef(false);
  useFrame((_blank, delta) => {
    if(!skybox) return;
    if(!skybox.current) return;
      skybox.current.rotation.x += Math.cos(Date.now() / 1000) * 0.01 * delta * Math.random();
      skybox.current.rotation.y += Math.sin(Date.now() / 1000) * 0.01 * delta * Math.random();
      if(!settled.current) {
        skybox.current.rotation.x = MathUtils.lerp(skybox.current.rotation.x, props.rotation.x, 5 * delta);
        skybox.current.rotation.y = MathUtils.lerp(skybox.current.rotation.y, props.rotation.y, 5 * delta);
      }
      if(rotation.x === skybox.current.rotation.x && rotation.y === skybox.current.rotation.y) {
        settled.current = true;
      }
      skybox.current.rotation.x += Math.cos(Date.now() / 1000) * 0.05 * delta;
      skybox.current.rotation.y -= Math.sin(Date.now() / 1000) * 0.03 * delta;
  });
  useEffect(() => {
    settled.current = false;
    setRotation(props.rotation);
  }, [props.rotation]);
  return (
    <>
      <PerspectiveCamera
        fov={75}
        position={[0, 0, 0]}
        rotation={props.rotation}
        />
      <Stars
      ref={skybox}
      radius={100}
      depth={40}
      count={1000}
      factor={4}
      saturation={1}
      fade
      />
    </>
  );
}
export default SkyBox;
