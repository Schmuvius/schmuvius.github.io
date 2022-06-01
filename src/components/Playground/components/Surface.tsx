import { usePlane } from '@react-three/cannon';
import { Mesh } from 'three';

const Surface = () => {
  const [ref] = usePlane<Mesh>(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[0, 0]} />
    </mesh>
  );
};
export default Surface;
