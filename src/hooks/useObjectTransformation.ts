import { PublicApi } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { NAME_BOUNDING_BOX_PADDED } from 'routes/Home/components/Playground/components/Name';
import OBJECT_SIZE from 'routes/Home/components/Playground/components/Objects/constants/Size';
import { Vector2, Vector3 } from 'three';
import useScreenToWorldSpace from './useScreenToWorldSpace';

const MAX_Y = 12;
const MAX_VELOCITY = 50;
const MAX_ANGULAR_VELOCITY = Math.PI * 2 * 5;

const useObjectTransformation = (physics: PublicApi) => {
  const { camera } = useThree();
  const minY = camera.position.y + OBJECT_SIZE * 2;
  const screenToWorldSpace = useScreenToWorldSpace();
  let position: Vector3;
  const rotation = useRef(
    new Vector3(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ),
  );
  const velocity = useRef(new Vector3(0, Math.random() * MAX_VELOCITY, 0));
  const angularVelocity = useRef(
    new Vector3(
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
    ),
  );

  while (!position!) {
    const randomPosition2 = new Vector2(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
    );
    const worldPosition2 = screenToWorldSpace(randomPosition2);
    const possiblePosition = new Vector3(worldPosition2.x, 0, worldPosition2.y);

    if (!NAME_BOUNDING_BOX_PADDED.containsPoint(possiblePosition)) {
      position = new Vector3(
        possiblePosition.x,
        Math.random() * (MAX_Y - minY) + minY,
        possiblePosition.z,
      );
    }
  }

  useEffect(() => {
    physics.position.set(...position.toArray());
    physics.rotation.set(...rotation.current.toArray());
    physics.velocity.set(...velocity.current.toArray());
    physics.angularVelocity.set(...angularVelocity.current.toArray());

    const handleClick = () => {
      physics.velocity.set(0, (Math.random() * MAX_VELOCITY) / 10, 0);
      physics.angularVelocity.set(
        (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
        (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
        (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
      );
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  });
};
export default useObjectTransformation;
