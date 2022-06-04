import * as SnappedScroller from 'components/SnappedScroller';
import Playground from 'routes/Home/components/Playground';
import { containerStyles } from './styles';

const Home = () => {
  return (
    <div className={containerStyles()}>
      <SnappedScroller.Container>
        <SnappedScroller.Item style={{ position: 'relative' }}>
          <Playground />
          {/* <PlaygroundOverlay /> */}
        </SnappedScroller.Item>
        <SnappedScroller.Item />
      </SnappedScroller.Container>
    </div>
  );
};
export default Home;
