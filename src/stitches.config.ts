import { indigoDark, mauveDark, purpleDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import {
  createBorderStyles,
  createColors,
  createFontSizes,
  createFontWeights,
  createRadii,
  createSizes,
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
      ...createColors(indigoDark, 'accent'),
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
      ...createBorderStyles(mauveDark),
      ...createBorderStyles(indigoDark, undefined, 'accent'),
      ...createBorderStyles(purpleDark, undefined, 'accentSecondary'),
    },

    transitions: {
      regular: '0.25s',
    },

    sizes: createSizes(),

    fontWeights: createFontWeights(),
  },

  media: {
    verticalNavbar: '(max-width: 35rem)',
  },
});
