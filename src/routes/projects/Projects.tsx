import { styled, theme } from 'stitches.config';

const Container = styled('div', {
  width: '100%',
  height: '100%',
  padding: theme.space.paddingMajor,
});
const ContentWrapper = styled('div', {
  margin: 'auto',
  maxWidth: '64rem',
  display: 'flex',
  flexDirection: 'column',
});

export default function Projects() {
  return (
    <Container>
      <ContentWrapper>woah</ContentWrapper>
    </Container>
  );
}
