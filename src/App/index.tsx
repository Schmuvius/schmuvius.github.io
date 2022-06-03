import * as SnappedScroller from 'components/SnappedScroller';
import useSystemTheme from 'hooks/useSystemTheme';
import { darkTheme, globalStyles } from 'stitches.config';
import Playground from './components/Playground';
import PlaygroundOverlay from './components/PlaygroundOverlay';
import { container } from './styles';

const App = () => {
  const systemTheme = useSystemTheme();

  globalStyles();

  return (
    <div
      className={`${
        systemTheme === 'dark' ? darkTheme : undefined
      } ${container()}`}
    >
      <SnappedScroller.Container>
        <SnappedScroller.Item style={{ position: 'relative' }}>
          <Playground />
          <PlaygroundOverlay />
        </SnappedScroller.Item>
        <SnappedScroller.Item></SnappedScroller.Item>
      </SnappedScroller.Container>
    </div>
  );
};
export default App;
