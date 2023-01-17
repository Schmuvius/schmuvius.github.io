import { indigoDark, mauveDark, purpleDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import { createColors, createSpaces } from 'bepaint';

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
      ...createColors({ scale: mauveDark }),
      ...createColors({ scale: indigoDark, suffix: 'accentPrimary' }),
      ...createColors({ scale: purpleDark, suffix: 'accentSecondary' }),

      componentBackgroundSolid: mauveDark.mauve9,
      componentBackgroundSolid_accentPrimary: indigoDark.indigo9,
      componentBackgroundSolid_accentSecondary: purpleDark.purple9,
      componentBackgroundSolidHover: mauveDark.mauve10,
      componentBackgroundSolidHover_accentPrimary: indigoDark.indigo10,
      componentBackgroundSolidHover_accentSecondary: purpleDark.purple10,
    },

    fontSizes: {
      64: '4rem',
      14: '0.875rem',
      16: '1rem',
    },

    space: {
      ...createSpaces(),
    },

    radii: {
      regular: '0.25rem',
    },

    transitions: {
      regular: '0.25s',
    },
  },
});
