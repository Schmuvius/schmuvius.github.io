import { useCylinder } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import useScreenToWorldSpace from 'hooks/useScreenToWorldSpace';
import { useEffect } from 'react';
import { Mesh, Vector2 } from 'three';

const Cursor = () => {
  const [cursor, physics] = useCylinder<Mesh>(() => ({
    position: [0, 1000, 0],
    args: [0.5, 0.5, 100],
  }));
  const {
    gl: { domElement: canvas },
  } = useThree();
  const screenToWorldSpace = useScreenToWorldSpace();

  let lastPosition = new Vector2(0, 0);
  let lastTime = performance.now();

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / canvas.clientWidth) * 2 - 1;
      const y = (event.clientY / canvas.clientHeight) * 2 - 1;
      const worldSpace = screenToWorldSpace(new Vector2(x, y));
      const currentTime = performance.now();
      const deltaPosition = new Vector2(
        worldSpace.x - lastPosition.x,
        worldSpace.y - lastPosition.y,
      );
      const deltaTime = currentTime - lastTime;

      physics.position.set(worldSpace.x, 0, worldSpace.y);
      physics.velocity.set(
        deltaPosition.x / deltaTime,
        0,
        deltaPosition.y / deltaTime,
      );
      lastPosition.set(worldSpace.x, worldSpace.y);
      lastTime = currentTime;
    };

    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      canvas.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return null;
};
export default Cursor;
