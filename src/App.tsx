import Playground from 'components/Playground';
import styles from 'index.module.scss';
import AppStore from 'store/App';
import 'styles/index.scss';

const App = () => {
  const time = AppStore((state) => state.time);

  return (
    <div className={`${styles.app} ${styles[time]}`}>
      <Playground className={styles.playground} />
    </div>
  );
};
export default App;
