import { CaretRightIcon } from '@radix-ui/react-icons';
import { ReactComponent as LogoPrimitive } from 'assets/images/logos/logo.svg';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { styled, theme } from 'stitches.config';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});
const Navbar = styled('div', {
  borderBottom: `0.0625rem solid ${theme.colors.componentNonInteractiveBorder}`,
  display: 'flex',
  padding: `0 ${theme.space.paddingMajor}`,
  width: '100%',
  height: '4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  position: 'relative',
});
const Logo = styled(LogoPrimitive, {
  width: '2rem',
  height: '2rem',
});
const QuickLinks = styled('div', {
  display: 'flex',
  gap: theme.space.gapUnrelatedMajor,
});
const QuickLink = styled(NavLink, {
  fontSize: theme.fontSizes[16],
  color: theme.colors.textLowContrast,
  textDecoration: 'none',

  '&.active': {
    color: theme.colors.textHighContrast,
  },
});
const Path = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.textLowContrast,
  gap: theme.space.gapRelated,
  fontSize: theme.fontSizes[16],
});
const PathItem = styled('span', {
  '& svg': {
    width: '1em',
    height: '1em',
  },

  '&::first-letter': {
    textTransform: 'capitalize',
  },
});

export default function ProjectsLayout() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Navbar>
        <Link to="/">
          <Logo />
        </Link>

        <Path>
          {pathname
            .slice(1)
            .split('/')
            .filter((item) => item !== '')
            .map((item) => (
              <PathItem key={`item-${item}`}>
                {item.replaceAll('-', ' ')}
              </PathItem>
            ))
            .map((item, index, array) =>
              index === array.length - 1
                ? [item]
                : [item, <CaretRightIcon key={`caret-${index}`} />],
            )
            .flat(1)}
        </Path>

        <QuickLinks>
          <QuickLink to="/">Home</QuickLink>
          <QuickLink to="/projects">Projects</QuickLink>
        </QuickLinks>
      </Navbar>

      <Outlet />
    </Wrapper>
  );
}
