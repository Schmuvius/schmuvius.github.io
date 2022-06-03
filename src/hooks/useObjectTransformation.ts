import { PublicApi } from '@react-three/cannon';
import { NAME_BOUNDING_BOX_PADDED } from 'components/Playground/components/Name';
import { useEffect, useRef } from 'react';
import { Vector2, Vector3 } from 'three';
import useScreenToWorldSpace from './useScreenToWorldSpace';

const MIN_Y = 4;
const MAX_Y = 32;
const MAX_ANGULAR_VELOCITY = Math.PI * 2;
const MIN_SIZE = 0.5;
const MAX_SIZE = 1.5;

const useObjectTransformation = (physics: PublicApi) => {
  const screenToWorldSpace = useScreenToWorldSpace();
  let position: Vector3;
  const rotation = useRef(
    new Vector3(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ),
  );
  const velocity = useRef(
    new Vector3(
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
      (Math.random() * 2 - 1) * MAX_ANGULAR_VELOCITY,
    ),
  );
  const randomSize = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;

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
        Math.random() * (MAX_Y - MIN_Y) + MIN_Y,
        possiblePosition.z,
      );
    }
  }

  useEffect(() => {
    physics.position.set(...position.toArray());
    physics.rotation.set(...rotation.current.toArray());
    physics.angularVelocity.set(...velocity.current.toArray());
    physics.scaleOverride([randomSize, randomSize, randomSize]);
  }, [physics, position, rotation, velocity, randomSize]);
};
export default useObjectTransformation;
