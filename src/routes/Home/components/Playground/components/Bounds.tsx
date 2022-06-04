import { usePlane } from '@react-three/cannon';
import usePlaygroundSpace from 'hooks/usePlaygroundSpace';
import { Mesh } from 'three';

const Bounds = () => {
  const playgroundSpace = usePlaygroundSpace();

  usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    material: { friction: 100 },
  })); // floor
  usePlane<Mesh>(() => ({ position: [0, 0, -playgroundSpace.y / 2] })); // top wall
  usePlane<Mesh>(() => ({
    position: [0, 0, playgroundSpace.y / 2],
    rotation: [Math.PI, 0, 0],
  })); // bottom wall
  usePlane<Mesh>(() => ({
    position: [-playgroundSpace.x / 2, 0, 0],
    rotation: [0, Math.PI / 2, 0],
  })); // left wall
  usePlane<Mesh>(() => ({
    position: [playgroundSpace.x / 2, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
  })); // right wall

  const material = <meshStandardMaterial color="hsl(240, 80%, 10%)" />;

  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      {material}
      <planeGeometry args={[playgroundSpace.x, playgroundSpace.y]} />
    </mesh>
  );
};
export default Bounds;
