import {
  DiscordLogoIcon,
  DotFilledIcon,
  GitHubLogoIcon,
  RocketIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import ButtonPrimitive from 'components/HeroButton';
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
  gap: theme.space.gapRelatedMajor,
});
const LightShow = styled(LightShowPrimitive, {
  width: '100%',
  height: '100%',
});
const HeroButton = styled(ButtonPrimitive, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.space.gapRelatedRegular,

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
  alignItems: 'center',
  justifyContent: 'center',
});
const Link = styled(LinkPrimitive, {
  display: 'flex',
  flex: 1,
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': { outline: 'none' },
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
  gap: theme.space.gapRelatedRegular,
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
            <Link to="/projects">
              <HeroButton>
                Projects <RocketIcon />
              </HeroButton>
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
