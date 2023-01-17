import 'App.css';
import { StrictMode } from 'preact/compat';
import Router from 'Router';
import { styled, theme } from 'stitches.config';

const AppWrapper = styled('div', {
  backgroundColor: theme.colors.appBackground1,
  width: '100vw',
  height: '100vh',
});

export default function App() {
  return (
    <StrictMode>
      <AppWrapper>
        <Router />
      </AppWrapper>
    </StrictMode>
  );
}
