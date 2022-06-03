import { useCylinder } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import useScreenToWorldSpace from 'hooks/useScreenToWorldSpace';
import { useEffect, useRef } from 'react';
import { Mesh, Vector2 } from 'three';

const Cursor = () => {
  const [, physics] = useCylinder<Mesh>(() => ({
    position: [0, 1000, 0],
    args: [0.5, 0.5, 100],
  }));
  const {
    gl: { domElement: canvas },
  } = useThree();
  const screenToWorldSpace = useScreenToWorldSpace();

  let lastPosition = useRef(new Vector2(0, 0));
  let lastTime = useRef(performance.now());

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / canvas.clientWidth) * 2 - 1;
      const y = (event.clientY / canvas.clientHeight) * 2 - 1;
      const worldSpace = screenToWorldSpace(new Vector2(x, y));
      const currentTime = performance.now();
      const deltaPosition = new Vector2(
        worldSpace.x - lastPosition.current.x,
        worldSpace.y - lastPosition.current.y,
      );
      const deltaTime = currentTime - lastTime.current;

      physics.position.set(worldSpace.x, 0, worldSpace.y);
      physics.velocity.set(
        deltaPosition.x / deltaTime,
        0,
        deltaPosition.y / deltaTime,
      );
      lastPosition.current.set(worldSpace.x, worldSpace.y);
      lastTime.current = currentTime;
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [canvas, lastPosition, physics, screenToWorldSpace]);

  return null;
};
export default Cursor;
