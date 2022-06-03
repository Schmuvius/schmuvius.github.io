import { Vector2 } from 'three';
import usePlaygroundSpace from './usePlaygroundSpace';

/**
 * Converts a screen position to a world position
 */
const useScreenToWorldSpace = () => {
  const playgroundSpace = usePlaygroundSpace();

  const screenToWorldSpace = (position: Vector2) => {
    const x = (position.x * playgroundSpace.x) / 2;
    const y = (position.y * playgroundSpace.y) / 2;

    return new Vector2(x, y);
  };

  return screenToWorldSpace;
};
export default useScreenToWorldSpace;
