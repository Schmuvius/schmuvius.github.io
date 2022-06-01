import { useThree } from '@react-three/fiber';
import { Vector2 } from 'three';

/**
 * Goes from -1 to 1 on both axis
 */
function useWorldSpace() {
  const {
    camera,
    gl: { domElement: canvas },
  } = useThree();

  const getWorldSpace = (vector: Vector2) => {
    const boundingClientRect = canvas.getBoundingClientRect();

    const visibleWorldX = boundingClientRect.width / 2 / camera.zoom;
    const visibleWorldY = boundingClientRect.height / 2 / camera.zoom;
    const worldX = vector.x * visibleWorldX;
    const worldY = vector.y * visibleWorldY;

    return new Vector2(worldX, worldY);
  };

  return getWorldSpace;
}

export default useWorldSpace;
