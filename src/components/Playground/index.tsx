import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lighting from './components/Lighting';
import Name from './components/Name';
import { Objects } from './components/Objects';
import Surface from './components/Surface';
import { canvas } from './styles';

const Playground = () => {
  return (
    <Canvas
      className={canvas()}
      orthographic
      camera={{ zoom: 64, position: [6, 64, 32] }}
    >
      <Lighting />

      <Physics>
        <Name />
        <Objects count={100} />

        <Surface />
      </Physics>

      <OrbitControls />
    </Canvas>
  );
};
export default Playground;
