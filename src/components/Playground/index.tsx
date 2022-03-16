import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC, InputHTMLAttributes } from 'react';
import ReactiveZoom from '../ReactiveZoom';
import Sun from './components/Sun';

interface PlaygroundProps extends InputHTMLAttributes<HTMLDivElement> {}
const Playground: FC<PlaygroundProps> = (props) => {
  return (
    <Canvas
      {...props}
      orthographic
      camera={{
        zoom: 32,
      }}
    >
      <Sun />

      <directionalLight position={[10, 10, 10]} />
      <ambientLight intensity={0.5} />

      <OrbitControls />
      <ReactiveZoom />
    </Canvas>
  );
};
export default Playground;
