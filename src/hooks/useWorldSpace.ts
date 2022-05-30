import { useThree } from '@react-three/fiber';

/**
 * Goes from -1 to 1 on both axis
 */
function useWorldSpace(x: number, y: number, z = 0): [number, number, number] {
  const {
    camera,
    gl: { domElement: canvas },
  } = useThree();
  const boundingClientRect = canvas.getBoundingClientRect();

  const visibleWorldX = boundingClientRect.width / 2 / camera.zoom;
  const visibleWorldY = boundingClientRect.height / 2 / camera.zoom;
  const worldX = x * visibleWorldX;
  const worldY = y * visibleWorldY;

  return [worldX, worldY, z];
}

export default useWorldSpace;
