import { useBox } from '@react-three/cannon';
import useObjectSize from 'hooks/useObjectSize';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

const Box = () => {
  const size = useObjectSize();
  const [mesh, physics] = useBox<Mesh>(() => ({
    mass: 1,
    args: [size, size, size],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh} castShadow position={[0, -100, 0]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Box;
