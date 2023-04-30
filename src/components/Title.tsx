import { styled, theme } from 'stitches.config';

const Title = styled('span', {
  fontSize: theme.fontSizes.title,
  color: theme.colors.textHighContrast,
  fontWeight: 'bold',
  textShadow: `1px 1px 2px ${theme.colors.appBackground1}`,
  userSelect: 'none',
});
export default Title;
