import { useCylinder } from '@react-three/cannon';
import useObjectSize from 'hooks/useObjectSize';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

const Cylinder = () => {
  const size = useObjectSize();
  const [mesh, physics] = useCylinder<Mesh>(() => ({
    mass: 1,
    args: [size / 2, size / 2, size],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh} castShadow position={[0, -100, 0]}>
      <cylinderGeometry args={[size / 2, size / 2, size, 16]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Cylinder;
