import { CaretRightIcon, ReaderIcon } from '@radix-ui/react-icons';
import ButtonPrimitive from 'components/Button';
import LightShowPrimitive from 'components/LightShow';
import Title from 'components/Title';
import { Link as LinkPrimitive } from 'react-router-dom';
import { styled, theme } from 'stitches.config';

const ContentWrapper = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
const LightShow = styled(LightShowPrimitive, {
  width: '100%',
  height: '100%',
});
const Button = styled(ButtonPrimitive, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  gap: theme.space.gapRelated,

  '&': {
    svg: {
      width: '1em',
      height: '1em',
    },
  },
});
const Actions = styled('div', {
  display: 'flex',
  gap: theme.space.gapRelatedMajor,
});
const Link = styled(LinkPrimitive, {
  display: 'flex',
  flex: 1,
  textDecoration: 'none',
});

export default function Home() {
  return (
    <LightShow>
      <ContentWrapper>
        <Title>TrèsAbhi</Title>
        <Actions>
          <Link to="/docs">
            <Button type="solid" color="accentSecondary">
              Docs
              <ReaderIcon />
            </Button>
          </Link>
          <Button disabled type="solid" color="accentPrimary">
            Projects
            <CaretRightIcon />
          </Button>
        </Actions>
      </ContentWrapper>
    </LightShow>
  );
}
