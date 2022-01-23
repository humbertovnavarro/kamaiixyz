import ThreeCanvas from 'components/ThreeCanvas';
import skybox from 'threeScenes/skybox';
import NavBar from '../components/NavBar';
type LayoutProps = {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <NavBar/>
      <ThreeCanvas
        className="w-screen h-screen fixed bot-0"
        scene={skybox}/>
      <main className="flex justify-center">
        <div className="md:w-2/5 mb-32">
          {props.children}
        </div>
      </main>
    </>
  );
};
export default Layout;
