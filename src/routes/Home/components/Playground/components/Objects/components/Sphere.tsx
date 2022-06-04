import { useSphere } from '@react-three/cannon';
import useObjectSize from 'hooks/useObjectSize';
import useObjectTransformation from 'hooks/useObjectTransformation';
import useRainbow from 'hooks/useRainbow';
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';

const Sphere = () => {
  const size = useObjectSize();
  const [mesh, physics] = useSphere<Mesh>(() => ({
    mass: 1,
    args: [size / 2],
  }));
  const material = useRef<MeshStandardMaterial>(null!);

  useObjectTransformation(physics);
  useRainbow(material);

  return (
    <mesh ref={mesh} castShadow position={[0, -100, 0]}>
      <icosahedronGeometry args={[size / 2, 2]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
export default Sphere;
