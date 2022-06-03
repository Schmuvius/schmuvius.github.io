import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import { MeshStandardMaterial } from 'three';
import useSystemTheme from './useSystemTheme';

const DARK_MODE = {
  LIGHTNESS: 0.75,
  SATURATION: 1,
};
const LIGHT_MODE = {
  LIGHTNESS: 0.5,
  SATURATION: 0.5,
};

const COLOR_SPEED = 1 / 10000;

const useRainbow = (material: MutableRefObject<MeshStandardMaterial>) => {
  const offset = Math.random() * (1 / COLOR_SPEED);
  const theme = useSystemTheme();

  useFrame(() => {
    material.current.color.setHSL(
      ((performance.now() + offset) * COLOR_SPEED) % 1,
      theme === 'dark' ? DARK_MODE.SATURATION : LIGHT_MODE.SATURATION,
      theme === 'dark' ? DARK_MODE.LIGHTNESS : LIGHT_MODE.LIGHTNESS,
    );
  });
};
export default useRainbow;
