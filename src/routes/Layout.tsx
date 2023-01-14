import { Outlet } from 'react-router-dom';
import { styled, theme } from 'stitches.config';

const Wrapper = styled('div', {
  backgroundColor: theme.colors.appBackground1,
  width: '100vw',
  height: '100vh',
});

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
