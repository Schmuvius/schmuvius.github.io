import { useCylinder } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import useScreenToWorldSpace from 'hooks/useScreenToWorldSpace';
import { useEffect, useRef } from 'react';
import { Mesh, PointLight, Vector2 } from 'three';

const LIGHT_HEIGHT = 10;

const Cursor = () => {
  const light = useRef<PointLight>(null!);
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
    light.current.shadow.mapSize.width = window.innerWidth * 2;
    light.current.shadow.mapSize.height = window.innerHeight * 2;

    const handlePointerMove = (event: TouchEvent | PointerEvent) => {
      const clientX =
        (event as PointerEvent).clientX ??
        (event as TouchEvent).touches[0].clientX;
      const clientY =
        (event as PointerEvent).clientY ??
        (event as TouchEvent).touches[0].clientY;
      const x = (clientX / canvas.clientWidth) * 2 - 1;
      const y = (clientY / canvas.clientHeight) * 2 - 1;
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
      light.current.position.set(worldSpace.x, LIGHT_HEIGHT, worldSpace.y);
    };

    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  });

  return (
    <pointLight
      ref={light}
      intensity={2}
      position={[0, LIGHT_HEIGHT, 0]}
      castShadow
    />
  );
};
export default Cursor;
