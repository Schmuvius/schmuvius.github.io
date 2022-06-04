import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import { MeshStandardMaterial } from 'three';

const LIGHTNESS = 0.5;
const SATURATION = 1;

const COLOR_SPEED = 1 / 100000;

const useRainbow = (material: MutableRefObject<MeshStandardMaterial>) => {
  const offset = Math.random() * (1 / COLOR_SPEED);

  useFrame(() => {
    material.current.color.setHSL(
      ((performance.now() + offset) * COLOR_SPEED) % 1,
      SATURATION,
      LIGHTNESS,
    );
  });
};
export default useRainbow;
