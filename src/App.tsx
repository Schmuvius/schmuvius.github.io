import 'App.css';
import LightShowPrimitive from 'components/LightShow';
import Navbar from 'components/Navbar';
import { styled, theme } from 'stitches.config';

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
  padding: '0 2rem',
});
const LightShowContent = styled('div', {
  margin: 'auto',
  height: '100%',
  maxWidth: `${MAX_COLUMNS * COLUMN_WIDTH + (MAX_COLUMNS - 1)}rem`,
});

export default function App() {
  return (
    <AppWrapper>
      <LightShow>
        <LightShowContent>
          <Navbar />
        </LightShowContent>
      </LightShow>
    </AppWrapper>
  );
}
