import { RocketIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'preact/compat';
import { styled, theme } from 'stitches.config';
import { useApp } from 'stores/app';
import { HeroButton } from './HeroButton';
import { Search } from './Search';

const Container = styled('div', {
  padding: '2rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.regular,

  variants: {
    showProjects: {
      true: {
        gap: 0,
        flex: 0,
      },
      false: {
        gap: theme.space.gapUnrelatedMajor,
        flex: 1,
      },
    },
  },
});
const SearchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.regular,
  width: '100%',

  '@verticalNavbar': {
    flexDirection: 'column',
  },

  variants: {
    showProjects: {
      true: {
        gap: '2rem',
      },
      false: {
        gap: 0,
      },
    },
  },
});
const Logo = styled('img', {
  transition: theme.transitions.regular,
  textShadow: `0 0 2px ${theme.colors.componentInteractive}, 0 0 0 0 ${theme.colors.componentInteractive_accent}`,

  variants: {
    showProjects: {
      true: {
        width: '10rem',
        cursor: 'pointer',
      },
      false: {
        width: '16rem',
      },
    },
  },
});

export const Navbar = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  (props, ref) => {
    const showProjects = useApp((state) => state.showProjects);

    return (
      <Container showProjects={showProjects}>
        <SearchContainer showProjects={showProjects}>
          <Logo
            onClick={() =>
              useApp.setState((state) => ({ showProjects: false }))
            }
            showProjects={showProjects}
            src="/assets/icons/tresabhi.svg"
          />
          <Search ref={ref} />
        </SearchContainer>

        <HeroButton
          showProjects={showProjects}
          onClick={() => useApp.setState((state) => ({ showProjects: true }))}
        >
          <RocketIcon /> Projects
        </HeroButton>
      </Container>
    );
  },
);
