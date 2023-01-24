import { indigoDark, mauveDark, purpleDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import {
  createBordersStyles,
  createColors,
  createFontSizes,
  createRadii,
  createSpaces,
} from 'bepaint';

export const {
  config,
  createTheme,
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
      ...createColors(mauveDark),
      ...createColors(indigoDark, 'accentPrimary'),
      ...createColors(purpleDark, 'accentSecondary'),
    },
    fontSizes: {
      ...createFontSizes(),

      // TODO: add this to bepaint
      title: '4rem',
    },
    space: createSpaces(),
    radii: createRadii(),
    borderStyles: {
      ...createBordersStyles(mauveDark),
      ...createBordersStyles(indigoDark, 'accentPrimary'),
      ...createBordersStyles(purpleDark, 'accentSecondary'),
    },

    transitions: {
      regular: '0.25s',
    },
  },
});
