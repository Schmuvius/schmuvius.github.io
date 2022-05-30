import useSystemTheme from 'hooks/useSystemTheme';
import { darkTheme, globalStyles } from 'stitches.config';
import { container } from './styles';

const App = () => {
  const systemTheme = useSystemTheme();

  globalStyles();

  return (
    <div
      className={`${
        systemTheme === 'dark' ? darkTheme : undefined
      } ${container()}`}
    ></div>
  );
};
export default App;
