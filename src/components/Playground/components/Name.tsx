import { Text3D } from '@react-three/drei';
import Inter_Bold from 'assets/fonts/Inter_Bold.json';
import { useEffect, useRef } from 'react';
import { Box3, Mesh } from 'three';

//https://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2
const Name = () => {
  const text = useRef<Mesh>(null!);

  useEffect(() => {
    const boundingBox = new Box3().setFromObject(text.current);
    const width = boundingBox.max.x - boundingBox.min.x;
    const height = boundingBox.max.y - boundingBox.min.y;

    text.current.position.set(-width / 2, -height / 2, 0);
  });

  return (
    <Text3D font={Inter_Bold as any} ref={text}>
      TrèsAbhi
      <meshPhongMaterial color="red" />
    </Text3D>
  );
};
export default Name;
