import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
const App = lazy(() => import('App'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
