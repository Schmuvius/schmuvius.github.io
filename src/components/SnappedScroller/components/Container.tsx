import { styled } from 'stitches.config';

export const Container = styled('div', {
  scrollSnapType: 'y mandatory',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
