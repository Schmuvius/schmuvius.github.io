import { useSphere } from '@react-three/cannon';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import OBJECT_SIZE from '../constants/Size';

const Sphere = () => {
  const [mesh, physics] = useSphere<Mesh>(() => ({
    mass: 1,
    args: [OBJECT_SIZE / 2],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh} castShadow>
      <icosahedronGeometry args={[OBJECT_SIZE / 2, 2]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Sphere;
