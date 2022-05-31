import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lighting from './components/Lighting';
import Name from './components/Name';
import { canvas } from './styles';

const Playground = () => {
  return (
    <Canvas className={canvas()} orthographic camera={{ zoom: 32 }}>
      <Name />
      <Lighting />

      <OrbitControls />
    </Canvas>
  );
};
export default Playground;
