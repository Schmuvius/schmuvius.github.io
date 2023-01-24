import { styled, theme } from 'stitches.config';

const Button = styled('div', {
  padding: theme.space.paddingRegular,
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
        backgroundColor: theme.colors.solidBackground_accentPrimary,
        color: theme.colors.textHighContrast_accentPrimary,
      },
    },
    {
      type: 'solid',
      color: 'accentPrimary',
      disabled: false,

      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentSolidHovered_accentPrimary,
        },
      },
    },

    {
      type: 'solid',
      color: 'accentSecondary',

      css: {
        backgroundColor: theme.colors.solidBackground_accentSecondary,
        color: theme.colors.textHighContrast_accentSecondary,
      },
    },
    {
      type: 'solid',
      color: 'accentSecondary',
      disabled: false,

      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentSolidHovered_accentSecondary,
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
