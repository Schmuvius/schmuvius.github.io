import App from 'App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import patchThreeMeshBVH from 'utilities/patchThreeMeshBVH';

patchThreeMeshBVH();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
