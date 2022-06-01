import { PublicApi } from '@react-three/cannon';
import { NAME_BOUNDING_BOX } from 'components/Playground/components/Name';
import { useEffect } from 'react';
import { Vector2, Vector3 } from 'three';
import useWorldSpace from './useWorldSpace';

const useObjectTransformation = (physics: PublicApi) => {
  const getWorldSpace = useWorldSpace();
  let position: Vector3;
  const rotation = new Vector3(
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  );

  while (!position!) {
    const worldSpace = getWorldSpace(
      new Vector2(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5),
    );
    const possiblePosition = new Vector3(worldSpace.x, 0, worldSpace.y);

    if (!NAME_BOUNDING_BOX.containsPoint(possiblePosition)) {
      position = possiblePosition;
    }
  }

  useEffect(() => {
    physics.position.set(...position.toArray());
    physics.rotation.set(...rotation.toArray());
  });
};
export default useObjectTransformation;
