import { blackA, slate, whiteA } from '@radix-ui/colors';
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
      ...whiteA,
      ...blackA,
    },
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
  },

  '@import': 'https://fonts.googleapis.com/css?family=Inter&display=swap',
});
