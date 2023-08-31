import {
  DiscordLogoIcon,
  DotFilledIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { styled, theme } from 'stitches.config';
import { useApp } from 'stores/app';

const Container = styled('div', {
  display: 'flex',
  gap: theme.space.gapRelatedMajor,
  position: 'absolute',
  color: theme.colors.textLowContrast,
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.regular,

  '& svg': {
    width: '1em',
    height: '1em',
  },

  variants: {
    showProjects: {
      true: {
        bottom: '-2rem',
      },
      false: {
        bottom: '2rem',
      },
    },
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

export function Socials() {
  const showProjects = useApp((state) => state.showProjects);

  return (
    <Container showProjects={showProjects}>
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
    </Container>
  );
}
