import Playground from "components/Playground";
import styles from "index.module.scss";
import "styles/index.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Playground className={styles.playground} />
    </div>
  );
};
export default App;
