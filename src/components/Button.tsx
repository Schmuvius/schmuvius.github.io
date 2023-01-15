import { styled, theme } from 'stitches.config';

const Button = styled('div', {
  padding: theme.space.padding,
  borderRadius: theme.radii.regular,
  transition: theme.transitions.regular,
  userSelect: 'none',

  variants: {
    type: {
      solid: {},
    },

    color: {
      accentPrimary: {},
      accentSecondary: {},
    },

    disabled: {
      true: {
        opacity: '50%',
      },

      false: {
        cursor: 'pointer',
      },
    },
  },

  compoundVariants: [
    {
      type: 'solid',
      color: 'accentPrimary',

      css: {
        backgroundColor: theme.colors.componentBackgroundSolid_accentPrimary,
        color: theme.colors.textHighContrast_accentPrimary,
      },
    },
    {
      type: 'solid',
      color: 'accentPrimary',
      disabled: false,

      css: {
        '&:hover': {
          backgroundColor:
            theme.colors.componentBackgroundSolidHover_accentPrimary,
        },
      },
    },

    {
      type: 'solid',
      color: 'accentSecondary',

      css: {
        backgroundColor: theme.colors.componentBackgroundSolid_accentSecondary,
        color: theme.colors.textHighContrast_accentSecondary,
      },
    },
    {
      type: 'solid',
      color: 'accentSecondary',
      disabled: false,

      css: {
        '&:hover': {
          backgroundColor:
            theme.colors.componentBackgroundSolidHover_accentSecondary,
        },
      },
    },
  ],

  defaultVariants: {
    // TODO: add the rest
    disabled: false,
  },
});
export default Button;
