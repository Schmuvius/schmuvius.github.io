import { styled, theme } from 'stitches.config';

export const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '8rem',
  backgroundColor: theme.colors.appBackground1,
  borderBottom: theme.borderStyles.borderNonInteractive,
});
