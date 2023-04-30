import { styled, theme } from 'stitches.config';

const HeroButton = styled('div', {
  padding: `${theme.space.paddingRegular} ${theme.space.paddingMajor}`,
  borderRadius: theme.radii.regular,
  transition: theme.transitions.regular,
  userSelect: 'none',
  color: theme.colors.textHighContrast_accent,
  fontSize: theme.fontSizes.subheading,
  backgroundImage: `linear-gradient(-45deg, ${theme.colors.componentSolid_accent}, ${theme.colors.componentSolid_accentSecondary})`,
  boxShadow: `0 0 10px ${theme.colors.component}, 0 0 0 0 ${theme.colors.component_accent}`,

  '&:hover, a:focus > &': {
    filter: 'brightness(1.1)',
    boxShadow: `0 0 10px ${theme.colors.textHighContrast_accent}, 0 0 0 1px ${theme.colors.textHighContrast_accent}`,
  },
});
export default HeroButton;
