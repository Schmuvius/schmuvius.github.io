import 'App.css';
import LightShowPrimitive from 'components/LightShow';
import { Navbar } from 'components/Navbar';
import { useRef } from 'preact/hooks';
import { styled, theme } from 'stitches.config';
import { Projects } from './components/Projects';

export const MAX_COLUMNS = 5;
export const COLUMN_WIDTH = 10; // rem

const AppWrapper = styled('div', {
  backgroundColor: theme.colors.appBackground1,
  width: '100vw',
  height: '100dvh',
  position: 'relative',
});
const LightShow = styled(LightShowPrimitive, {
  width: '100%',
  height: '100%',
});
const LightShowInnerWrapper = styled('div', {
  boxSizing: 'border-box',
  padding: '0 2rem',
  height: '100%',
  width: '100%',
});
const LightShowContent = styled('div', {
  margin: 'auto',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: `${MAX_COLUMNS * COLUMN_WIDTH + (MAX_COLUMNS - 1)}rem`,
});

export default function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <AppWrapper>
      <LightShow>
        <LightShowInnerWrapper>
          <LightShowContent>
            <Navbar ref={input} />
            <Projects input={input} />
          </LightShowContent>
        </LightShowInnerWrapper>
      </LightShow>
    </AppWrapper>
  );
}
