import {
  CaretRightIcon,
  DiscordLogoIcon,
  DotFilledIcon,
  GitHubLogoIcon,
  ReaderIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
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
  alignItems: 'center',
  justifyContent: 'center',
});
const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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
const Socials = styled('div', {
  display: 'flex',
  gap: theme.space.gapRelatedMajor,
  position: 'absolute',
  bottom: '2rem',
  color: theme.colors.textLowContrast,

  '& svg': {
    width: '1em',
    height: '1em',
  },
});
const Social = styled('a', {
  color: theme.colors.textLowContrast,
  display: 'flex',
  gap: theme.space.gapRelated,
  textDecoration: 'none',

  '&:hover': {
    color: theme.colors.textHighContrast,
  },
});

export default function Home() {
  return (
    <LightShow>
      <ContentWrapper>
        <Content>
          <Title>TrèsAbhi</Title>
          <Actions>
            <Button disabled type="solid" color="accentSecondary">
              Docs
              <ReaderIcon />
            </Button>
            <Link to="/projects">
              <Button type="solid" color="accentPrimary">
                Projects
                <CaretRightIcon />
              </Button>
            </Link>
          </Actions>
        </Content>

        <Socials>
          <Social target="_blank" href="https://discord.gg/nDt7AjGJQH">
            <DiscordLogoIcon /> Discord
          </Social>

          <DotFilledIcon />

          <Social target="_blank" href="https://twitter.com/TresAbhi_">
            <TwitterLogoIcon /> Twitter
          </Social>

          <DotFilledIcon />

          <Social target="_blank" href="https://github.com/tresabhi">
            <GitHubLogoIcon /> GitHub
          </Social>
        </Socials>
      </ContentWrapper>
    </LightShow>
  );
}
