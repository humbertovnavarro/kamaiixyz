import NavBar from '../components/NavBar';
import Skybox from 'components/Skybox';
import { useRouter } from 'next/router';
import { Euler } from 'three';
import { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
type LayoutProps = {
  children: React.ReactNode;
}
interface rotations {
  [key: string]: [number, number, number];
}
const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0, 0));
  useEffect(() => {
    const handleRouteChange = (path: string) => {
      switch(path) {
        case '/':
          setRotation(new Euler(0, 0, 0));
          break;
        case '/projects':
          setRotation(new Euler(0, 1, 0));
        break;
        case '/about':
          setRotation(new Euler(0, 2, 0));
        break;
        case '/contact':
          setRotation(new Euler(0, 3, 0));
        break;
        default:
          setRotation(new Euler(0, 4, 0));
      }
    }
    router.events.on("routeChangeStart", handleRouteChange);
    handleRouteChange(router.pathname);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    }
  },[router]);
  return (
    <>
      <NavBar/>
      <Skybox rotation={rotation}/>
      <div className="flex justify-center">
        <div className="md:w-2/5">
          {props.children}
        </div>
      </div>
    </>
  );
}
export default Layout;
