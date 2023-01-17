import App from 'App';
import { render } from 'preact';
import { StrictMode } from 'preact/compat';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as HTMLDivElement,
);
