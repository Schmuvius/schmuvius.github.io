import { useFrame, useThree } from '@react-three/fiber';
import { OrthographicCamera } from 'three';
import getZoom from 'utilities/getZoom';

const ReactiveZoom = () => {
  const camera = useThree((state) => state.camera as OrthographicCamera);
  let lastZoom: number = -1;

  useFrame(() => {
    const newZoom = getZoom();

    if (lastZoom !== newZoom) {
      camera.zoom = newZoom;
      camera.updateProjectionMatrix();
      lastZoom = newZoom;
    }
  });

  return null;
};
export default ReactiveZoom;
