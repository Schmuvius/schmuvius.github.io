import { useBox } from '@react-three/cannon';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import SIZE from '../constants/Size';

const Box = () => {
  const [mesh, physics] = useBox<Mesh>(() => ({
    mass: 1,
    args: [SIZE, SIZE, SIZE],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[SIZE, SIZE, SIZE]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Box;
