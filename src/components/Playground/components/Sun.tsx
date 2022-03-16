import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

const Sun = () => {
  const [meshRef, physics] = useSphere(() => ({
    mass: 50,
    position: [10, 4, 0],
  }));
  let anchor = true;

  const handleClick = () => {
    anchor = false;
    physics.velocity.set(-2, 10, 0);
  };

  useFrame(() => {
    if (anchor) {
      physics.position.set(10, 4, 0);
      physics.velocity.set(0, 0, 0);
    }
  });

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <sphereGeometry args={[1.5, 24, 24]} />
      <meshToonMaterial color="yellow" />
    </mesh>
  );
};
export default Sun;
