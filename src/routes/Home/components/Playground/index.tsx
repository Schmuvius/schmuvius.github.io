import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';
import Bounds from './components/Bounds';
import Cursor from './components/Cursor';
import Lighting from './components/Lighting';
import Name from './components/Name';
import { Objects } from './components/Objects';
import { canvas } from './styles';

const Playground = () => {
  return (
    <Canvas
      shadows={{ enabled: true, type: PCFSoftShadowMap }}
      className={canvas()}
      camera={{ position: [0, 12, 0] }}
    >
      <Lighting />

      <Physics>
        <Name />
        <Objects />
        <Cursor />
        <Bounds />
      </Physics>
    </Canvas>
  );
};
export default Playground;
