import { useThree } from '@react-three/fiber';
import { PerspectiveCamera, Vector2 } from 'three';

/**
 * Gets the physical size of the playground space based on the camera.
 */
const usePlaygroundSpace = () => {
  const { camera } = useThree();
  const offset = Math.abs(camera.position.y);
  const verticalFOV = ((camera as PerspectiveCamera).fov * Math.PI) / 180;
  const visibleHeight = 2 * Math.tan(verticalFOV / 2) * offset;
  const visibleWidth = visibleHeight * (camera as PerspectiveCamera).aspect;

  return new Vector2(visibleWidth, visibleHeight);
};
export default usePlaygroundSpace;
