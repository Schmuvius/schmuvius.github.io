import { styled } from 'stitches.config';
import Search from './Search';

const Container = styled('div', {
  padding: '2rem 0',
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',

  '@verticalNavbar': {
    flexDirection: 'column',
  },
});
const Logo = styled('img', {
  width: '10rem',
});

export default function Navbar() {
  return (
    <Container>
      <Logo src="/logo.svg" />
      <Search />
    </Container>
  );
}
