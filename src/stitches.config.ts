import { slate, slateDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const {
  createTheme,
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...slate,
    },
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...slateDark,
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
  },
});
