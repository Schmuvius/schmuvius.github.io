import { useBox } from '@react-three/cannon';
import { Text3D } from '@react-three/drei';
import Inter_Bold from 'assets/fonts/Inter_Bold.json';
import useRainbow from 'hooks/useRainbow';
import { useLayoutEffect, useRef } from 'react';
import { Box3, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import OBJECT_SIZE from './Objects/constants/Size';

export const NAME_SIZE = new Vector3(
  6.199573089862069,
  1.1393825829633464,
  0.25,
);
export const NAME_BOUNDING_BOX = new Box3(
  new Vector3(-NAME_SIZE.x / 2, -NAME_SIZE.y / 2, -NAME_SIZE.z / 2),
  new Vector3(NAME_SIZE.x / 2, NAME_SIZE.y / 2, NAME_SIZE.z / 2),
);
export const NAME_BOUNDING_BOX_PADDED =
  NAME_BOUNDING_BOX.clone().expandByVector(
    new Vector3(OBJECT_SIZE, OBJECT_SIZE, OBJECT_SIZE),
  );

const Name = () => {
  const [text, textPhysics] = useBox<Group>(() => ({
    mass: 16,
    args: NAME_SIZE.toArray(),
    position: [0, NAME_SIZE.z / 2, 0],
  }));
  const textMesh = useRef<Mesh>(null!);
  const material = useRef<MeshStandardMaterial>(null!);

  useRainbow(material);
  useLayoutEffect(() => {
    if (text.current) {
      const boundingBox = new Box3().setFromObject(text.current);
      const width = boundingBox.max.x - boundingBox.min.x;
      const height = boundingBox.max.y - boundingBox.min.y;
      const depth = boundingBox.max.z - boundingBox.min.z;

      textMesh.current.position.set(-width / 2, -height / 2, -depth / 2);
      textPhysics.rotation.set(-Math.PI / 2, 0, 0);
    }
  });

  return (
    <group ref={text}>
      <Text3D font={Inter_Bold as any} ref={textMesh}>
        TrèsAbhi
        <meshStandardMaterial ref={material} />
      </Text3D>
    </group>
  );
};
export default Name;
