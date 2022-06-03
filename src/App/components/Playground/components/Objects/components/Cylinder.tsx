import { useBox } from '@react-three/cannon';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import OBJECT_SIZE from '../constants/Size';

const Cylinder = () => {
  const [mesh, physics] = useBox<Mesh>(() => ({
    mass: 1,
    args: [OBJECT_SIZE, OBJECT_SIZE, OBJECT_SIZE],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh}>
      <cylinderGeometry
        args={[OBJECT_SIZE / 2, OBJECT_SIZE / 2, OBJECT_SIZE, 16]}
      />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Cylinder;
