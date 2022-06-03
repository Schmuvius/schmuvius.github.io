import { css, theme } from 'stitches.config';

export const containerStyles = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: `radial-gradient(transparent, ${theme.colors.blackA11})`,
});
